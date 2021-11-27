function verificar(matrix,n)
{
    let i, j;
    //bandera que nos indica en caso de que no sea una mts
    let flag = false;
    //recorremos todas las filas
    for (i = 1; i < n; i++)
    {
        //recorremos todas las columnas
        for (j = 0; j < i; j++)
        {
            //obtenemos el valor de una posicion especifica
            let valor = matrix[i][j];
            //si es cero, pues vamos bien
            if (valor == 0){
                flag = true;
            //si es otro numero, ya no cumple la condicion y se pone falso
            }else{
                flag = false;
                break;
            }
        }
    }
    return flag;
}            

//recibimos el contenido del Textarea
function crearArreglo() {
    //almacenamos el textarea
    let texto = document.getElementById('datos');
    //lo volvemos una matriz
    let arreglo = texto.value.split("\n");
    for(i in arreglo){
        arreglo[i] = arreglo[i].split(" ");
    }
    //verificamos si es una matriz nxn
    let estado = true;

    for( i in arreglo)
        if(arreglo.length == arreglo[i].length)
            estado = true;
        else
            estado = false;
    //verificamos si esta vacia
    if(texto.value == ""){
        estado = false
    }
    //en caso de que sea valida, se procede a verificar
    if(estado){
        //enviamos la matriz que generamos y su longitud
        let validacion = verificar(arreglo,arreglo.length);
        if(validacion)
            alert('Es una matriz triangular superior');
        else
            alert('no es una matriz triangular superior');    
    }
    else
        alert('La matriz no es n x n');
}