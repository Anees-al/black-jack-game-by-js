


/*let cards=[]
let player = {
    name:"Anees",
    chips:125
}

let sum=0
let hasBlackjack =false
let isalive=false
let message=""
let messageEl=document.getElementById('message-el')
let sumEL=document.getElementById('sum-el')
let CardsEL=document.getElementById('cards-el')
let playerEL=document.getElementById('player-el')

console.log(sum)
playerEL.textContent=player.name+": "+"$"+player.chips


function start(){
    isalive=true
    let firstcard=getrandom()
    let secondcard=getrandom()

    sum=firstcard+secondcard
    cards=[firstcard,secondcard]
    

    
    render()
   
}
function getrandom(){
    let randomnumber= Math.floor(Math.random()*13+1)
    if(randomnumber===1){
        return 11
    }
    else if(randomnumber>10){
    
        return 10
    }
    else{
        return randomnumber
    }

}
    
    

function render(){
  if(sum<21){
     message='do you want to take new card 🙂'
     
   }

  else if(sum===21){
       message ='yeap your are the winner 🥳🥳'
       
       hasBlackjack=true

   }

   else if(sum>21){
      message=" sorry,you loose the game 😞"
      
       isalive=false
   }
   
   messageEl.textContent=message
   sumEL.textContent="sum: "+sum
   CardsEL.textContent="cards: "
   for(i=0;i<cards.length;i++){
       CardsEL.textContent+=cards[i]+","
   }
   

   console.log(hasBlackjack)
}
function newcard(){
    if(isalive===true && hasBlackjack===false){

   let thirdcard=getrandom()
   cards.push(thirdcard)
   sum+=thirdcard
   render()
   
   }
   }*/


   person={
    name:"Anees",
    age:24,
    country:"India"
   }


   function logOut(){
    console.log(person.name+" is "+person.age+" year old and lives in "+person.country)
   }
   logOut()

   
   


