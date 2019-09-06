/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel() {
  const div = document.createElement('div');
  div.setAttribute('class','carousel');

  const div1 = document.createElement('div');
  div1.setAttribute('class','left-button');
  div1.textContent = "<";

  const img1 = document.createElement('img');
  img1.src = "./assets/carousel/mountains.jpeg";

  const img2 = document.createElement('img');
  img2.src = "./assets/carousel/computer.jpeg";

  const img3 = document.createElement("img");
  img3.src = "./assets/carousel/trees.jpeg";

  const img4 = document.createElement("img");
  img4.src = "./assets/carousel/turntable.jpeg";

  const div2 = document.createElement("div");
  div2.setAttribute('class','right-button');
  div2.textContent = ">";

  div.appendChild(div1, img1, img2, img3, img4, div2);
  console.log(div)
  return div;
}

const Carousel = carousel();
const carouselParent =  document.querySelector('.carousel-container');
carouselParent.appendChild(Carousel)
