// Input data on page's form
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'inputClientsData') {
    const registerButton = document.getElementById('registerButton');
    for (const client of message.clients) {
      registerWhenReady(registerButton, client);
    }
  }
});

// Wait until register button is enabled before entering data
function registerWhenReady(registerButton, client) {
  if (registerButton.disabled) {
    setTimeout(() => { registerWhenReady(registerButton, client); }, 500);
  } else {
    for (const [key, value] of Object.entries(client)) {
      document.getElementById(key).value = value;
    }
    registerButton.click();
  }
} 