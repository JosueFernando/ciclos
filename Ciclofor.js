
function numfor(){


    
for ( let numero = 0; numero  < 10; numero++){



console.log(`El numero del ciclo for es : ${numero}`);

}

};

function contwhile(){

	let contador = 0;

while (contador <= 10) {

	console.log(`La variable contador es igual a: ${contador}`);

	contador++;

}

};

function dowhile(){

	let numero  = 0;

do {
   numero += 1;
   console.log(`El numero del ciclo dowhile es:  ${numero}`);
} while (numero < 5);

}



numfor();
contwhile();
dowhile();