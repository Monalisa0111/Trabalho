
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  //validar entrada
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Verificar se esta entrada está vazia ou é menor ou igual a 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calcular dica:
  var total = (billAmt * serviceQual) / numOfPeople;
  //arredondar para duas casas decimais
  total = Math.round(total * 100) / 100;
  //O resultado tem sempre dois dígitos após o ponto decimal
  total = total.toFixed(2);
  //Exibir a dica:
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Ocultar o valor da ponta na carga
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//função clique para chamar
document.getElementById("calculate").onclick = function() {
  calculateTip();

};