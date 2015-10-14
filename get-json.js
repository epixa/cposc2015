'use strict';

export default function getJSON(url) {
  return new Promise(function(onSuccess, onError) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.setRequestHeader('Accept', 'application/json');

    xhr.addEventListener('load', function() {
      const json = JSON.parse(this.responseText);
      onSuccess(json);
    });

    xhr.addEventListener('error', onError);

    xhr.send();
  });
}
