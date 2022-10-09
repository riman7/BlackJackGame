let sum;
let alive = false, blackJack=false;
function randomCard(){
    let card = Math.floor(Math.random()*11 +2);
    return card;
}
wallet = 100;
function conditionCheck(){
    if (sum < 21){
        results = "You are still ALIVE, wanna draw new card?"
    }
    else if (sum === 21){
        results = "You are Black Jack!"
        blackJack = true;
        wallet += 25;
        document.getElementById("wallet").innerText = wallet;
    }
    else if(sum > 21){
        results = "You are loose!!"
        alive = false;
        wallet -= 15;
        document.getElementById("wallet").innerText = wallet;
    }
    document.getElementById("results").innerText= results;
}
// let card=[0,1]
function startGame(){
    alive = true;
    blackJack = false;
    card=[randomCard(),randomCard()];
    sum = card[0] + card[1];
    conditionCheck();
    for(i=0; i<card.length; i++){
    document.getElementById("card"+(i+1)).innerText= card[i];}
    for(i=3; i<6; i++){
        document.getElementById("card"+i).innerText=" ";}
    document.getElementById("sum").innerText= "Sum: "+sum;
    j=1;//for function newGame
    }


function newCard(){
    if (alive==true && blackJack==false){
    let newCard = randomCard();
    card.push(newCard);
    j++
    sum=0;
    for(i=j; i < card.length; i++ ){
        for(k=0; k < card.length; k++ ){
             sum = sum + card[k];
        }
        conditionCheck();
        document.getElementById("sum").innerText= "Sum: "+sum;
     document.getElementById("card"+(i+1)).innerText= card[i];
    
    }
}
}


