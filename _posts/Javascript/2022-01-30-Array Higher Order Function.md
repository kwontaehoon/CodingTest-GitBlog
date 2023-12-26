---
layout : post
title : 배열 고차 함수
categories : Javascript
date : 2022-01-30
---
## 배열 고차 함수

>Array.prototype.sort

1. 오름차순, 내림차순

```javascript
const fruits = ['Banana', 'Orange', 'Apple'];
fruit.sort(); // 오름차순 정렬
console.log(fruits); // ['Apple', 'Banana', 'Orange']

fruits.reverse(); // 내림차순 정렬
console.log(fruits); // ['Orange', 'Banana', 'Apple']

const test = [[1, 3], [2, 1], [3, 2]];
test.sort((a,b) => b[1] - a[1]);
console.log(test); // [[1,3], [3,2], [2,1] 처럼 두번째 index로 정렬을 할 수 있다.
```
* 내림차순 정렬은 오름차순으로 정렬한 후 reverse 메서드를 사용한다.
* 2차원 배열에서 해당 value의 순위를 매길 때 두번째 index를 가지고도 정렬을 할 수 있다.

<br>

2. 유니코드 정렬

```javascript
const points = [40, 1, 5, 2, 25, 10];
points.sort();
console.log(points); // [1, 10, 2, 25, 40, 5]
// 10의 유니코드 코드 포인트가 2의 유니코드 코드 포인트보다 앞선다.
```
* sort 메서드의 기본 정렬 순서는 유니코드 코드 포인트 순서를 따른다.
* 따라서 숫자 요소를 정렬할 때는 sort 메서드에 정렬순서를 정의하는 비교 함수를 인수로 전달해야 한다.

```javascript
const points = [40, 1, 5, 2, 25, 10];

points.sort((a, b)=> a - b);
// 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬 ex) 40 - 1 = 39>0 이것은 0보다 크므로 자리 바뀜

console.log(points); // [1, 2, 5, 10, 25, 40]

points.sort((a, b)=> b - a);
// 비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬 ex) 40 - 1 = 39>0 이것은 0보다 크므로 자리 보존

console.log(points); // [40, 25, 10, 5, 2, 1]
```
<br>

>Array.Prototype.forEach

```javascript
const numbers = [1, 2, 3];

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
} // 1, 2, 3

numbers.forEach(item => console.log(item)); // 1, 2, 3
```

* 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백 함수로 전달받아 반복 호출한다.
* 조건문과 반복문을 제거하여 복잡성을 해결 -> 가독성이 좋다.
* for문에 비해 성능은 좋지않다.
* 반환값 : undefined
* 시간이 많이 걸리는 복잡한 코드 또는 높은 성능이 필요한 경우가 아니라면 forEach 메서드 사용 권장한다.

<br>

>Array.prototype.map

```javascript
const numbers = [1, 4, 9];

const roots = numbers.map(item => Math.sqrt(item)); // 1, 2, 3
```
* forEach와 마찬가지로  콜백 함수로 전달받아 반복 호출한다.
* 반환값 : 새로운 배열
* map 메서드를 호출한 배열과 map 메서드가 생성하여 반환한 배열은 1:1 매칭된다. -> 빈 요소까지 반환한다.

<br>

>Array.prototype.filter

```javascript
const numbers = [1, 2, 3, 4, 5];

const odds = numbers.filter(item => item % 2);
console.log(odds); // [1, 3, 5]
```
* 위와 마찬가지로 콜백 함수로 전달받아 반복 호출한다.
* 반환값 : true인 요소로 구성된 새로운 배열
* filter 메서드를 호출한 배열과 filter 메서드가 생성하여 반환한 값은 같거나 작다. -> 빈 요소를 반환하지않는다.

<br>

>Array.prototype.reduce

```javascript
const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0);

console.log(sum); // 10

const values = [1, 2, 3, 4, 5, 6];

const average = values.reduce((acc, cur, i, { length }) => { return i === length - 1 ? (acc + cur)/length : acc + cur;}, 0);

console.log(average); // 3.5

const sum = [].reduce((acc, cur) => acc + cur); // error
```
* 첫 번째 인수로 콜백 함수, 두 번째 인수로 초기값을 전달받는다.
* 반환값 : 콜백 함수와 초기값 0을 전달받아 자신을 호출한 배열의 모든 요소를 누적한 결과
* 빈 배열로 호출하면 초기값이 필요하다.



