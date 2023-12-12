---
layout : post
title : 배열 함수
categories : Javascript
date : 2022-02-01
---
## 자바스크립트 배열 함수
> Array.of

```javascript
Array.of(1, 2, 3); // [1, 2, 3]

Array.of('string'); // ['string']
```
* 전달된 인수를 요소로 갖는 배열을 생성한다.

<br>

> Array.from

```javascript
Array.from({ length : 2, 0 : 'a', 1 : 'b' }); // ['a', 'b']

Array.from('Hello'); // ['H'. 'e', 'l', 'l'. 'o']

Array.from({ 1, 2, 3 }, x => x + x; // [2, 4, 6]
```
* 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.
* 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.

<br>

> Array.prototype.indexOf

```javascript
const arr = [1, 2, 3, 4];

arr.indexOf(2); // 1
// 요소 2를 검색하여 인덱스 반환

arr.indexOf(4); // 3
// 요소 4를 검색하여 인덱스 반환
```
* 인수로 전달된 요소를 검색하여 인덱스를 반환한다.

<br>

> Array.prototype.push

```javascript
const arr = [1, 2, 3, 4];

let result = arr.push(5, 6); // 마지막 요소에 추가

console.log(result); // 4

consle.log(arr); /// [1, 2, 3, 4, 5, 6]
```
* 마지막 요소에 인수를 추가한다.
* 성능이 좋지않다.
* 원본 배열을 직접 변경한다.
* push 메서드 보다 스프레드 문법을 사용하는 편이 좋다.
* 마지막 요소로 추가할 요소가 하나뿐이라면 length 프로퍼티를 사용하는게 낫다.
* 자료구조 : 스택(LIFO : Last In First Out)

<br>

> Array.prototype.pop

```javascript
const arr = [1, 2, 3, 4];

let result = arr.pop(); // 마지막 요소 제거

conosle.log(result); // 4

console.log(arr); // [1, 2, 3]
```
* 마지막 요소를 제거한다.
* 원본 배열을 직접 변경한다.
* 자료구조 : 스택(LIFO : Last In First Out)

<br>

> Array.prototype.unshift

```javascript
const arr = [1, 2, 3, 4];

let result = arr.unshift(5, 6); // 앞에서 5, 6 추가

console.log(result); // 6

console.log(arr); // [5, 6, 1, 2, 3, 4]
```
* 첫 요소에 인수를 추가한다.
* 변경된 length 프로퍼티 값을 반환한다.
* 원본 배열을 직접 변경한다.
* 자료구조 : Queue(FIFO : First In First Out)

<br>

>Array.prototype.shift

```javascript
const arr = [1, 2, 3, 4];

let result = arr.shift(); // 1 제거

console.log(result); // 1

console.log(arr); // [2, 3, 4]
```
* 첫 요소를 제거한다.
* 제거한 요소를 반환한다.
* 원본 배열을 직접 변경한다.
* 자료구조 : Queue(FIFO : First In First Out)

<br>

> Array.prototype.concat

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let result = arr1.concat(arr2);

console.log(result); // [1, 2, 3, 4, 5, 6]

result = arr1.concat(arr2, 11);
// 배열 arr2와 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열 반환

console.log(result); // [1, 2, 3, 4, 5, 6, 11]
```
* 인수로 전달된 값을 원본 배열의 마지막 요소로 추가한 새로운 배열 반환한다.
* 원본 배열은 변경되지않는다.

<br>

> Array.prototype.splice

```javascript
const arr = [1, 2, 3, 4];

const result = arr.splice(1, 2, 20, 30);
// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 20, 30 삽입

console.log(result); // [2, 3]

console.log(arr); // [1, 20, 30, 4]
```
* 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거한다.
* 원본 배열을 직접 변경한다.

<br>

> Array.prototype.slice

```javascript
const arr = [1, 2, 3];

arr.slice(0, 1); // [1]
// arr[0]부터 arr[1]까지 복사하여 반환

console.log(arr); // [1, 2, 3]
```
* 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다.
* 원본 배열은 변경되지않는다.

<br>

> Array.prototype.includes

```javascript
const arr = [1, 2, 3];

arr.includes(2); // true

arr.includes(100); // false

arr.includes(1, 1); // false
// 배열에 요소 1이 들어있는지 인덱스 1부터 확인
```
* 배열 내에 특정 요소가 포함되어 있는지 확인하여 true/false를 반환한다.

<br>

> Array.prototype.flat

```javascript
[1, [2, 3, 4, 5]].flat(); // [1, 2, 3, 4, 5]
```
* 배열 평탄화

<br>

> Array 최솟값 / 최댓값

```javascript
const arr = [1, 2, 3];
Math.min(...arr); // 1
Math.max(...arr); // 3
```
