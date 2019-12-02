

for (let i = 0; i < 9; i++) {
    let square = document.querySelectorAll('.square')
    square[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        evt.target.style.backgroundColor = "blue"
    })
}