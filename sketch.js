//variaveis da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexbolinha = 5;
let velocidadeybolinha = 5;

//variaveis raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

//variaveis raquete oponente
xRaqueteOponente = 585;
yRaqueteOponente = 150;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha ();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaBolinha ();
  verificaColisaoBorda ();
  verificaColisaoRaquete ();
  mostraRaqueteOponente ();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
}
    
function mostraBolinha () {
  circle (xbolinha, ybolinha, diametro);
  
}

function movimentaBolinha(){
   xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}

function verificaColisaoBorda () {//Cria a Tela de Desenho
  
  if (xbolinha + raio > width || xbolinha  - raio < 0 ) {
    velocidadexbolinha *= -1;
  }
    if (ybolinha + raio > height|| ybolinha - raio < 0 ) {
    velocidadeybolinha *= -1;

    }
}

function mostraRaquete (){
  rect(xRaquete, yRaquete, raqueteLargura, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete () {
  if (xbolinha - raio < xRaquete + raqueteLargura && ybolinha - raio < yRaquete + raqueteAltura && ybolinha +raio > yRaquete)
  {
    velocidadexbolinha *= -1;
  }
}

function mostraRaqueteOponente () {
  rect (xRaqueteOponente, yRaqueteOponente, raqueteLargura, raqueteAltura);
}

function movimentaRaqueteOponente (){
   if (keyIsPressed && key == 'w') {
            yRaqueteOponente -= 10;
  }
   if (keyIsPressed && key == 's') {
            yRaqueteOponente += 10;
        }
}

function verificaColisaoRaqueteOponente() {
  if (xbolinha + raio > xRaqueteOponente && ybolinha - raio < yRaqueteOponente + raqueteAltura && ybolinha + raio > yRaqueteOponente) {
    velocidadexbolinha *= -1;
  }
}




