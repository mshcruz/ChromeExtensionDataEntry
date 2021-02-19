chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  $('code').val('abc');
  $('#registrationForm').click();
  return true;
  // if (message.action === 'inputClientsData') {
  //   for (const client of message.clients) {
  //     for (const [key, value] of Object.entries(client)) {
  //       console.log(`key: ${key} - value: ${value}`);
  //       const fieldSelector = '#' + key;
  //       $(fieldSelector).val(value);
  //     }
  //     $('#registrationForm').submit();
  //   }
  //   return true;
  // }
});
