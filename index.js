let randomNumber1 = Math.floor(Math.random () * 6 +1 );  // 1-6
let picName1 = "dice" + randomNumber1 + ".png"; // dice1.png
let picResource1 = "images/" + picName1;  // imges/dice1.png
let img1 = document.querySelectorAll("img")[0].setAttribute("src", picResource1);

let randomNumber2 = Math.floor(Math.random() * 6 +1 );
let picName2 = "dice" + randomNumber2 + ".png";
let picResource2 = "images/" + picName2;
let img2 = document.querySelectorAll("img")[1].setAttribute("src", picResource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "🤝 Draw!";
}
