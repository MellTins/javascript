let num = [9,6,7,5,3,1,2,4,0];
num.sort()
num.push(11)
console.log(num)
console.log(`A quantidade de elementos de ${num} é ${num.length}`)
let pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`o valor 4 está na posição ${pos}`)
}

