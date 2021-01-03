const div = document.createElement('div');
div.className = 'foo';
console.log(div.outerHTML);

div.className = 'anotherclass';
console.log(div.outerHTML);