const now = new Date(
  Date.UTC(
    new Date().getUTCFullYear(),
    new Date().getUTCMonth(),
    new Date().getUTCDate()
  )
);

const datePart = now.toISOString().substring(0, 10);

console.log(datePart);