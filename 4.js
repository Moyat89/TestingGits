
/*
Teo Alarcón Moya
4.Crear un código que devuelva un array con los valores invertidos. Por ejemplo:
- Dado el array [1,2,3,4,5] devolverá [5,4,3,2,1]
- Dado [5,11,4,21,3] devolverá [3,21,4,11,5]*/

(function () {
    var array = [5,11,4,21,3];
    var arrayOp=[];

    for (var i=0;i<array.length;i++){
        arrayOp[i]=array[(array.length-1)-i];
    }
    console.log(arrayOp);
    })();

    sdñlgjsdklgsd