// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  	var fst;
  	fst=array.shift();
  	return fst;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  	var lst;
  	lst=array.pop();
  	return lst;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  	var length;
  	length=array.length;
  	return length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  	for (var i=0;i<array.length;i++){
  		array[i]=array[i]+1;
  	}
  	return array;	
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  	array.push(elemento);
  	return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  	array.unshift(elemento);
  	return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  	var phrase="";
  	for (let i=0;i<palabras.length;i++){
  		phrase=phrase+palabras[i];
  		if(i!==(palabras.length-1)){
  			phrase=phrase+" ";
  		}
  	}
  	return phrase;	
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  	var isIn=false;
  	for (let i=0;i<array.length;i++){
  		if (elemento===array[i]){
  			isIn=true;
  		}
  	}		
  	return isIn;	
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  	var sum=0;
  	for (let i=0;i<numeros.length;i++){
  		sum=sum+numeros[i];
  	}
  	return sum;	
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  	var prom=0;
  	for(let i=0;i<resultadosTest.length;i++){
  		prom=prom+resultadosTest[i];
  	}
  	prom=prom/resultadosTest.length;
  	return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  	var mayor=numeros[0];
  	for (let i=1;i<numeros.length;i++){
  		if (numeros[i]>mayor){
  			mayor=numeros[i];
  		}
  	}
  	return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  	var product;
  	if (arguments.length===1){
  		product=arguments[0];
  	}else if (arguments.length===0){
  			product=0;
  		}else{
  			product=1;
  			for(let i=0;i<arguments.length;i++){
  				product=product*arguments[i];
  			}	
  			
  		}	
  	return product;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  	var count=0;
  	for (let i=0;i<arreglo.length;i++){
  		if(arreglo[i]>18){
  			count=count+1;	
  		}
  	}
  	return count;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  	var week="";   
  	if ((numeroDeDia===1)||(numeroDeDia===7)){
  		week="Es fin de semana";
  	}else{
  		week="Es dia Laboral";
  	}
  	return week;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  	var nine=false;
  	var fst=n;
  	if (fst>=10){
  		do {
  			fst=fst/10;
  		}while (fst>=10);
  	
  		if ((fst<10)&&(fst>=9)){
  			nine=true;
  		}
  	}else if (fst===9){
			nine=true;  		
  		}		
  	
  	return nine;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  	var equals=true;
  	for(let i=0;i<arreglo.length-1;i++){
  		if (arreglo[i]!==arreglo[i+1]){
  			equals=false;
  		}
  	}
  	return equals;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  	const months=[];
  	var fail="No se encontraron los meses pedidos";
  	for (let i=0;i<array.length;i++){
  		if (array[i]==="Enero"||array[i]==="Noviembre"||array[i]==="Marzo"){
  			months.push(array[i]);
  		}
  	}
  	if (months.length<3){
  		return fail;
  	}else{
  	
  		return months;
  	}	
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  	const greater=[];
  	for (let i=0;i<array.length;i++){
  		if (array[i]>100){
  			greater.push(array[i]);
  		}
  	}
  	return greater;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  	const iterations=[];
  	var fail="Se interrumpió la ejecución";
  	var count=numero;
  	for (let i=0;i<10;i++){
  		if (i===count){
  			break;
  		}
  		count=count+2;
  		iterations[i]=count;
  	}
  	if(iterations.length<10){
  		return fail;
  	}else{
  	
  		return	iterations;
  	}	
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  	const iterations=[];
  	var count=numero;
  	var index=0;
  	for (let i=0;i<10;i++){
  		if(i===5){
  			continue;
  		}
  		
  		count=count+2;
  		iterations[index]=count;
  		index++;
  	}
  	return iterations;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
