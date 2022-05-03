var string =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod "; /* type your text here */
    var array = string.split("");
    var timer;

    function frameLooper() {
      if (array.length > 0) {
        document.getElementById("name").innerHTML += array.shift();
      } else {
        clearTimeout();
      }
      loopTimer = setTimeout('frameLooper()', 100); /* change 70 for speed */

    }
       
    frameLooper();