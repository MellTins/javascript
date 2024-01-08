        var n1 = window.document.querySelector('input#ini1')
        var fim = window.document.querySelector('input#fim1')
        var passo = window.document.getElementById('passo1')
        var res = window.document.getElementById('res')
       
        function Salto(){
          var c = Number(n1.value) //var c recebe o numero digitado no 1º input
          var final = Number(fim.value) // var final recebe o numero digitado no 2º input
          while(c <= final){
            res.innerHTML += `${c}`;
            c +=  Number(passo.value);
          }
           if(Number(c) == null){
            res.innerHTML = 'Impossivel contar'
           }
        }
          
        