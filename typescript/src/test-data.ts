// generate array of 100 random numbers
export function generateRandomNumbers(): number[] {
  let randomNumbers: number[] = [];
  for (let i = 0; i < 100; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }
  return randomNumbers;
}

const cityNames = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
  'Fort Worth',
  'Columbus',
  'San Francisco',
  'Charlotte',
  'Indianapolis',
  'Seattle',
  'Denver',
  'Washington DC',
];

export function generateRandomCityNames(): string[] {
  const randomCityNames: string[] = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * cityNames.length);
    const randomCityName = cityNames[randomIndex];
    randomCityNames.push(randomCityName);
  }
  return randomCityNames;
}
