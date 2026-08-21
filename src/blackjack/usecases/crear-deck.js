 import _ from 'underscore';
 
 // Crear un  nuevo deck
   export  const crearDeck = (tiposDeCartas, tiposEspeciales) => {
       
        deck = [];
        for(let i=2; i<=10;i++){
            for( let tipo of tiposDeCartas){
                deck.push(i+tipo); 
            }  
        }
        for(let tipo of tipos){
            for( let esp of tiposEspeciales){
                deck.push(esp+tipo); 
            }
        }
        return _.shuffle(deck);
    }
