//> Add score for each player

export function updateScore(winner) {
  const player = document.getElementById(`${winner.marker}`);
  const currentScore = parseInt(player.innerHTML, 10);
  player.textContent = currentScore + 1;
}
