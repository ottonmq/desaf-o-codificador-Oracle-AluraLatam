function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagenderecha").style.display = "none";
    document.getElementById("textodere").style.display = "none";
    document.getElementById("textoareaderecha").innerHTML = txtCifrado;
    document.getElementById("copy").style.display ="show";
    document.getElementById("copy").style.display ="inherit";
    

 
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagenderecha").style.display = "none";
    document.getElementById("textodere").style.display = "none";
    document.getElementById("textoareaderecha").style.display="hidden"
    document.getElementById("textoareaderecha").innerHTML = txtCifrado;
    document.getElementById("copy").style.display ="show";
    document.getElementById("copy").style.display ="inherit";
}

function copy(){
    var contenido = document.querySelector("#textoareaderecha");
    navigator.clipboard.writeText(contenido.value); 
    document.getElementById("inputTexto").value=""; //este  linea limpia el cuadro 
    alert("Copiado en Portapapeles");
    

}
