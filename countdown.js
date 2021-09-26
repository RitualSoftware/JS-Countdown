<script>
  var displayLocation  = document.getElementById("timeLeft");
  var elapsedTime;
  var secconds = 1800;
  var counter = setInterval(function () {
    "use strict";
            counterBegin();
      }, 1000);

function counterBegin() {
    "use strict";
    var minutes = Math.floor(secconds / 60),
    secondsLeft  = secconds % 60;
      if (secondsLeft < 10) {
        secondsLeft = '0' + secondsLeft;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
    displayLocation.innerHTML = minutes + ":" + secondsLeft;
      if (secconds > 0) {
          secconds = secconds - 1;
      } else {
        clearInterval(counter);
      }
 }
</script>
