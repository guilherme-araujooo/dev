//váriaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let xDiametro = 22;
let raio = xDiametro /2;

// velocidade Bolinha
let xVelocidade = 8;     
let yVelocidade = 8;

// variaveis da raquete
let xRect = 5;
let yRect = 150;
let wRect = 10;
let hRect = 90;

// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let colidiu = false;

//Placar do jogo
let meusPontos = 0 ;
let pontoOponente =0 ;

// som do jogo
let raquetada ;
let ponto;
let trilha;

function preload(){
  raquetada = loadSound ("raquetada.mp3");
  ponto = loadSound ("ponto.mp3");
  trilha = loadSound("trilha.mp3");
  
  
}
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  colisaoBolinha();
  mostraRaquete(xRect,yRect);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
    movimentoRaquete();
 //   verificaColisaoRaquete();
  colisãoRaqueteBiblioteca(xRect,yRect);
  colisãoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
 movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  
}
function mostraBolinha ()
{ 
   circle(xBolinha,yBolinha,xDiametro);  
}

function  movimentoBolinha() 
{
     xBolinha += xVelocidade;
    yBolinha +=yVelocidade ;
}

function colisaoBolinha()
{
    
if (xBolinha + raio > width || xBolinha - raio <0 ){
    xVelocidade *= -1;
     }
  
if (yBolinha + raio > height || yBolinha - raio <0 ){
     
     yVelocidade *= -1;
     }
}


  
  function mostraRaquete(x,y)
{
  rect(x, y, wRect, hRect);
}
  


function movimentoRaquete(){
  if   (keyIsDown(UP_ARROW)){
    yRect -=10 ;
     }
  if (keyIsDown(DOWN_ARROW)){
  yRect +=10 ;
  }
}
 

 

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRect + wRect  && yBolinha - raio < yRect + hRect && yBolinha + raio > yRect  ) {
        xVelocidade *= -1;
    }
}
function movimentaRaqueteOponente(){
  if   (keyIsDown(87)){
    yRaqueteOponente -=10 ;
     }
  if (keyIsDown(83)){
  yRaqueteOponente +=10 ;
  }
}



 function  colisãoRaqueteBiblioteca (x,y) {
   colidiu=
   collideRectCircle(x, y, wRect,hRect, xBolinha, yBolinha, raio);
   
 if (colidiu) {
   
   raquetada.play();
   xVelocidade *= -1;
  // background("red" );
 }  
   
}
    function incluiPlacar(){
      //contorno
      stroke(255);
      // tamanho texto
      textSize(16) ;
    //Alinhamente texto
      textAlign(CENTER);     
    
      fill("orange");
      rect(  150,10,40,20);
      fill("white");
      text(meusPontos, 170,26 );
      fill("orange" );
      rect(450,10,40,20);
      fill("white");
      text(pontoOponente, 470 ,26 ) ;
    }
  function marcaPonto(){
    if (xBolinha > 590){
      meusPontos += 1 ;
      ponto.play();
    }
    if (xBolinha <10) {
      pontoOponente +=1;
       ponto.play();
    }
    
   }

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
