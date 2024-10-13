document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const tokens = Array.from(document.querySelectorAll('.token'));
    
    board.addEventListener('click', moveToken);
  
    function moveToken(e) {
        const clickedToken = e.target;
        if (clickedToken.classList.contains('token') && !clickedToken.classList.contains('empty')) {
            const emptyToken = document.querySelector('.empty');
            const clickedIndex = tokens.indexOf(clickedToken);
            const emptyIndex = tokens.indexOf(emptyToken);
  
            const rowDiff = Math.abs(Math.floor(clickedIndex / 3) - Math.floor(emptyIndex / 3));
            const colDiff = Math.abs((clickedIndex % 3) - (emptyIndex % 3));
  
            if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
                // Swap the content
                emptyToken.innerHTML = clickedToken.innerHTML;
                clickedToken.innerHTML = '';
  
                // Swap the classes
                emptyToken.classList.remove('empty');
                clickedToken.classList.add('empty');
            }
        }
    }
  
    // Shuffle the tokens
    function shuffleTokens() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, ''];
        numbers.sort(() => Math.random() - 0.5);
        tokens.forEach((token, index) => {
            token.innerHTML = numbers[index];
            if (numbers[index] === '') {
                token.classList.add('empty');
            } else {
                token.classList.remove('empty');
            }
        });
    }
  
    // Call shuffleTokens when the page loads
    shuffleTokens();
  });