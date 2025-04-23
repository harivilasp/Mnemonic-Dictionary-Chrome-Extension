
// Register context menu when extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "mnemonicDictionarySearch",
    title: "Search MnemonicDictionary for '%s'",
    contexts: ["selection"]
  });
});

// Listen for context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "mnemonicDictionarySearch" && info.selectionText) {
    chrome.tabs.create({
      url: "https://mnemonicdictionary.com/?word=" + encodeURIComponent(info.selectionText)
    });
  }
});