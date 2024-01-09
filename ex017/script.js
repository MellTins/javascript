function tabuada(){
    var ntxt = window.document.querySelector('input#ntxt')
    let tab = document.getElementById('seltab')
if(ntxt.value.length == 0){
    window.alert('Por favor , digite um numero!')
} else {
    let n = Number(ntxt.value)
    let c = 1
    //limpartela
    tab.innerHTML = ''
    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c} `
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
    
}
    
}

//var ntxt = window.document.querySelector('input#ntxt')
/* var res = window.document.getElementById('res')
function tabuada(){
    var valor = Number(ntxt.value)
    var c = 0
    var igual = valor * Number(c)
    while(c <= 10){
      res.innerHTML += `O resultado entre ${valor}e ${c} é: ${igual} `
      valor += c
    }
} */