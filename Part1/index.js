

const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);
  
  let topLeft = board[0];
  let topCenter = board[1];
  let topRight = board[2];
  let midLeft = board[3];
  let midCenter = board[4];
  let midRight = board[5];
  let lowLeft = board[6];
  let lowCenter = board[7];
  let lowRight = board[8];
 

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = '0';
  }
  console.log(topLeft)
  
  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (midLeft !== undefined && midLeft === midCenter && midLeft === midRight) {
    alert(`${midLeft} is the winner`);
    return;
  }
  if (lowLeft !== undefined && lowLeft === lowCenter && lowLeft === lowRight) {
    alert(`${lowLeft} is the winner`);
    return;
  }

  if (topLeft !== undefined && topLeft === midLeft && midLeft === lowLeft) {
    alert(`${lowLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === midCenter && midCenter === lowCenter) {
    alert(`${lowCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === midRight && midRight === lowRight) {
    alert(`${lowCenter} is the winner`);
    return;
  }
    //cross topLeft to lowRight
    if (topLeft !== undefined && topLeft === midCenter && midCenter === lowRight) {
      alert(`${lowCenter} is the winner`);
      return;
    }
    //cross topRight to lowLeft
    if (topRight !== undefined && topRight === midCenter && midCenter === lowLeft) {
      alert(`${lowCenter} is the winner`);
      return;
    }
    //Cats game? 
    let boardFull = true;
    for(let i = 0; i <= board.length; i++){
      if(board[i] == undefined){
        boardFull = false;
      }
    }
    if(boardFull == true){
    alert('This is a Cat\'s game');
    } 
}