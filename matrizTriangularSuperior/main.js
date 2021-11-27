let matrix = [[1, 2, 3],
              [0, 5, 6],
              [0, 0, 9]];

function verificar(matrix,n)
{
    let i, j;
    let flag = false;
    for (i = 1; i < n; i++)
    {
        for (j = 0; j < i; j++)
        {
            let valor = matrix[i][j];
            if (valor == 0){
                flag = true;
            }else{
                flag = false;
            }
        }
    }
    return flag;
}            

//console.log(upper(matrix,matrix.length));

function crearArreglo() {
    let texto = document.getElementById('datos');
    let arreglo = texto.value.split("\n");
    for(i in arreglo){
        arreglo[i] = arreglo[i].split(" ");
    }

    let estado = true;

    for( i in arreglo)
        if(arreglo.length == arreglo[i].length)
            estado = true;
        else
            estado = false;

    if(texto.value == ""){
        estado = false
    }
    if(estado){
        let validacion = verificar(arreglo,arreglo.length);
        if(validacion)
            alert('Es una matriz triangular superior');
        else
            alert('no es una matriz triangular superior');    
    }
    else
        alert('La matriz no es n x n');
    //console.log(arreglo);
}