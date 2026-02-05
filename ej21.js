const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const canVote = []; 
const cannotVote = [];
for (const user of users) {
    if (user.years >= 18) {
        canVote.push(user.name);
    }else {
        cannotVote.push(user.name);
    }   
}


console.log(canVote);
console.log(cannotVote);