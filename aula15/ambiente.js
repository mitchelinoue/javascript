let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O array tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`)
console.log(`O segundo valor do array é ${num[1]}`)

for (var pos = 0 ; pos < num.length ; pos++) {
    console.log(num[pos])
}

var pos = num.indexOf(8) //pos recebe a chave onde o valor 8 está, nesse caso na terceira posição (começa sempre no zero)
console.log(`O valor 8 está na posição ${pos}`)