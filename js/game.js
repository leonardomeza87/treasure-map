const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $map = document.getElementById("map");
let $hint = document.getElementById("hint");
var clicks = 0;
var end = false;

$map.addEventListener("click", function(e) {
    if (!end) {
        clicks++;
        let distance = getDistance(e, target);
        let distanceHint = getDistanceHint(distance);
        $hint.innerHTML = distanceHint;

        if (distance < 10 && !end) {
            end = true;
            /*alert(
            "Has encontrado el tesoro en " +
                clicks +
                " clicks, ahora el tesoro cambiara de posición"
                );*/
            image();
            var audio = document.getElementById("audio");

            audio.play();
            $hint.innerHTML =
                "Has encontrado el tesoro en " +
                clicks +
                " clicks ... el juego se reiniciará...";
            setTimeout(function() {
                location.reload();
            }, 2800);
            clicks = 0;
        } else {
            console.log("Aquí no esta.");
        }
    }
});

var image = function() {
    var x = document.createElement("img");
    x.src = "./img/treasure_chest.png";
    x.width = "300";
    x.height = "300";
    x.alt = "Treasure Chest";
    document.getElementById("woo").appendChild(x);
    console.log("AHHHHHH!!!!");
};
