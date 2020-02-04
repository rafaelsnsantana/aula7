function Calcular(){
    let valor1, valor2, valor3, media;
    
    valor1 = document.getElementById("valor1").value;
    valor2 = document.getElementById("valor2").value;
    valor3 = document.getElementById("valor3").value;

    valor1=parseFloat(valor1);
    valor2=parseFloat(valor2);
    valor3=parseFloat(valor3);
    
    media= (valor1 + valor2 + valor3)/3;
    document.getElementById("resultado").innerHTML=media ;
}
