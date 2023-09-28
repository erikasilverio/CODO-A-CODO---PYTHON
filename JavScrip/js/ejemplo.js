// var nombre = "Erika"
// var edad = 36 

// console.log("Nombre: ", nombre,"Edad:", edad)


/*
var numPar = 2
numPar = numPar +  10
console.log(numPar)


otro:

var numPar = 2
numPar +=  10
console.log(numPar)

otro:

var numPar = 2
numPar --
console.log(numPar)

var color = ["rojo", "azul", "blanco"]
console.log(color[1])

var cosas = ["rojo", 10 , "@", false, "Testando Algo em JS"]
console.log(cosas[1])

var miArray = [32,64,128]
miArray[1] += 36 //100
console.log(miArray[1])

var miArray = [[32,64,128], [10,20,30], [[2,3,5,7,11,13], [2,4,6,8]]] // comeca com 0
console.log(miArray[2][0][5])



let num1, num2, suma
num1 = parseInt(prompt("Ingrese un numero"))
num2 = parseInt(prompt("Ingrese otro numero"))

suma = num1 + num2
console.log('la suma es' , suma)
*/




}

/*hacer um dicionario de 10 palabras
gato - cat
casa - house
caballo - hourse


let valor = parseInt(prompt("Ingrese en numero: \n"))
switch (valor) {
    case 1: document.write('One')
        
    break;
    case 2: document.write('Two')
    
    break;
    case 3: document.write('Tree')
    
    break;
    case 4: document.write('Four')
    
    break;
    case 5: document.write('Five')
        
       


    default:document.write('No es un valor')
        break;
 */



        //WHILE (BUCLE, GRANDE QUANTIDADE DE VEZES QUE SE EXECUTA AS INSTRUCOES)

       // let x = 1
       // while(x <= 100){
       //     document.write(x)
       //     document.write('<br>')
       //     x++
       //     
       // }

       // 11 - 22 - 23 - 44 <<10 veces >>

       let serie = 11
       let i = 1
       while ( i <= 10 ) {

        document.write(serie)
        document.write('<br>')
        i++
        serie += 11
        
       }
