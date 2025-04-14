const letters = [
  { letter: 'А', image: 'a.png' },
  { letter: 'Б', image: 'b.png' },
  { letter: 'В', image: 'v.png' },
];

function startGame() {
  const random = letters[Math.floor(Math.random() * letters.length)];
  const gameArea = document.getElementById('game-area');

  gameArea.innerHTML = `
    <h2>Какая это буква?</h2>
    <img src="${random.image}" alt="семафор" width="200">
    <div id="choices"></div>
  `;

  const choices = shuffleArray(letters).map(item => {
    return `<button onclick="checkAnswer('${item.letter}', '${random.letter}')">${item.letter}</button>`;
  });

  document.getElementById('choices').innerHTML = choices.join('');
}

function checkAnswer(answer, correct) {
  const gameArea = document.getElementById('game-area');
  if (answer === correct) {
    gameArea.innerHTML = `<p>✅ Верно! Это "${correct}".</p><button onclick="startGame()">Следующая</button>`;
  } else {
    gameArea.innerHTML += `<p>❌ Неверно! Попробуй ещё раз.</p>`;
  }
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
