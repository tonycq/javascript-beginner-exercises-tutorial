function sing() {
  let lyrics = "";

  // Primera parte: 4 veces "let it be,"
  for (let i = 0; i < 4; i++) {
    lyrics += "let it be, ";
  }

  // Parte intermedia
  lyrics += "there will be an answer, ";

  // Segunda parte: 5 veces "let it be,"
  for (let i = 0; i < 5; i++) {
    lyrics += "let it be, ";
  }

  // Parte final
  lyrics += "whisper words of wisdom, ";
  lyrics += "let it be";

  return lyrics.trim();
}

console.log(sing());
