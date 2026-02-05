const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const newSchedule = foodSchedule.map((food) => {
  if (food.isVegan) {
    return food;
  } else {
     return { name: fruits.shift(), isVegan: true };
    }
});

console.log(newSchedule);