function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
         window.alert('[ERRO]Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for(var c = i ; c <= f ; c += p) {
                res.innerHTML += ` ${c} \u{1F91C}`
            }
        } else {
            //contagem regressiva
            for(var c = i ; c >= f ; c -= p ) {
                res.innerHTML += ` ${c} \u{1F91C}` //nesse passo o += significa concatenação pois vai adicionar os números ao "Contando: " 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
