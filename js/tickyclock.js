var d , h , m , s , clock , color;

function clocky(){
    
    var d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    if(h<10){
        h = '0'+h;
    }
    if(m<10){
        m = '0'+m;
    }
    if(s<10){
        s = '0'+s;
    }
    
    clock = h+":"+m+":"+s;
    color = '#'+h+m+s;
    document.getElementById("clock").innerHTML = clock;
    document.body.style.background = color;
    
    setTimeout(clocky,1000);
}

clocky();