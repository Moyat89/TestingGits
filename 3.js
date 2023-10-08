
/*
Teo Alarcón Moya
3.Escribid un programa en JavaScript que, dada una frase, la transforme y escriba por consola de manera que después de cada vocal se añada una "p" y a continuación se repita la vocal.

Ejemplo: si la entrada és "Hola qué tal", la salida debe ser "Hopolapa qupuépé tapal"*/

(function () {

    var frase="Hola qué tal";
    var vocales = ["a","e","i","o","u","á","é","ó","í","ú","à","è","ò","ì","ù","ä","ë","ï","ö","ü"];
    var fraseTransfor = frase.split('');

    for (var i=0;i<fraseTransfor.length;i++){
        for(vocal of vocales){
            if(fraseTransfor[i].toLowerCase()==vocal){
                fraseTransfor[i]=vocal+"p"+vocal;
            }
        }
    }
    console.log(fraseTransfor.join(""));
    })();
