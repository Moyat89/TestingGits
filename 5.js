/*Teo Alarcón Moya

Queremos hacer un pequeño programa que nos calcule la letra del DNI.
Dado el número del DNI, lo dividimos entre 23 y nos quedamos con el resto de dicha división.
El resultado anterior es un número entre 0 y 22. A cada uno de estos posibles
números le corresponde una letra, según la siguiente tabla:

El programa deberá presentar el número del DNI que has introducido con su letra siguiendo el siguiente formato: 11111111-H
Ejemplos de DNI:
11111111-H
27896454-F
11247895-K*/

(function () {
    var numDNI =27896454 ; //Introduce número DNI
    var arrayLetra=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    var posLetra= (numDNI%23);
    console.log(numDNI+"-"+arrayLetra[posLetra]);
    })();
sgsdgdsgdsgds