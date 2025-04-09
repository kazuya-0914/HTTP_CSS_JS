import { fetchWeatherData } from "./weather.js";
import { DeepL } from "./translation.js";

let html = '';
const domCode = document.getElementById('dom-code');

// ----- 教材コード

try {

  

} catch(e) {
  // const deepLmsg = await DeepL(e.message);
  // html += `<div class="text-danger">【エラー】${deepLmsg}</div>`;
  html += `<div class="text-danger">【エラー】${e.message}</div>`;
}

// -----
// DOM出力
domCode.innerHTML = html;

// 天気予報
fetchWeatherData();

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
  location.reload();
});