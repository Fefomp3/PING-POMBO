//sons do jogo
let ponto;
let musica;
let raquetada;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//origembolinha
let xBolinha = 300;
let yBolinha = 200;

//medidabolinha
let diametro = 27;
let raio = diametro /2;

//velocidadebolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//origemraquete
let xRaquete = 5;
let yRaquete = 150;

//origemraqueteoponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeOponenteY;
let chanceDeErrar = 0;

//medidaraquete
let raqueteComprimento = 15;
let raqueteAltura = 90;

let colidiu = false;

  function setup() {
    createCanvas(600, 400);
    musica.loop()
  }

  function draw() {
      background(12, 50, 30);
      mostraBolinha();
      movimentaBolinha();
      //movimentaOponente()
      movimentaRaqueteOponenteMultiplayer()
      verificaColisaoBorda();
      mostraRaquete(xRaquete, yRaquete);
      mostraRaquete(xRaqueteOponente, yRaqueteOponente);
      movimentoMinhaRaquete();
      //verificaColisaoRaquete()
      colisaoRaquetes(xRaquete, yRaquete)
      colisaoRaquetes(xRaqueteOponente, yRaqueteOponente)
      bolinhaNaoFicaPresa()
    limitaraquete()
      
      Placar()
      marcaPonto()
  }

    function mostraRaquete(x,y) {
      fill(150, 250, 200)
      rect(x, y, raqueteComprimento, raqueteAltura);
    }

    function mostraBolinha() {
        fill(150, 250, 200)
      circle(xBolinha, yBolinha, diametro)
      
    }

    function movimentaBolinha() {
        xBolinha += velocidadeXBolinha;
        yBolinha += velocidadeYBolinha;
    }

    function verificaColisaoBorda() {
        if (xBolinha + raio > width || xBolinha - raio < 0) {
          velocidadeXBolinha *= -1;
          
      }
        if (yBolinha + raio > height || yBolinha - raio < 0) {
          velocidadeYBolinha *= -1;
      }
    }
    function marcaPonto() {
        if (xBolinha > 585) {
        meusPontos += 1;
          ponto.play()
        }
        if (xBolinha < 20) {
        pontosDoOponente += 1;
          ponto.play()
        }
    }
    function movimentoMinhaRaquete(){
      
      if(keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
        if (yRaquete >= 380){
          yRaquete = yRaquete - 10
        }
      }
      
      if(keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
      }
      }
      function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
      }

      function movimentaOponente() {
        velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 + 5;
        yRaqueteOponente += velocidadeYOponente + chanceDeErrar
        calculaChanceDeErrar()
      }
      function colisaoRaquetes(x,y) {
          colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura,             xBolinha, yBolinha, raio);
          if(colidiu) {
            velocidadeXBolinha *= -1;
              raquetada.play();
          }
      }
      function Placar() {
        textAlign(CENTER);
        textSize(20);
        
        fill(0, 100, 70)
        stroke(0, 100, 70)
        rect(430, 6, 40, 30)
        rect(130, 6, 40, 30)
        
        fill(150, 250, 200);
        text(meusPontos, 150, 30);
        text(pontosDoOponente, 450, 30);
      }
    
    function movimentaRaqueteOponenteMultiplayer(){
        if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
  function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}

    function preload(){
      musica = loadSound("musica.mp3")
      raquetada = loadSound("raquetada.mp3")
      ponto = loadSound("ponto.mp3")
    }
        function limitaraquete(){
          if (yRaquete >= 400){
            yRaquete = yRaquete - 10
          }
          
        }


    
    
        
    
  
    
    