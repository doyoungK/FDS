##### Front-End Develop SCHOOL

# DAY 29

- __Ajax__: Native & jQuery Ajax
- __UI Components__: jQuery Plugin
- __CommonJS vs AMD__: Common JavaScript
- __Webpack__: Module Bundler

### 1. AJAX(에이젝스) 비동기 통신 기술

#### 1.1. AJAX란?

AJAX
: Asynchronous  
Javascript  
And  
XML  

새로운 기술이 아닌, 기술 연계를 묶어 사용하는 기술로 Jesse James Garrett에 의해 대중화 되었다.

특징
* 페이지를 새로고침 하지 않고 도 필요한 데이타만 받아와서 내용을 업데이트
* 요청/응답 과정에서 필요한 부분만 부분요청하여 응답 받아 처리 한다.
* XML, TEXT, HTML, JSON 등과 통신해여 처리

장점
* 불필요한 대역푹이 감소하게 되었다.
* 비용을 절감 시켜 주었다.
* 기존 동기 방식 보다 빠르다.
* 사용자 대기 시간이 줄었다.

단점
* 접근성 문제가 있다.
* 검색 최적화 문제도 있다. (비어있다고 나옴)


----
##### 동기방식
classic web application model(synchronous)

* 요청과 응답 과정에서 지연시간이 있다.
* system processing할때 client 아무것도 하지 못하고 기다려야 한다.
* 매번 전체 데이터를 다 받아와서 느리다.

-----


### 1.2. XHR

XHR 생성자
: XMLHttpRequest  
Ajax 비동기 통신을 위해 XHR 객체를 생성하여 사용

`new XMLHttpRequest`
대소문자 구분 해야함!

##### 실습

로컬호스트를 서버로 사용하는 방법

1. 명령어
`http-server -o -a localhost -p 9090`

2. json파일을 생성
`npm init -y`로 json파일 생성
```
{
  "name": "Ajax",
  "version": "1.0.0",
  "description": "Ajax Study",
  "scripts": {
    "start": "http-server -o -a localhost -p 9090"
  },
  "author": ""
}
```
명령어창에 `npm start`
> 서버로 html파일을 열지 않으면 ajax를 불러올수 없다!


동기방식
> 사용자 경험이 느려짐으로 사용하지 않기를 권고

```
(function(global, Ajax){
  'use strict';
  var xhr = new XMLHttpRequest;
  xhr.open('GET', 'ajax/data.txt', false);
  xhr.send();
})(this, this.XHLHttpRequest);
```
> .open('전달인자 1', '전달인자2', '전달인자3')
>> 전달인자1. '통신 방법'  
전달인자2. '파일 경로'  
전달인자3. '비동기 설정' 동기: false 비동기: true

##### Ajax Chrome의 Console의 기능

* 동기/비동기 방식으로 파일을 성공 적으로 불러오면
  * Network - XHR - Name에서 불러온 파일을 볼수있다.
  * 파일을 누르고 Headers - Status Code가 숫자 200이면 성공적이라는 뜻이다.
  * 파일을 수정하였지만 화면에 변화가 없을 경우: Network - Disable cache를 체크한다.
    * Disable cache로 캐쉬를 저장하지 않게하여 개발중 수정사항을 확인할수 있게 해준다.
