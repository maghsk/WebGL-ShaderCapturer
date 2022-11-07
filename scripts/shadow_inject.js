const injectedScript = document.createElement('script');
injectedScript.src = chrome.runtime.getURL('scripts/inject.js');
(document.head || document.documentElement).appendChild(injectedScript);