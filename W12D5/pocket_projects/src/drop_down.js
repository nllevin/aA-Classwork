
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = function() {
  const dogLinks = [];
  Object.entries(dogs).forEach( ([breed, link]) => {
    const a = document.createElement("a");
    a.innerHTML = breed;
    a.href = link;

    const li = document.createElement("li");
    li.className = "dog-link";
    li.appendChild(a);

    dogLinks.push(li);
  });
  return dogLinks;
};

const attachDogLinks = function() {
  const dogLinks = dogLinkCreator();
  const dogsUl = document.getElementsByClassName("drop-down-dog-list")[0];
  dogLinks.forEach(dogLink => {
    dogsUl.appendChild(dogLink);
  });
};

const handleEnter = function(event) {
  Array.from(document.getElementsByClassName("dog-link")).forEach( link => {
    link.className = "dog-link open";
  });
};

const handleLeave = function(event) {
  Array.from(document.getElementsByClassName("dog-link")).forEach( link => {
    link.className = "dog-link";
  });
};

const dogsNav = document.getElementsByClassName("drop-down-dog-nav")[0];
dogsNav.addEventListener("mouseenter", e => handleEnter(e));
dogsNav.addEventListener("mouseleave", e => handleLeave(e));
attachDogLinks();
