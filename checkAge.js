function verificar() {
    let dig = document.querySelector('input#ano')
    let fano = Number(dig.value)
    let data = new Date()
    let ano = data.getFullYear()
    let res = document.querySelector('div#res')
    if ( fano > ano || fano < (ano - 122)) {
        alert('Enter a value that matches an age between 0 and 122 years!')
    } else {
        let idade = ano - fano
        let fsex = document.getElementsByName('radsex')
        let sexo = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            sexo = 'man'
        } else {
            sexo = 'woman'
        }

        if (idade <= 11 ) {
            res.innerHTML = `You are a ${idade} year old ${sexo}!
            <br> You are in childhood!<br>`
            if (sexo == 'man') { img.setAttribute('src', './img/infanciaMasc.png') }
                else { img.setAttribute('src', './img/infanciaFem.png') }
            res.appendChild(img)
        } else if (idade <= 20) {
            res.innerHTML = `You are a ${idade} year old ${sexo}!
            <br> You are in adolescence!<br>`
            if (sexo == 'man') { img.setAttribute('src', './img/adolescenteMasc.png') }
                else { img.setAttribute('src', './img/adolescenteFem.png') }
            res.appendChild(img)
        } else if (idade <= 55) {
            res.innerHTML = `You are a ${idade} year old ${sexo}!
            <br> You are in adulthood!<br>`
            if (sexo == 'man') { img.setAttribute('src', './img/adultoMasc.png') }
                else { img.setAttribute('src', './img/adultoFem.png') }
            res.appendChild(img)
        } else if (idade <= 70) {
            res.innerHTML = `You are a ${idade} year old ${sexo}!
            <br> You are in middle age!<br>`
            if (sexo == 'man') { img.setAttribute('src', './img/meiaIdadeM.png') }
                else { img.setAttribute('src', './img/meiaIdadeF.png') }
            res.appendChild(img)
        } else {
            res.innerHTML = `You are a ${idade} year old ${sexo}!
            <br> You are in old age!<br>`
            if (sexo == 'man') { img.setAttribute('src', './img/velhiceMasc.png') }
                else { img.setAttribute('src', './img/velhiceFem.png') }
            res.appendChild(img)
        }
            
    }
        
   
}