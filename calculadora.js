function calculadora() {
  const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/) \n 5 - Divisão inteira (%)\n 6 - Potenciação (**)"));

  if (!operacao || operacao >=7) {
    alert("Erro: operaçõa inválida");
    calculadora();
  } else {
    
    let n1 = Number(prompt("insira o primeiro valor"));
    let n2 = Number(prompt("ïnsira o segundo valor"));
    let resultado;

    if (!n1 || !n2) {
        alert ("Parâmetros errados");
     
    } else {  
      
      function soma() {
      resultado = n1 + n2;
      alert(`${n1} + ${n2} = ${resultado}`);
      novaOperacao()
    }
    
    function subtracao() {
      resultado = n1 - n2;
      alert(`${n1} + ${n2} = ${resultado}`);
     novaOperacao()
    }
    
    function multiplicacao() {
      resultado = n1 * n2;
      alert(`${n1} + ${n2} = ${resultado}`);
    novaOperacao()
    }
    
    function divisaoReal() {
      resultado = n1 / n2;
      alert(`${n1} + ${n2} = ${resultado}`);
    novaOperacao()
    }
    
    function divisaoInteira() {
      resultado = n1 % n2;
      alert(`Resto da divisão dr ${n1} e ${n2} é ${resultado}`);
    novaOperacao()
    }
    
    function potenciacao() {
      resultado = n1 ** n2;
      alert(`${n1} elevado a ${n2} é ${resultado}`);
    novaOperacao()
    }
  }
    
    function novaOperacao () {
      let opcao = prompt("deseja fazer outra operação \n 1 - Sim \n 2 - Não");
      if (opcao == 1) {
        calculadora();
      } else if (opcao == 2) {
        alert("Até mais")
      } else {
        alert("Digite uma opção")
        novaOperacao();
      }
    }
  
    
   
    if (operacao ==1) {
      soma();
    } else if (operacao == 2) {
      subtracao();
    } else if (operacao == 3) {
      multiplicacao();
    } else if (operacao == 4) {
      divisaoReal();
    } else if (operacao == 5){
      divisaoInteira();
    } else if (operacao == 6) {
      potenciacao();
    } 
    
  }
  


}
calculadora();