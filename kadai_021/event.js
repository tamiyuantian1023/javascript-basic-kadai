// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）の待ち時間を設定
  setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
}, 2000);
});

