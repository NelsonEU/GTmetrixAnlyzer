document.addEventListener('DOMContentLoaded', function() {
  var analyzeButton = document.getElementById('analyzeButton');
  analyzeButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      var form = document.createElement('form');
      form.action = 'http://gtmetrix.com/analyze.html?bm';
      form.method = 'post';

      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'url';
      input.value = tab.url;

      form.appendChild(input);
      document.body.appendChild(form);

      form.submit();
    })
  }, false)
}, false);
