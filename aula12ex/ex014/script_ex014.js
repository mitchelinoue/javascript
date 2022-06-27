function carregar() {

    var msg = window.document.getElementById('msg')
    var imgs = window.document.getElementById('imagem')
    var agora = new Date()    // Para definir data para poder pegar as horas
    var hora = agora.getHours()    // Para poder pegar as horas
 
    msg.innerHTML = `Agora são ${hora} horas.` // Para mostrar as horas

    if (hora >= 0 && hora <12) {
        // De manhã
        imgs.src = 'fotomanha.png'
        document.body.style.background = '#c28c16'

    } else if (hora >= 12 && hora < 18) {
        // De tarde
        imgs.src = 'fototarde.png'
        document.body.style.background = '#94b78d'

    } else {
        // De noite
        imgs.src = 'fotonoite.png'
        document.body.style.background = '#0f2f39'
    }

}

