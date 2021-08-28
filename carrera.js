class Dice{
    throw(){
        return Math.ceil(Math.random()*6);
    }
}

let dice = new Dice;
let runner1 = 0, runner2 = 0, round = 0;

function advance(){
    let cara;
    cara = dice.throw();
    if(cara >= 4){
        return 2;
    }else if(cara == 3){
        return 3;
    }else{
        return 1;
    }
}

do{
    round++;
    runner1 += advance();
    runner2 += advance();
    console.log(`Ronda ${round}`)
    console.log(`Posición del corredor 1: ${runner1}`);
    console.log(`Posición del corredor 2: ${runner2}`);
}while(runner1 < 100 && runner2 < 100);

if(runner1 >= 100 && runner2 >= 100){
    console.log("Empate")
}else if(runner1 >= 100){
    console.log("Ganó el corredor 1");
}else{
    console.log("Ganó el corredor 2");
}