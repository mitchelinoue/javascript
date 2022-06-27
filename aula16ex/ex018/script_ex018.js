var somanum = []

function adicionar() {
    var numero = window.document.getElementById('numeros')
    var valores = window.document.getElementById('valores')
    var n = Number(numero.value)
    if (numero.value.length == 0 || n < 1 || n > 100 || somanum.indexOf(n) != -1) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {  
        somanum.push(n)
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        valores.appendChild(item)
        numero.value = '' //apaga o valor no input 
        numero.focus() //deixa o cursor clicado no input
        res.innerHTML = ''
    }
}

function finalizar() {
    if (somanum.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        somanum.sort()
        var res = window.document.getElementById('res')
        var soma = 0
        for(var s in somanum) {
        soma += somanum[s]
        }
        var media = soma/somanum.length
        
        res.innerHTML += `<p>Ao todo temos ${somanum.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior número informado foi ${somanum[somanum.length - 1]}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${somanum[0]}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}