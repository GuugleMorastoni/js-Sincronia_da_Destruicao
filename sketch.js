textAlign(CENTER);
textSize(20);
fill(color(139, 0, 0))
rect(130, 7, 40, 25)
fill(255);
text(pontosLDDS, 150, 26);
fill(color(139, 0, 0))
rect(430, 7, 40, 25)
fill(255)
text(pontosLDDM, 450, 26);
}

function markPlacar(){
if (xDestruição > 590){
  pontosLDDS += 1;
  ponto.play();
}
if (xDestruição < 10){
  pontosLDDM += 1
  ponto.play();
}
}
function preload(){
soundtrack = loadSound("Soundtrack.mp3");
ponto = loadSound("Ponto.mp3");
sincronizada = loadSound("Sincronizada.mp3");
}