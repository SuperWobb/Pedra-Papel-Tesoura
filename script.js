function cpuPlay()
{
    return Math.floor(Math.random()*3);
}

// 0: Pedra, 1: Papel, 2: Tesoura

function playerPlay(jogada)
{
    let x = jogada.toLowerCase();
    if(x === "pedra")
    {
        return 0;
    }
    else if (x === "papel")
    {
        return 1;
    }
    else if (x === "tesoura")
    {
        return 2;
    }
}

function resultado(a,b)
{
    let c = ["", 0];
    if(a === b)
    {
        c[0] = "Empate!";
        c[1] = 0;
    }
    else if (a === 0 && b === 1)
    {
        c[0] = "Você perdeu, Papel ganha de Pedra";
        c[1] = false;
    }
    else if(a === 0 && b === 2)
    {
        c[0] = "Você ganhou, Pedra ganha de Tesoura";
        c[1] = true;
    }
    else if(a === 1 && b === 0)
    {
        c[0] = "Você ganhou, Papel ganha de pedra";
        c[1] = true;
    }
    else if(a === 1 && b === 2)
    {
        c[0] = "Você perdeu, Tesoura ganha de papel";
        c[1] = false;
    }
    else if(a === 2 && b === 0)
    {
        c[0] = "Você perdeu, Pedra ganha de tesoura";
        c[1] = false;
    }
    else if(a === 2 && b === 1)
    {
        c[0] = "Você ganhou, Tesoura ganha de papel";
        c[1] = true;
    }
    return [c[0], c[1]];
}

let jogoP = 0;
let jogoCPU = 0;
let scoreP = 0;
let scoreCPU = 0;
while(scoreP < 5 && scoreCPU < 5)
{
    jogoCPU = cpuPlay();
    console.log(jogoCPU);
    jogoP = prompt("Qual sua jogada?");
    jogoP = playerPlay(jogoP);
    console.log(jogoP);
    console.log(resultado(jogoP, jogoCPU)[0]);
    if(resultado(jogoP, jogoCPU)[1] === false)
    {
        scoreCPU++;
    }
    else if (resultado(jogoP, jogoCPU)[1] === true)
    {
        scoreP++;
    }
    console.log("o jogo está " + scoreP + " a " + scoreCPU);
}
if (scoreP === 5)
{
    console.log("Você ganhou, parabéns!");
}
else
{
    console.log("Você perdeu, burro!");
}