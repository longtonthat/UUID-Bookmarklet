# UUID Bookmarklet
With a click of a bookmark, copies to your clipboard a randomly generated UUID.

## About
A little piece of Javascript, that you can save as a browser bookmarklet to easily generate UUID's (v4)

## Installation
- Create a new browser bookmark
- Set the `URL` to `javascript:` and the contents of `uuid.js`
``` 
javascript:(function() {function guid() {function s4() {return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);}return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();}function copy(text) {var input = document.createElement('input');input.style.position = 'fixed';input.style.opacity = 0;input.value = text;document.body.appendChild(input);input.select();var successful = document.execCommand('copy');document.body.removeChild(input);return successful;}var uuid = guid();var successful = copy(uuid);window.alert(successful ? "Copied UUID=" + uuid : "Failed to copy UUID");})()
```
![Bookmarklet](/bookmarklet.png =300px)
