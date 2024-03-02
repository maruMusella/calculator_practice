//EJERCICIO 1: CALCULADORA

//Acá guardo mis variables por id del html (el operador 1, el 2 y si es una + - * / ), también el botón de calcular y el resultado
const txtOperator1 = document.getElementById("operator1")
const txtOperation = document.getElementById("operation")
const txtOperator2 = document.getElementById("operator2")
const btnCalculate = document.getElementById("calculate")
const pResult = document.getElementById("result")

//acá hago que al apretar el boton de calculate se active la función de abajo
btnCalculate.addEventListener('click', calculate)

//FUNCION:
function calculate(){
    //Guardo una variable para el texto que aparece abajo del btn calculate con algún mensaje de exito o error
    const operation = txtOperation.value

    //Guardo las variables de los operators:
    const operator1 = parseFloat(txtOperator1.value)
    const operator2 = parseFloat(txtOperator2.value)


//Acá la función para que al apretar el btn aparezca mensaje de exito o error
    if((operation == "+" || operation == "-" || operation == "*" || operation == "/") && !isNaN(operator1) && !isNaN(operator2) ){
        
        let result;

        switch (operation){
            case "+":
                result = operator1 + operator2
                break;
            case "-" : 
                result = operator1 - operator2
                break;
            case "*" : 
                result = operator1*operator2  
                break;
            case  "/" : 
                result = operator1/operator2  
        }
        pResult.style = "color:black"
        pResult.innerText = "= " + result
    }else{
        pResult.style = "color:red"
        pResult.innerText = "Error"
    }

}