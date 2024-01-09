var ntxt = window.document.querySelector('input#ntxt')
var res = window.document.getElementById('res')


function tabuada(){
    var valor = Number(ntxt.value)
    var c = 0
    for (var c = 1; c<= 10; c++) {
        var resultado = valor *c
        res.innerHTML += `${valor} x ${c} :${resultado} ` 
        
    }
}

//var ntxt = window.document.querySelector('input#ntxt')
var res = window.document.getElementById('res')
function tabuada(){
    var valor = Number(ntxt.value)
    var c = 0
    var igual = valor * Number(c)
    while(c <= 10){
      res.innerHTML += `O resultado entre ${valor}e ${c} é: ${igual} `
      valor += c
    }
}