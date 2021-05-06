// 背景動画再生
let vid;

jQuery(function(){
    vid = jQuery("#vid").YTPlayer({});
});

// [0, max)の範囲の一様乱数
function nextInt(max) {
  return Math.floor(Math.random() * max);
}

// ボタンの設定
function playYes() {
  const l = 1;
  let audio_source = new Audio();
  audio_source.src = "assets/voice/y" + String(nextInt(l)) + ".mp3";
  // audio_source.src = "assets/voice/wassyoi.mp3";
  audio_source.play();
}

$(function() {
  let btnYes = document.getElementById("yes");
  btnYes.addEventListener('click', playYes, false);
});

function playEncourage() {
  const l = 1;
  let audio_source = new Audio();
  audio_source.src = "assets/voice/e" + String(nextInt(l)) + ".mp3";
  audio_source.play();
}

$(function() {
  let btnEnc = document.getElementById("enc");
  btnEnc.addEventListener('click', playEncourage, false);
});

function playDespise() {
  const l = 1;
  let audio_source = new Audio();
  audio_source.src = "assets/voice/d" + String(nextInt(l)) + ".mp3";
  audio_source.play();
}

$(function() {
  let btnDesp = document.getElementById("desp");
  btnDesp.addEventListener('click', playDespise, false);
});
