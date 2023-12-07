---
layout : post
title : 약수의 개수와 덧셈
categories : Programmers
date : 2023-12-07
---
> 문제<br>

두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

> 제한사항<br>

1 ≤ left ≤ right ≤ 1,000

> 입출력 예<br>

|left|right|result|
|:--:|:--:|:--:|
|123|17|43|
|24|27|52|

> 코드

### JavaScript

<script src="https://gist.github.com/kwontaehoon/d1440a6598487b3a6716e0c5366874b4.js"></script>

### Refactoring

제곱근의 갯수가 정수면 약수의 갯수는 홀수개다