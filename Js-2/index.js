(() => {
  var GlobalKeyWordInput = '';
  const appendImageElem = (keyword, index) => {
    const imgElem = document.createElement("img");
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector(".gallery");
    galleryElem.appendChild(imgElem);

  };


  const removePhoto = () => {
    const galleryElem = document.querySelector('.gallery')
    galleryElem.innerHTML = '';
  }

  const searchPhoto = (event) => {
    const keyword = event.target.value;
    GlobalKeyWordInput = keyword
    if (event.key === 'Enter' && keyword) {
      removePhoto();
      for (let i = 1; i <= 9; i++) {
        appendImageElem(keyword, i);
      }
    }
  }

  function random(min,max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}





  const onclick = (event) => {

    const inputElem = document.querySelector("input");
    GlobalKeyWordInput = inputElem.value ;

    const imgElem = document.createElement("img");
    imgElem.src = `https://source.unsplash.com/400x225/?${GlobalKeyWordInput}&sig=${random(0,1000)}`;

    const galleryElem = document.querySelector(".gallery");
    
    galleryElem.innerHTML = '';
    galleryElem.appendChild(imgElem)

  }



  function run() {

    const btnElem = document.querySelector("input");
    btnElem.addEventListener('keydown', searchPhoto);

    const buttoncl = document.querySelector('button');
    buttoncl.addEventListener('click', onclick);
  
  }

  run();
})();