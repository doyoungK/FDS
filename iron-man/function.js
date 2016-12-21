// var ironman;
// ironman = getElementsByClassName('ironman-print-button');
// ironman.getAttribute(message);
// if (onclick) {
//   ironman.setAttribute (message, 'I am Ironman.');
// }

(function(global) {
  'use strict';

  // var ironman_voice = new Audio(); 자바스크립트 방법
  var ironman_voice = document.createElement('audio'); // 표준문서객체모델 API방법

  ironman_voice.setAttribute('src', 'home.mp3');
  ironman_voice.oncanplay = function() {
    // console.log('음원파일이 재생될 준비가되었습니다.');
    // ironman_voice.play();
    // = this.play();
  };

  console.log('생성된 오디오 객체 인스턴스:', ironman_voice);

  var ironman_messages = [];
  var ironman_message_count = 0;

  ironman_messages.push('I am Ironman.');
  ironman_messages.push('I\'m fan of Ironman.');
  ironman_messages.push('I love Ironman.');
  ironman_messages.push('We love Ironman.');
  console.log('ironman_messages:', ironman_messages);

  var ironman = document.querySelector('.ironman');
  var ironman_message = ironman.querySelector('.message');
  var ironman_button = ironman.querySelector('.ironman-print-button');

  // console.log('ironman:', ironman);
  // console.log('ironman_massage:', ironman_message);
  // console.log('ironman_button:', ironman_button);

  ironman_button.onclick = function() {
    // console.log('ironman_massage text', ironman_massage.firstChild.nodeValue);
    // var print_message.firstChild
    var print_message = ironman_messages[ ironman_message_count++ % ironman_messages.length ];
    ironman_message.firstChild.nodeValue = print_message;
    ironman_message.textContent = print_message;
    ironman_message.innerHTML = print_message;
    ironman_voice.play();
  };
  ironman_button.onmouseleave = function() {
    ironman_voice.pause();
    ironman_voice.currentTime = 0;
  };
})(this);
