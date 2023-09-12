function currency(){
    let a = document.getElementById("name").value
    let b = document.getElementById("currency").value
    if (b == 'Dollar') {
        let c = a * (0.012042)
        document.getElementById("result").innerHTML=c    
    } else if (b == 'Euro') {
        let c = a * (0.0113)
        document.getElementById("result").innerHTML=c    
    } else if (b == 'Pound') {
        let c = a * (0.0099)
        document.getElementById("result").innerHTML=c    
    }else if (b == 'Dirham') {
        let c = a * (0.044229)
        document.getElementById("result").innerHTML=c    
    }
    else {
        document.getElementById("result").innerHTML=c    
    }
}