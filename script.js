const apple = {
    "gravity": "true",
    "mature": "true",
    "size": "small",
    "color": "red"
}

console.log("What color is this apple?");           //Modify the question

if(apple.hasOwnProperty("color")){
    console.log(apple.color);
} else {
    console.log("None");
}




console.log("Name?")                //Modify the question

if(apple.hasOwnProperty("name")){
    console.log(apple.name);
} else {
    console.log("Not exist");
}
