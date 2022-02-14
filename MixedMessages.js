const signs = ['Ram', 'Bull', 'Twins', 'Crab', 'Lion', 'Maiden', 'Scales', 'Scorpion', 'Archer', 'Goat', 'Waterbearer', 'Fish'];
const results = ['lucky', 'happy', 'sad', 'gloomy', 'dead'];
const advice = ['stay inside', 'not work', 'kill someone', 'rob a bank', 'jump from a mountain'];

const getHorroscope = () => {
    let rndSign = signs[Math.floor(Math.random() * signs.length)];
    let rndResult = results[Math.floor(Math.random() * results.length)];
    let rndAdvice = advice[Math.floor(Math.random() * advice.length)];

    console.log(`Your sign is ${rndSign}`);
    console.log(`You are ${rndResult}`);
    console.log(`You should ${rndAdvice}, today`);
}

getHorroscope();