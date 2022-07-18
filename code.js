// This function is provided to shake an image.  Use it every time the user clicks on a pokemon.
// Feel free to delete this function and include it as a method within your classes...
const toggleShake = function (element) {
  // Animations only occur when a new class is added to the element.
  // Since we want this to happen every time, we can switch between two different animations
  if (element.classList.contains("shake1")) {
    element.classList.remove("shake1");
    element.classList.add("shake2");
  } else {
    element.classList.remove("shake2");
    element.classList.add("shake1");
  }
};

const main = document.querySelector("main");

class Flower {
  constructor() {
    this.flowerArray = [
      "images/flower/flower0.png",
      "images/flower/flower1.png",
      "images/flower/flower2.png",
    ];
  }

  clickImages = function () {
    let counter = 1;
    let img = document.createElement("img");
    main.append(img);
    img.src = this.flowerArray[0];
    img.addEventListener(
      "click",
      function () {
        if (counter < this.flowerArray.length) {
          img.setAttribute("src", `${this.flowerArray[counter]}`);
          counter++;
        }
      }.bind(this)
    );
  }.bind(this);
}

let flower = new Flower();
let flower2 = new Flower();
let flower3 = new Flower();

flower.clickImages();
flower2.clickImages();
flower3.clickImages();
