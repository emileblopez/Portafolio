let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color:#8e44ad;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#8e44ad;">Desarrollo web Front-end junior y aprendo sobre ciencia.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
