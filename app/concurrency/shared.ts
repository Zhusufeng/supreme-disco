// Fake fetch that resolves after a delay
export const fakeFetch = (endpoint: string, delay: number): Promise<string> => {
  console.log(`Fetching ${endpoint}...`);
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(`✅ Finished ${endpoint}`);
      resolve(`Data from ${endpoint}`);
    }, delay)
  );
};

export enum FetchType {
  CONCURRENT = "Concurrent",
  SERIAL = "Serial",
}
