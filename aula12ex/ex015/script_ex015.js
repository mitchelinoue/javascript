function verificar() {
    var data = new Date() //?necessário para pegar a data
    var ano = data.getFullYear() // para pegar o ano presente
    var fano = window.document.getElementById('txtano') //variável recebe resposta da pergunta ano de nascimento
    var res = window.document.querySelector('div#res') //variável recebe o que está no div#res 

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!') //para verificar se foi colocado o ano e se o ano é menor que o ano atual
    } else {
        var fsex = window.document.getElementsByName('radsex') //var recebe a resposta do input rádio
        var idade = ano - Number(fano.value) //var recebe a idade da pessoa
        var genero = '' //var vazia para ser preenchida posteriormente 
        var img = document.createElement('img') //var criada como img de HTML (outra forma de criar img<>)
        img.setAttribute('id', 'foto') //img com id de 'foto'

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança 
                img.setAttribute('src', 'foto-bebe-h.png') //puxa a imagem de criança
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-h.png')
            } else if (idade < 45) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-h.png')
            } else {
                //Velho
                img.setAttribute('src', 'foto-velho-h.png')
            }

        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 45) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Velho
                img.setAttribute('src', 'foto-velho-m.png')
            }
        }

        res.style.textAlign = 'center' //para centralizar o res
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` //troca a escrita do res
        img.style.padding = '20px' //dá espaçamento entre imagem e escrita
        res.appendChild(img) //mostra a imagem que foi puxada lá em cima
    }
}