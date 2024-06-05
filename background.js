chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.scripting.executeScript({
    target: { tabId: activeInfo.tabId },
    files: ['content.js']
  }).catch(err => console.log('Error injecting script:', err));
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    }).catch(err => console.log('Error injecting script:', err));
  }
});
