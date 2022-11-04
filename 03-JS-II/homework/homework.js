// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  	var mayor;
  	if (x<y){
  		mayor=y;
  	}	
  	else{
  		mayor=x;
  	}
  	return mayor;	
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  	var adult;
  	if (edad>=18){
  		adult="Allowed";
  	}
  	else{
  		adult="Not allowed";
  	}	
  	return adult;	
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  	var stat;
  	if (status===1){
  		stat="Online";
  	}else if (status===2){
  			stat="Away";
  		}else{
  			stat="Offline";
  		}
  	return stat;				
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  	var greeting;
  	if (idioma==="aleman"){
  		greeting="Guten Tag!";
  	}else{
  		if(idioma==="mandarin"){
  			greeting="Ni Hao!";
  		}else if (idioma==="ingles"){
  				greeting="Hello!";
  			}else{
  				greeting="Hola!";
  			}		
  			
  	}
  	return greeting;						
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  	var res;
  	switch (color){
  		case "blue":
  			res="This is blue";
  			break;
  		case "red":
  			res="This is red";
  			break;
  		case "green":
  			res="This is green";
  			break;
  		case "orange":
  			res="This is orange";
  			break;
  		default:
  			res="Color not found";
  			break;
  	}
  	return res;						
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  	var bool=false;
  	if (numero===10 || numero===5){
  		bool=true;
  	}
  	return bool;	
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  	var bool=false;
  	if (numero<50 && numero>20){
  		bool=true;
  	}	
  	return bool;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  	var bool=false;
  	if ((Math.floor(numero))===numero){
  		bool=true;
  	}
  	return bool;	
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  	var fibu;
  	if (numero%3===0){
  		if(numero%5===0){
  			fibu="fizzbuzz";
  		}else{
  			fibu="fizz";
  		}
  	}else if(numero%5===0){
  			fibu="buzz";
  		}else{
  			fibu=numero;
  		}	
  	return	fibu;				
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  	var res=false;
  	if ((num1===0)||(num2===0)||(num3===0)){
  		res="Error";
  	}else if ((num1<0)||(num2<0)||(num3<0)){
  			res="Hay negativos";
  			}else if((num1>num2) && (num1>num3) && (num1>0)){
  				res="Número 1 es mayor y positivo";
  				}else if((num3>num1) && (num3>num2)){
  					res=num3+1;
  				}
  	return res;					
  				
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  	var primo=true;
  	if ((numero===0)||(numero===1)){
  		primo=false;
  	}else{	
  		for (let i=2;i<numero;i++){	
  			if ((numero%i)===0){
  				primo=false;
  			}
  		}
  	}	
  	return primo;		
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  	var res;
  	if (valor===true){
  		res="Soy verdadero";
  	}else {
  		res="Soy falso";
  	}		
	return res;
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  	var tabla=new Array();
  	for (let i=0;i<=10;i++){
  		tabla.push(i*6);
  	}
  	return tabla;	
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  	var res=false;
  	if ((numero>99)&&(numero<1000)){
  		res=true;
  	}
  	return res;	
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  	var num;
  	var count=0;
  	num=numero;
  	do {
  		num=num+5;
  		count=count+1;
  	}while(count<8);
  	return num;	
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
