// let calculate = document.getElementById('calculate');

// calculate.onclick = function (element) {
//   console.log(element)
// }

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});