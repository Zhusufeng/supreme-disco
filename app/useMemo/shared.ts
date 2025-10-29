export const slowFactorial = (n: number): number => {
  console.log("Calculating factorial for", n);
  let result = 1;
  for (let i = 1; i <= n; i++) {
    // Artificial slowdown
    for (let j = 0; j < 1000; j++) {
      console.log(j);
    }
    result *= i;
  }
  return result;
};

export const NUMBERS: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
