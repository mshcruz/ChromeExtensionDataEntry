chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'inputClientsData') {
    for (const client of message.clients) {
      for (const [key, value] of Object.entries(client)) {
        document.getElementById(key).value = value;
      }
      document.getElementById('registerButton').click();
    }
    sendResponse('Clients registered.');
  }
});
