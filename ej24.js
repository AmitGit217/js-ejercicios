const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

const sum = products.reduce((accumulator, product) => accumulator + product.sellCount, 0);

console.log(`El número total de ventas es: ${sum}`);