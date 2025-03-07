let team = [
    {name: "Charles", role: "Comedian", experience: 10 + " years", gender: "male", age: 35, weight: 80, dietRestrictions: "no restriction"},
    {name: "Oswald", role: "Captain", experience: 25 + " years", gender: "male", age: 29, weight: 75, dietRestrictions: "minor restriction"},
    {name: "Maxime", role: "Engineer", experience: 15 + " years", gender: "male", age: 28, weight: 77, dietRestrictions: "no restriction"},
    {name: "Sebastien", role: "Navigation", experience: 4 + " years", gender: "male", age: 40, weight: 81, dietRestrictions: "no restriction"},
    {name: "Julien", role: "Doctor", experience: 18 + " years", gender: "male", age: 30, weight: 78, dietRestrictions: "major restriction"},
    {name: "Antoine", role: "Vice Captain", experience: 12 + " years", gender: "male", age: 12, weight: 50, dietRestrictions: "no restriction"},
    {name: "Malik", role: "Biologist", experience: 6 + " years", gender: "male", age: 38, weight: 79, dietRestrictions: "minor restriction"},
];
team.forEach (function(member) {
    alert('Name : ${member.name},')
});

let resources = {
    oxygen: 67 + "%",
    fuel: 8000 + "L",
    food: 3 + " daily rations",
    water: 3 + " liters per day",
    toothBrush: 7 + " per week"
};

alert(resources);