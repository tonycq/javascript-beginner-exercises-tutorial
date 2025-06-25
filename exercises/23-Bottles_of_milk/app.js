function song() {
  for (let i = 99; i >= 1; i--) {
    let currentBottle = i === 1 ? '1 bottle' : `${i} bottles`;
    let nextBottle;

    if (i - 1 === 1) {
      nextBottle = '1 bottle';
    } else if (i - 1 === 0) {
      nextBottle = 'no more bottles';
    } else {
      nextBottle = `${i - 1} bottles`;
    }

    console.log(`${currentBottle} of milk on the wall, ${currentBottle} of milk. Take one down and pass it around, ${nextBottle} of milk on the wall.`);
  }

  // Verso final literal
  console.log('No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.');
}

song(); // ✅ ¡AHORA sí se llama la función!
