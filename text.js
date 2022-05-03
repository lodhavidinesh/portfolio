

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('name').innerHTML = ("dkslg")
    
    alert("hello")
    i++;
    setTimeout(typeWriter, speed);
  }
}

