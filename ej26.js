const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

products.forEach(product => {
    if (product.sellCount > 20) {   
        goodProducts.push(product);
    } else {
        badProducts.push(product);
    }   
});

console.log("Productos con más de 20 ventas:");
goodProducts.forEach(product => console.log(product.name));

console.log("Productos con 20 ventas o menos:");
badProducts.forEach(product => console.log(product.name));