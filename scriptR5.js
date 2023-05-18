function calcData(){
    dias = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
    meses = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho","julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    now = new Date
    let horas = now.getHours();
    switch(true){
        case (horas >= 00 && horas <= 5): 
            document.getElementById("dias").innerHTML = ("Boa Madrugada! Hoje é "+dias[now.getDay()] + ", " + now.getDate() + " de " + meses[now.getMonth()] + " de " + now.getFullYear() + " -- " + horas +":" + now.getMinutes() + "hs.")
            break;
        case (horas >= 6 && horas <= 11): 
            document.getElementById("dias").innerHTML = ("Bom Dia! Hoje é "+dias[now.getDay()] + ", " + now.getDate() + " de " + meses[now.getMonth()] + " de " + now.getFullYear() + " -- " + horas +":" + now.getMinutes() + "hs.")
            break;
        case (horas >= 12 && horas <= 17): 
            document.getElementById("dias").innerHTML = ("Boa Tarde! Hoje é "+dias[now.getDay()] + ", " + now.getDate() + " de " + meses[now.getMonth()] + " de " + now.getFullYear() + " -- " + horas +":" + now.getMinutes() + "hs.")
            break;
        case (horas >= 18 && horas <= 23): 
            document.getElementById("dias").innerHTML = ("Boa Noite! Hoje é "+dias[now.getDay()] + ", " + now.getDate() + " de " + meses[now.getMonth()] + " de " + now.getFullYear() + " -- " + horas +":" + now.getMinutes() + "hs.")
            break;
    }
}
