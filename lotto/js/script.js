function counter(){
    var count = setInterval(function(){
      var c = parseInt($('.counter').text())
      $('.counter').text((++c).toString())
      if(c === 100){ 
      clearInterval(count);
        $('.counter').addClass('hide'); $('.preloader').addClass('active')
      }
    },60);
  }
  
  counter();

// lodding 

// var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//     loop: true
// });

// typewriter.typeString('인공지능 분석중')
//     .pauseFor(1000)
//     .deleteAll()
//     .typeString('로또번호 추출중')
//     .pauseFor(1000)
//     .deleteChars(7)
//     .typeString('<strong>추출이 완료되었습니다.</strong>')
//     .pauseFor(1000)
//     .start();


//   const instance = new Typewriter('#typewriter', {
//     strings: ['인공지능이 분석중입니다.', '로또번호를 추출중입니다.','추출이 완료되었습니다!'],
//     autoStart: true,
//   });

//   text 