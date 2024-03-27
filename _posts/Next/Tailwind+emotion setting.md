---
layout : post
title : tailwind + emotion = twin.macro
categories : Next
date : 2023-03-27
---

## 개요
- Nest.js + TypeSript에서 tailwind와 emotion을 함께 사용할 수 있다.
- custom css가 필요한 경우 해당 css를 매번 만들어써야했기 때문에 inline style을 주로 사용했다..
- emotion을 도입함으로써 inline style이 가지고있는 성능이슈를 해결할 수 있다.
- twin.macro setting 튜토리얼을 적어보았다.

## twin.macro Setup
```
npm i @emotion/react @emotion/styled
npm i -S @emotion/serialize
npm i -D twin.macro @emotion/babel-plugin babel-plugin-macros @babel/plugin-syntax-typescript @babel/preset-react
```

## make withTwin.js
```
/* eslint-disable no-param-reassign */
const path = require('path');

const includedDirs = [path.resolve(__dirname, 'src')];

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev, isServer } = options;
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              presets: [
                [
                  '@babel/preset-react',
                  { runtime: 'automatic', importSource: '@emotion/react' },
                ],
              ],
              plugins: [
                require.resolve('babel-plugin-macros'),
                require.resolve('@emotion/babel-plugin'),
                [
                  require.resolve('@babel/plugin-syntax-typescript'),
                  { isTSX: true },
                ],
              ],
            },
          },
        ],
      });

      if (!isServer) {
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          fs: false,
          module: false,
          path: false,
          os: false,
          crypto: false,
        };
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }
      return config;
    },
  };
};
```

## tsconfig.json
```
{
  ...

  "types": ["types"] // add
}
```

## next.config.js
```
const withTwin = require('./withTwin');

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
});

module.exports = nextConfig;
```

## 적용
```
'use client'
import tw from "twin.macro";
import React from 'react'

const page = () => {
  const width = "300px";
  return (
    <div css={[
      tw`bg-black`,
      {
        width: width,
        height: '200px',
      },
    ]}>
      <div className='text-fuchsia-100'>test</div>
    </div>
  )
}

export default page
```

<br />

#### 출처
https://github.com/MyeonghoonNam/eslint-prettier-setting-practice/tree/main/next-typescript-twinmacro
