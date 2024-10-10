function generateTeams(players) {
  const shuffledPlayers = players.sort(() => 0.5 - Math.random());

  const half = players.length / 2;

  const teamA = shuffledPlayers.slice(0, half);
  const teamB = shuffledPlayers.slice(half);

  return {
    teamA,
    teamB,
  };
}

document.getElementById("generateButton").onclick = function () {
  const input = document.getElementById("playersInput").value;
  const playersList = input
    .split(" ")
    .map((player) => player.trim())
    .filter((player) => player);
  const resultDiv = document.getElementById("result");
  const inputType = document.querySelector(
    'input[name="inputType"]:checked'
  ).value;

  if (!input.trim()) {
    resultDiv.innerHTML = "Nama pemain tidak boleh kosong.";
  } else if (inputType === "genap" && playersList.length % 2 !== 0) {
    resultDiv.innerHTML = "Jumlah pemain harus genap.";
  } else if (inputType === "ganjil" && playersList.length % 2 === 0) {
    resultDiv.innerHTML = "Jumlah pemain harus ganjil.";
  } else {
    const teams = generateTeams(playersList);
    resultDiv.innerHTML = `
          <h2>Hasil Pembagian Tim:</h2>
          <p><strong>Team A:</strong> ${teams.teamA.join(", ")}</p>
          <p><strong>Team B:</strong> ${teams.teamB.join(", ")}</p>
      `;
  }
};
