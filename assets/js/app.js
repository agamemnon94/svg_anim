window.addEventListener('load', () => {
  document.body.classList.remove("clean__transition");

  const homeText = document.querySelectorAll('#home_text path')

  for (let i = 0; i < homeText.length; i++) {
    console.log(`letter ${i} is ${homeText[i].getTotalLength()}`);
  }

})