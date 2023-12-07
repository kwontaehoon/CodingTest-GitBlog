---
layout : post
title : 두 정수 사이의 합
categories : Programmers
date : 2023-12-04
---
> 문제<br>

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

> 제한사항<br>

a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.

> 입출력 예<br>

|a|b|return|
|:--:|:--:|:--:|
|3|5|12|
|3|3|3|
|5|3|12|

> 코드

### JavaScript

<script src="https://gist.github.com/kwontaehoon/fc30172eea32eb6609fd3467b84cbd12.js"></script>

### Refactoring

comment: Math 객체를 활용하여 최솟값과 최댓값을 구분없이 바로 사용할 수 있다.