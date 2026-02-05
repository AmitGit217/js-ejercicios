const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];


const lessThan100min = movies.filter(movie => movie.durationInMinutes < 100);
const between100And200min = movies.filter(movie => movie.durationInMinutes >= 100 && movie.durationInMinutes <= 200);
const moreThan200min = movies.filter(movie => movie.durationInMinutes > 200);

console.log("Películas con duración menor a 100 minutos:");
lessThan100min.forEach(movie => console.log(movie.name));

console.log("Películas con duración entre 100 y 200 minutos:");
between100And200min.forEach(movie => console.log(movie.name));

console.log("Películas con duración mayor a 200 minutos:");
moreThan200min.forEach(movie => console.log(movie.name));