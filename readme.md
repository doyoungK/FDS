###### Front-End Develop SCHOOL

# DAY 26

###수업 시작 전에 준비!
**json 파일**

    "clear": "rm -rf lib",
    "copy-jquery": "mkdir lib && cp node_modules/jquery/dist/jquery.min.js lib/jquery.min.js",

json파일에 코드 추가

>clear로 lib폴더를 삭제 copy-jquery로 lib폴더 생성 및 jquery.min 파일 복제

-

##1. jQuery 호출 방법
`<head>` 내에서 호출할 경우 사용하는 패턴
```
jQuery(function($) {
  'use strict';
  // $ === jQuery
});
```

`</body>` 끝 위치에서 호출할 경우 사용하는 패턴
```
(function(global, $){
  'use strict';
  // $ === jQuery
})(this, jQuery);
```

>body끝에서 불러오는 방법이 head 내에서 불러오는 방법 보다 조금 더 빠르다.

빠르기 순위

1. </body> 끝에서 호출
2. DOM content loaded
3. <head> 내에서 호출
4. onload 방법

jQuery core 참고 사이트
http://api.jquery.com/category/core/

###2. noConflict
제이쿼리와 다른 라이브러리를 혼용해서 $ 충돌이 생길경우:

    jQuery.noConflict();
$ 소유권을 포기하여 충돌을 방지할 수 있다.
---

()안에 true/false 기본값은 flase:

    jQuery.noConflict(true);
true 값을 넣으면 $, jQuery 전역 변수를 모두 포기!
---

$ 전역 변수를 포기하는 대신 다른 별칭(Alias) 변수에 jQuery를 참조:

    var $j = jQuery.noConflict();
---

**캡슐**로 감싸서 안전하게 사용하자!
```
(function(global, $){
  'use strict';
  // $ === jQuery

})(this, this.jQuery);

// 외부에 공개될 네임스페이스 객체
var fds = (function(){
  'use strict';
  // 반환 객체
  return {
    $: jQuery
  }
})(this, this.jquery.noConglict(true));

// fds 받아 쓰기
(function(fds) {
  'use strict';
  var jQuery_version = fds.$().jquery;
})(this, fds); 
```

###3. 선택자

####3.1. CSS 선택자

1. 요소(타입) 선택자
2. 그룹핑 grouping
3. 자손(하위) 선택자
4. 자식 선택자
5. class 선택자
6. multi class 선택자
7. id 선택자
8. 유니버셜(전체) 선택자
9. 인접 형제 선택자 (인접한 1개의 형제만 선택) +
10. 일반 형제 선택자 ( ) ~
11. 속성 Attribute 선택자
