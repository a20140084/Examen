
var nom=prompt("Ingrese su nombre");
alert("Hola "+nom+" bienvenido al cuestionario sobre el turismo del Perú");
var res1 =prompt("¿En qué departamento se encuentra el lago Titicaca?\nA: Tacna\nB:Puno \nC: Cusco");
if(res1=="B"){
    res1=25;
}else{
    res1=0;
}
var res2 =prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA: Lima e Ica\nB:Arequipa y Tacna \nC: Piura y Tumbes");
if(res2=="C"){
    res2=25;
}else{
    res2=0;
}
var res3 =prompt("Plato típico de la Selva peruana\nA:Tacacho con cecina\nB:Arroz con pollo \nC: Lomo saltado");
if(res3=="A"){  
    res3=25;
}else{
    res3=0;
}
var total =res1+res2+res3;
if(total<=25){
    document.write("Vuelve a intentarlo "+nom);
}else{
    document.write("Felicitaciones "+nom+" lo has hecho muy bien")
}
document.write(total)