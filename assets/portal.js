let portal = document.getElementById('portal');

// Crear las chispas (360)
for(let i= 0; i<360; i++){
    let sparkle = document.createElement("div");
   sparkle.className = "sparkle"; 
   let sparkleTranslation = Math.random()*(120-90)+100;
   sparkle.style.transform= 'rotate('+(i*2)+'deg)translate('+sparkleTranslation+'px)';

   portal.appendChild(sparkle);

}
