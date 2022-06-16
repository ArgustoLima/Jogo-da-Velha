let vez = 1;
let vencedor = "";

/* Inicializa as funções */
$(document).ready(function() {


  /* Função para coletar os dados dos espaços*/
  function JdvEspacos(a, b, c) {
    let spaceA = $("#espaço" + a).text();
    let spaceB = $("#espaço" + b).text();
    let spaceC = $("#espaço" + c).text();

    if ((spaceA == spaceB) && (spaceB == spaceC) && (spaceA != "none" && spaceA != "")) {
      if (spaceA.indexOf("X") >= 0)
        vencedor = "1";
      else
        vencedor = "2";
      return true;
    } else { 
      return false;
    } 
  }


  /* Função para verificar as sequências dos espaços */
  function Verificar() {
    if (JdvEspacos(1, 2, 3) || JdvEspacos(4, 5, 6) || JdvEspacos(7, 8, 9) ||
      JdvEspacos(1, 4, 7) || JdvEspacos(2, 5, 8) || JdvEspacos(3, 6, 9) ||
      JdvEspacos(1, 5, 9) || JdvEspacos(3, 5, 7)
    ) {
      /* Printa o vencedor */
      if (vencedor == 1) {
        $("#JDV-jogador-resultado").prepend("<h1>X ganhou!</h1>");
      } else {
        $("#JDV-jogador-resultado").prepend("<h1>O ganhou!</h1>");
      }
      
      /* Impede de clicar nos espaços quando acabar o jogo */
      $(".espaço").off("click");
    }
  }

  $("#JDV-jogador").text("Vez do jogador X");

  contadorVez = 1
   /* Função para dizer a vez do Jogador */
   $(".espaço").click(function() {
    let bg = $(this).text();

    if (bg == "none" || bg == "") {
      if (vez == 1) {
        $(this).text("X");
        jogador = 2;
      } else {
        $(this).text("O");
        jogador = 1;
      }

      vez = (vez == 1 ? 2 : 1);
      Verificar();
      contadorVez += 1;
    }
    

    /* Serve para printar quando der Velha! */
    if (contadorVez >= 10 && ! vencedor) {
      $("#JDV-jogador-resultado").prepend("<h1>Velha!</h1>");

      $(".espaço").off("click");
    }


    /* Serve para printar a vez do jogador + quando o jogo acabar*/
    if (contadorVez <= 9 && ! vencedor ) {
      if (jogador == 1) {
        $("#JDV-jogador").text("Vez do jogador X");
      } else {
        $("#JDV-jogador").text("Vez do jogador O");
      }
      
    } else {
      $("#JDV-jogador").text("Jogo acabou!");
    }

  });
  
  /* Serve para reiniciar o GAME*/
  $(document).on('click', '#JDV-reiniciar', function(){
    window.location.reload();
    history.go(0);
  })

});