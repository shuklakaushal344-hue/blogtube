function goPage(element, page){
  // add animation
  element.classList.add("click-animate");

  // thoda delay so animation dikhe
  setTimeout(function(){
    window.location.href = page;
  }, 200);
}
