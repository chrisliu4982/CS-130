/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexiaMode = () => {
  document.querySelector('h1').className = 'dyslexia-mode'
  document.querySelector('h2').className = 'dyslexia-mode'
  document.querySelector('p').className = 'dyslexia-mode'
}

document.getElementById('dyslexia-toggle').addEventListener('click', dyslexiaMode)