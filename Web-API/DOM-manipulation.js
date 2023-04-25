const newSection = document.createElement('section');
const newDiv = document.createElement('div');

document.body.appendChild(newSection); //=> <section> </section>
let staticSection = document.querySelector("section"); 

staticSection.appendChild(newDiv); //=> <div> </div>
let staticDiv = document.querySelector("div");
  
staticSection.className = "static";
staticDiv.className = "hacked";





