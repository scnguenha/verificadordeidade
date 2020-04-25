function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano|| Number(fano.value) < 1900){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img  = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <15){
                //Criança
                img.setAttribute('src','malechild.png')
            }else if(idade <25){
                //Jovem
                img.setAttribute('src','maleyoung.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src','maleadult.png')
            }else{
                //Idoso
                img.setAttribute('src','maleold.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <15){
                //Criança
                img.setAttribute('src','femalechild.png')
            }else if(idade <25){
                //Jovem
                img.setAttribute('src','femaleyoung.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src','femaleadult.png')
            }else{
                //Idoso
                img.setAttribute('src', 'femaleold.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}