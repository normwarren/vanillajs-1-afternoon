const colorInput = document.getElementById('colorInput');
const idInput = document.getElementById('idInput');

function setCard() {

  const inputColor = colorInput.value; 
  const cardId = idInput.value;

  console.log(inputColor);
  console.log(cardId);
  document.getElementById(cardId).style.color = inputColor;

}


function resetColors(){
  document.getElementById('diamonds').style.color = "grey";
  document.getElementById('clubs').style.color = "grey";
  document.getElementById('hearts').style.color = "grey";
  document.getElementById('spades').style.color = "grey";
}
