
  let btn = document.querySelector(".arrow");
  let page = document.querySelector("#div-2");
  const scroll = document.querySelector(".scroll-bar")
  const thumb = document.querySelector(".dragger");
  btn.addEventListener('click', myFunction);

  function myFunction(){
    window.scrollBy(2000,0);
    scroll.scrollBy(500,0);
  }
  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollX;
    let uSV = scroll/140;
    let sX;
    // console.log(uSV)
    thumb.style.marginLeft = uSV + "%";
});

  // =========================================================================  
  const navBtn = document.querySelector(".resBar");
  const navCutBtn = document.querySelector(".navCut");
  const navBar = document.querySelector(".nav-bar");

  navBtn.addEventListener("click", navFunction);
  navCutBtn.addEventListener("click", navCFunction);

  function navFunction(){
        navBar.style.left = "0%";
  }
  function navCFunction(){
        navBar.style.left = "-100%";
  }

  // const source = document.getElementById("draggable");
thumb.addEventListener("drag", (event) => {
    let scroll = this.scrollX;
    let uSV = scroll/140;
      window.scrollBy(500,0);
});
  // =========================================================================  