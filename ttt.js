const squares = document.querySelectorAll(".squares");


for (let i = 0; i < squares.length; i++) {
    square[i].addEventListener('click', backgroundColor);
        function backgroundColor(e) {
        e.preventDefault();
        if (redOrBlue %2 === 0) {
            this.style.backgroundColor = "blue";
            winner();
            redOrBlue = redOrBlue += 1;
            playersTurn.innerText = "Red player's turn";
            e.target.removeEvent("click", backgroundColor)
        } else {
			this.style.backgroundColor = "red";
			winner();
			redOrBlue = redOrBlue +=1;
			turn.innerText = "Blue player's turn.";
			e.target.removeEventListener("click", backgroundColor)
		} 
	}
};
