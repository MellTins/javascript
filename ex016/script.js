        var n1 = window.document.querySelector('input#ini1')
        var fim = window.document.querySelector('input#fim1')
        var passo = window.document.getElementById('passo1')
        var res = window.document.getElementById('res')
       
    function Salto(){
      var valorn1 = Number(n1.value) //pega o value de n1
      var valorfim = Number(fim.value) //pega o value de fim
      if(valorn1 == 0 || valorfim == 0 || passo==0){
        res.innerHTML = 'Impossivel Contar!'
      }else{
        while(valorn1 <= valorfim){
          res.innerHTML += `${valorn1} 👉🏼`
          valorn1 += Number(passo.value) // aqui ele vai adicionando o numero de salto ate o numero determinado na var "valorfim"
        }
      }
    }
          
        