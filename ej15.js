const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const hasCamiseta = products.filter(product => product.toLowerCase().includes('camiseta') ? product : null)

console.log(hasCamiseta)