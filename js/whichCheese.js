 
/*Array designed to give 1/10 for Brie, 1/10 for String Cheese, 2/10 for Gouda, and 6/10 for Cheddar*/
const cheeses = [
    "Gouda" , 
    "Gouda", 
    "String Cheese" , 
    "Cheddar" , 
    "Cheddar" , 
    "Cheddar" , 
    "Cheddar" , 
    "Cheddar", 
    "Cheddar" , 
    "Brie"
];

 /*ensures the value returned is between 0 and 9 to be used in array location */
function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10);
    cheeseName = cheeses[randomNumber];
    return cheeseName;
}

document.querySelector("cheeseResultDisplay").innerHTML = `Your cheese is ${getRandomNumber()}`;

console.log(`Your cheese is ${getRandomNumber()}`);








