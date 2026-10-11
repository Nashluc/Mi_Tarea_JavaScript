// ==========================================
// PRÁCTICA DE JAVASCRIPT
// ==========================================


// ==========================================
// 1. VARIABLES Y TIPOS DE DATOS
// ==========================================

// Variable de tipo string
let nombre = "Nashlee";

// Variable de tipo number
let edad = 26;

// Variable de tipo boolean
let estudiante = true;

// Variable constante
const curso = "JavaScript";

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?:", estudiante);
console.log("Curso:", curso);


// ==========================================
// 2. ARREGLOS
// ==========================================

// Creación de un arreglo
let tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap"
];

console.log("Tecnologías:", tecnologias);


// ==========================================
// 3. OBJETOS
// ==========================================

// Creación de un objeto
let estudianteInfo = {
    nombre: "Nashlee",
    edad: 26,
    programa: "Software Developer"
};

console.log("Información del estudiante:", estudianteInfo);


// ==========================================
// 4. ESTRUCTURA IF / ELSE IF / ELSE
// ==========================================

let nota = 85;

if (nota >= 90) {

    console.log("Excelente trabajo.");

} else if (nota >= 70) {

    console.log("Buen trabajo. Has aprobado.");

} else {

    console.log("Debes continuar practicando.");

}


// ==========================================
// 5. BUCLE FOR
// ==========================================

console.log("Bucle FOR:");

for (let i = 0; i < tecnologias.length; i++) {

    console.log(tecnologias[i]);

}


// ==========================================
// 6. BUCLE WHILE
// ==========================================

console.log("Bucle WHILE:");

let contador = 1;

while (contador <= 3) {

    console.log("Número:", contador);

    contador++;

}


// ==========================================
// 7. BUCLE DO...WHILE
// ==========================================

console.log("Bucle DO...WHILE:");

let numero = 1;

do {

    console.log("Valor:", numero);

    numero++;

} while (numero <= 3);


// ==========================================
// 8. FUNCIÓN
// ==========================================

// Función para calcular el área de un rectángulo
function calcularArea(base, altura) {

    let area = base * altura;

    return area;
}

let resultadoArea = calcularArea(10, 5);

console.log("Área del rectángulo:", resultadoArea);


// ==========================================
// 9. ALCANCE DE VARIABLES - SCOPE
// ==========================================

let variableGlobal = "Esta variable tiene alcance global";

function demostrarScope() {

    let variableLocal = "Esta variable tiene alcance local";

    console.log(variableGlobal);
    console.log(variableLocal);
}

demostrarScope();


// ==========================================
// 10. CLAUSURA - CLOSURE
// ==========================================

function crearContador() {

    let contador = 0;

    return function () {

        contador++;

        return contador;
    };
}

let contadorClosure = crearContador();

console.log("Closure:", contadorClosure());
console.log("Closure:", contadorClosure());
console.log("Closure:", contadorClosure());


// ==========================================
// 11. FUNCIÓN PARA MOSTRAR INFORMACIÓN
// ==========================================

function mostrarMensaje() {

    let mensaje =
        "JavaScript está funcionando correctamente.";

    document.getElementById("resultado").textContent = mensaje;

    console.log(mensaje);
}


// ==========================================
// 12. RECORRER UN ARREGLO
// ==========================================

tecnologias.forEach(function (tecnologia) {

    console.log("Tecnología:", tecnologia);

});


// ==========================================
// 13. MANIPULACIÓN DE OBJETOS
// ==========================================

console.log("Nombre del estudiante:", estudianteInfo.nombre);
console.log("Programa:", estudianteInfo.programa);


// ==========================================
// 14. OPERACIONES CON DATOS
// ==========================================

let numero1 = 20;
let numero2 = 10;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);