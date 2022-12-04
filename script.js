const teasSelect = document.getElementById("teas")
const teas = ['Classic Black', 'Thai Tea', 'Matcha Tea', 'Earl Gray Tea', 'Cocoa Mint Tea',
'Jasmin Tea', 'Matcha Smoothie', 'Coconuts Smoothie', 'Thai Tea Smoothie', 'Chocolate Smoothie'];

(function populateTeas(){
  for(let i = 0; i < teas.length; i++){
    const optiion = document.createElement('option');
    optiion.textContent = teas[i];
    teasSelect.appendChild(optiion);
  }
})();