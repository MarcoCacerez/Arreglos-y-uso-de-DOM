/**
Marco Aldair de Jesus Caceres 18390579
 */
function triangulo(nivel) {
    //seleccionamos el div, que contendra la piramide
    let cont = document.getElementById("contenedor");
    //limpiamos la piramide contenida anteriormente
    cont.innerHTML = "";
    //creamos el array principal de la piramide o triangulo
    let piramide = []
    //ciclo for que nos permitira iterar hasta el nivel deseado
    for(let i = 0;i < nivel; i++){
        //en la posicion de la iteracion creamos un array
        piramide[i] = []
        //creamos un elemento p, que contendra toda la fila de valores
        let p = document.createElement('p');
        //la inicializamos vacia
        p.textContent = "";
        //segundo ciclo for que se encargara de recorrer las columnas, siempre y cuando
        //sea menor o igual que el numero de fila
        for(let j = 0;j <= i; j++){
            //con esto se pone 1 en los extremos
            if(j == 0 || j == i){
                piramide[i][j] = 1
            //en caso contrario se calcula el valor de la posicion
            //en este caso la posicion anterior de la fila y columna mas la posicion actual de la columna
            //y la anterior fila
            }else{
                piramide[i][j] = piramide[i-1][j-1] + piramide[i-1][j] 
            }
            //se pone el valor obtenido en el elemento p
            p.textContent = p.textContent + piramide[i][j];
        }
        //se introduce en el contenedor.
        cont.appendChild(p);
    }
}

function main() {
    //obtenemos el valor del nivel de la piramide
    let nivel = document.getElementById('nivelObjetivo');
    //enviamos a la funcion triangulo, que es la encargada de imprimir y calcular la piramide
    triangulo(nivel.value);
}