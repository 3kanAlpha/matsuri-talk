// 背景動画再生
let vid;

jQuery(function(){
    vid = jQuery("#vid").YTPlayer({});
});

// [0, max)の範囲の一様乱数
function nextInt(max) {
  return Math.floor(Math.random() * max);
}

// JSONロード + 再生リスト構築
let voices;
let listYes = [];
let listEncourage = [];
let listDespise = [];
let listMisc = [];

$(function() {
  $.getJSON("assets/voices.json", function(data) {
    voices = data;

    for (i = 0; i < voices.length; i++) {
      const CAT = voices[i].category;

      if (CAT == "yes") listYes.push(voices[i].path);
      else if (CAT == "encourage") listEncourage.push(voices[i].path);
      else if (CAT == "despise") listDespise.push(voices[i].path);
      else listMisc.push(voices[i].path);
    }

    console.log(voices.length + " voices loaded successfully.");
  });
});

const VOICE_PATH = "assets/voice/";

// ボタンの設定
function playYes() {
  let audioSource = new Audio();
  audioSource.src = VOICE_PATH + listYes[nextInt(listYes.length)];
  audioSource.play();
}

$(function() {
  let btnYes = document.getElementById("yes");
  btnYes.addEventListener('click', playYes, false);
});

function playEncourage() {
  let audioSource = new Audio();
  audioSource.src = VOICE_PATH + listEncourage[nextInt(listEncourage.length)];
  audioSource.play();
}

$(function() {
  let btnEnc = document.getElementById("enc");
  btnEnc.addEventListener('click', playEncourage, false);
});

function playDespise() {
  let audioSource = new Audio();
  audioSource.src = VOICE_PATH + listDespise[nextInt(listDespise.length)];
  audioSource.play();
}

$(function() {
  let btnDesp = document.getElementById("desp");
  btnDesp.addEventListener('click', playDespise, false);
});
