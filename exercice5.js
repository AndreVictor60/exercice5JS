function resultat(){
  // Déclarer les variables & récuperer les deux nombres saisie par utilisateur
  var number1 = document.getElementById('premier_nombre').value;
  var number2 = document.getElementById('deuxieme_nombre').value;
  // Vérification
   if(isNaN(number1) == true || isNaN(number2) == true){
      alert('Ceci n\est pas un chiffre');
   }
   else {
  //  renvoie un entier a partir d'une chaîne de caractères
  number1 = parseInt(number1);
  // transformer une chaîne de caractères en un nombre flottant
  number2 = parseFloat(number2);
  // Multiplication des nombres
  alert('Le résultat est '+ number1 * number2);
  }
}
