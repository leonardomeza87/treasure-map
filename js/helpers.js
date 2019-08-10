let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
};

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;

    return Math.sqrt(diffX * diffX + diffY * diffY);
};

let getDistanceHint = distance => {
    if (distance < 20) return "ON FIRE";
    else if (distance < 30) return "REALLY Hot";
    else if (distance < 40) return "Very Hot";
    else if (distance < 60) return "Hot";
    else if (distance < 80) return "Warm";
    else if (distance < 100) return "Some Cold";
    else if (distance < 120) return "Cold";
    else if (distance < 160) return "Quite Cold";
    else if (distance < 200) return "You Freeze";
    else if (distance < 260) return "Extreme Cold";
    else return "You are a block of ice!";
};
