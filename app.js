export default function sum(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  console.log(sum);
  return sum;
}
sum(1, 2, 3, 4, 5, 6);
