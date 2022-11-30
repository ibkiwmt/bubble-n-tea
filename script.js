var rangeslider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
rangeslider.oninput = function() {
  output.innerHTML = this.value;
}