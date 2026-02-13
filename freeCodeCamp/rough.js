function getRandomLunch(arr){
  if(arr.length !== 0){
    const random_lunch = Math.random(arr);
    console.log(`Randomly selected lunch: ${random_lunch}`);
  } else{
    console.log("No lunches available.")
  }
}

getRandomLunch(["Pizza", "Burger", "Fries", "Salad"]);