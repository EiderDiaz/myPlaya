
function show(){
    if(document.getElementById('combo').value == "contamination"){
        document.getElementById('combo1').style.visibility="visible";
        
    }else{
        document.getElementById('combo1').style.visibility="hidden";
    }
    if(document.getElementById('combo').value == "ambientalalert"){
        document.getElementById('combo2').style.visibility="visible";
        
    }else{
        document.getElementById('combo2').style.visibility="hidden";
    }
    if(document.getElementById('combo').value == "events"){
        document.getElementById('combo3').style.visibility="visible";
    }else{
        document.getElementById('combo3').style.visibility="hidden";
    }
    if(document.getElementById('combo').value == "ecology"){
        document.getElementById('combo4').style.visibility="visible";
    }else{
        document.getElementById('combo4').style.visibility="hidden";
    }
    if(document.getElementById('combo').value == "security"){
        document.getElementById('combo5').style.visibility="visible";
    }else{
        document.getElementById('combo5').style.visibility="hidden";
    }
}