
let set=new Set();

function shorten(){
    var Alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var code="";
    
    while(true){
        code="";
        for(var i=0;i<=5;i++){
            code+=Alphabets.charAt(Math.floor(Math.random() * Alphabets.length));
        }
        if(sessionStorage.getItem(code) || set.has(document.getElementById("tocompress").value)){
            alert("already have key");
            break;
        }else{
            set.add(document.getElementById("tocompress").value);
            sessionStorage.setItem(code,document.getElementById("tocompress").value);
            document.getElementById('compress').innerHTML=code;
            break;            
        }
    }
    
}

function expand(){
    var code=document.getElementById('toexpand').value;

    if(sessionStorage.getItem(code)){
        document.getElementById('expand').innerHTML=sessionStorage.getItem(code);
    }else{
        alert("No entry can be found as such! Try Again");
    }
}