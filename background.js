

	function searchMnemonicDictionary(e){
		
		var searchstring = e.selectionText;
		
		chrome.tabs.create({url: "https://mnemonicdictionary.com/?word=" + searchstring})
	}
	
	chrome.contextMenus.create({
		title: "Search MnemonicDictionary for \"%s\"",
		contexts:["selection"],
		onclick: searchMnemonicDictionary
	});