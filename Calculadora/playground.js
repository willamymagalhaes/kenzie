console.log("hello world from my playground file");


let botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC(){
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value/100;
  let resultado = document.getElementById("resultado");
  
  let imc = (peso / (altura*altura)).toFixed(2);
  
  resultado.textContent = 'Seu IMC é $ { imc }';

}

botaoCalcular.addEventListener('click', calculandoIMC);