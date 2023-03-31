// generate array of 100 random numbers
export function generateRandomNumbers(): number[] {
  let randomNumbers: number[] = [];
  for (let i = 0; i < 100; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }
  return randomNumbers;
}
