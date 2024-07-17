const wrapper = document.getElementById('wrapper');

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];
setInterval(() => {
  const combo = combinations[Math.floor(Math.random() * combinations.length)];
  const [a, b] = Object.values(combo);
  
  wrapper.setAttribute('data-configuration', a.toString());
  wrapper.setAttribute('data-roundness', b.toString());
}, 3000);