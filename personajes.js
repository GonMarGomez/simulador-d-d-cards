let personaje = '';
let arma = '';
let enemigo = ''
let weapons = document.getElementById('weapons')
let pelear = document.getElementById('pelear')
function seleccionDePersonaje(){
    let witchCard = document.getElementById("cardWitch")
    let warriorCard = document.getElementById("cardWarrior")
    let wiseCard = document.getElementById("cardWise")
    warriorCard.addEventListener("click",()=>{
        witchCard.style.display = "none"
        wiseCard.style.display = "none"
        weapons.style.display = "flex";
        return personaje = 'warrior';
    })
    witchCard.addEventListener("click",()=>{
        warriorCard.style.display = "none"
        wiseCard.style.display = "none"
        weapons.style.display = "flex";
       return personaje = 'witch';
    })
    wiseCard.addEventListener("click",()=>{
        warriorCard.style.display = "none"
        witchCard.style.display = "none"
        weapons.style.display = "flex";
      return personaje ='wise';
    })
}
function seleccionDeArmas(){
    let potion = document.getElementById("potion")
    let spellbook = document.getElementById("spellbook")
    let sword = document.getElementById("sword")
    potion.addEventListener("click",()=>{
        spellbook.style.display = "none"
        sword.style.display = "none"
       return arma = 'potion';
     
    })
    spellbook.addEventListener("click",()=>{
        potion.style.display = "none"
        sword.style.display = "none"
       return arma = 'spellbook';
       
    })
    sword.addEventListener("click",()=>{
        spellbook.style.display = "none"
        potion.style.display = "none"
       return arma = 'sword';
    
    }); 
}
 function seleccionDeEnemigo(){
    let tituloOponente = document.getElementById('titleOponente')
    let orcCard = document.getElementById("orc")
    let enemyWarrior = document.getElementById("enemyWarrior")
    let demondCard = document.getElementById("demond")
    let versus = document.getElementById("versus")
 
    orcCard.addEventListener("click",()=>{
        enemyWarrior.style.display = "none"
        demondCard.style.display = "none"
        versus.style.display = "block"
        tituloOponente.style.display = 'none'
        weapons.style.display = "none";
        pelear.style.display = 'block'
        return batalla('orc')
    })
    enemyWarrior.addEventListener("click",()=>{
        orcCard.style.display = "none"
        demondCard.style.display = "none"
        versus.style.display = "block"
        tituloOponente.style.display = 'none'
        weapons.style.display = "none";
        pelear.style.display = 'block'
        return batalla('enemyWarrior')
    })
    demondCard.addEventListener("click",()=>{
        enemyWarrior.style.display = "none"
        orcCard.style.display = "none"
        versus.style.display = "block"
        tituloOponente.style.display = 'none'
        weapons.style.display = "none";
        pelear.style.display = 'block'
        return batalla('demond')
    })
}
function batalla(enemigo){
switch(enemigo){
case 'orc':
    if(personaje === 'witch' && arma ==='potion'){ 
        (alert ('FELICITACIONES HAS GANADO LA BATALLA!!'));}
        else{
            ((alert ('PERDISTE...Para volver a intentar Presiona el boton al final de la pagina')))
        } 
        break;
case 'enemyWarrior':
    if(personaje === 'warrior' && arma ==='sword'){ 
        (alert ('FELICITACIONES HAS GANADO LA BATALLA!!'));}
        else{
            ((alert ('PERDISTE...Para volver a intentar Presiona el boton al final de la pagina')))
        } 
        break;
case 'demond':
    if(personaje === 'wise' && arma ==='spellbook'){ 
        (alert ('FELICITACIONES HAS GANADO LA BATALLA!!'));}
        else{
            ((alert ('PERDISTE...Para volver a intentar Presiona el boton al final de la pagina')))
        } 
        break;
}

}
seleccionDePersonaje()
seleccionDeArmas()
seleccionDeEnemigo();
batalla();



    
