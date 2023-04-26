function main(){
    let nombre = (prompt ('Ingrese su nombre'))
    let contenido = document.getElementById("nombre")
    contenido.innerHTML = `¡¡Buena suerte, ${nombre}!!` 
}
main();