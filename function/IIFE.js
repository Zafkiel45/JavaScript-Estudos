"use strict";

(function(){
    function Somar(a, b){
        return a + b
    }
    console.log(Somar(10, 5))
}())

/*
    Funções IIFE são funções que são imediatamente invocadas assim que o programa é executado. Isso é útil quando queremos executar um determinada código imediatamente uma única vez. Vale ressaltar as vantagens em relação ao escopo. Tudo dentro do IIFE é isolado do escopo global evitando poluição no código. 
*/