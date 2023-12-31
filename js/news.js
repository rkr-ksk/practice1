'use strict'

{
  // ---SP用メニューボタン
  const button = document.getElementById('menu-button');
  const overlay = document.querySelector('.overlay');

  button.addEventListener('click', () => {
    if (button.classList.contains('active')) { // activeクラスが付与されている場合
      button.classList.remove('active'); // activeクラスを除去
      overlay.classList.remove('show');
    } else {
      button.classList.add('active'); // activeクラスを付与
      overlay.classList.add('show');
    }
  });

  // 字数制限
  const limit = document.querySelectorAll(".atc-abstract");
  let windowWidth = window.innerWidth; // ブラウザ幅取得
  let len = 80; // 半角80字（全角約40字）
  let str;

  for (let i=0; i < limit.length; i++) {
    str = limit[i].textContent;
    // 1400px未満かつSP幅ではない場合50文字に設定。動的には変化しないためリサイズ後に表示を調整したい場合はリロードが必要
    if (windowWidth < 1400 && 1080 < windowWidth) {
      len = 50;
    }
    if (str.length > len) {
      limit[i].textContent = str.substring(0, len) + "…";
    }
    len = 80; // リセット
  };

  // 関連記事の字数制限
  const rpLimit = document.querySelectorAll(".rp-abstract");
  let rpLen = 60; // 半角60字（全角約30字）

  for (let i=0; i < rpLimit.length; i++) {
    str = rpLimit[i].textContent;
    // 1400px未満かつSP幅ではない場合50文字に設定。動的には変化しないためリサイズ後に表示を調整したい場合はリロードが必要
    if (windowWidth < 1400 && 1080 < windowWidth) {
      rpLen = 50;
    }
    if (str.length > rpLen) {
      rpLimit[i].textContent = str.substring(0, rpLen) + "…";
    }
    rpLen = 60; // リセット
  };

  // SP表示ではSNS名を省略
  const snsName = document.querySelectorAll(".sns-name");

  for (let i=0; i < snsName.length; i++) {
    if (windowWidth < 768) {
      snsName[i].textContent = '';
    }
  }
}
