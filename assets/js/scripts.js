function myFunction()
{
    alert("Kan sudah bilang jangan di klik!");
}
function myfunction()
{
    alert("Ya emang bole tpi gada efek sama aja hehe..")
}

const bgMusic = document.getElementById('bgMusic');

document.addEventListener('click', () => {
  bgMusic.play().catch(e => {
    console.log('Autoplay blocked until user interaction', e);
  });
});
