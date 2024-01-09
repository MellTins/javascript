        var n1 = window.document.querySelector('input#ini1')
        var fim = window.document.querySelector('input#fim1')
        var passo = window.document.getElementById('passo1')
        var res = window.document.getElementById('res')
       
    function Salto(){
      if(valorn1 == 0 || valorfim == 0 || passo==0){
        res.innerHTML = 'Impossivel Contar!'
      }else{
       res.innerHTML = "Contando... <br>"
       var valorn1 = Number(n1.value) //pega o value de n1
       var valorfim = Number(fim.value) //pega o value de fim
       var p = Number(passo.value)
       if (p <= 0){
        window.alert('Passo invalido! Considerando Passo1')
         p = 1
       }

        if(valorn1 < valorfim)
        {for (let c = valorn1; c <= valorfim; c+= p) {
          res.innerHTML += `${c} \u{1F449}` // aqui ele vai adicionando o numero de salto ate o numero determinado na var "valorfim"
          //contagem crescente
        }
        
      }else {
        //contagem regressiva
           for (let c = valorn1; c >= valorfim; c-=p) {
            res.innerHTML += `${c} \u{1F449}`
           }
        }
         res.innerHTML += `\u{1F38C}`
      }
      }
    
          
        