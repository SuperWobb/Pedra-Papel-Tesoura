function cpuPlay()
{
    return Math.floor(Math.random()*3);
}

// 0: Pedra, 1: Papel, 2: Tesoura

function playerPlay(jogada)
{
    if(jogada === "pedra")
    {
        return 0;
    }
    else if (jogada === "papel")
    {
        return 1;
    }
    else if (jogada === "tesoura")
    {
        return 2;
    }
}

function resultado(a,b)
{
    let c = ["", 0, ""];
    if(a === b)
    {
        c[0] = "Empate!";
        c[1] = 0;    
        if(a===0)
        {
            c[2] = "Pedra empata com pedra";
        }
        else if(a===1)
        {
            c[2] = "Papel empata com papel";
        }
        else
        {
            c[2] = "Tesoura empata com tesoura";
        }
        
    }
    else if (a === 0 && b === 1)
    {
        c[0] = "Você perdeu!";
        c[1] = false;    
        c[2] = "Pedra perde para papel";
    }
    else if(a === 0 && b === 2)
    {
        c[0] = "Você ganhou!";
        c[1] = true;    
        c[2] = "Pedra ganha de tesoura";
    }
    else if(a === 1 && b === 0)
    {
        c[0] = "Você ganhou!";
        c[1] = true;    
        c[2] = "Papel ganha de pedra";
    }
    else if(a === 1 && b === 2)
    {
        c[0] = "Você perdeu!";
        c[1] = false;    
        c[2] = "Papel perde para tesoura";
    }
    else if(a === 2 && b === 0)
    {
        c[0] = "Você perdeu!";
        c[1] = false;    
        c[2] = "Tesoura perde para pedra";
    }
    else if(a === 2 && b === 1)
    {
        c[0] = "Você ganhou!";
        c[1] = true;
        c[2] = "Tesoura ganha de papel";
    }
    return [c[0], c[1], c[2]];
}

const pontosPlayer = document.querySelector('#player');
const pontosCPU = document.querySelector('#cpu');
const disputa = document.querySelector('#disputa');
const confronto = document.querySelector('#confronto');
const playerSel = document.querySelector('#playerSel');
const cpuSel = document.querySelector('#cpuSel');
const endGame = document.getElementById('fundoEndgame');
const msgEnd = document.querySelector('#msgEnd');
let jogoP = 0;
let jogoCPU = cpuPlay();
let scoreP = 0;
let scoreCPU = 0;
const botoes = document.querySelectorAll('button');
botoes.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === "playAgain")
        {
            scoreP = 0;
            scoreCPU = 0;
            disputa.textContent = "Escolha a sua arma:"
            confronto.textContent = "O primeiro a 5 pontos vence!";
            pontosPlayer.textContent = "Você: " + scoreP;
            pontosCPU.textContent = "Computador: " + scoreCPU;
            endGame.style.visibility = "hidden";
        }
        else
        {
            jogoCPU = cpuPlay();
            jogoP = playerPlay(button.id);
            switch (jogoP) 
            {
                case 0:
                    playerSel.textContent = "✊";
                    break;
                case 1:
                    playerSel.textContent = "✋";
                    break;
                case 2:
                    playerSel.textContent = "✌";
                    break;
            }
            switch (jogoCPU) 
            {
                case 0:
                    cpuSel.textContent = "✊";
                    break;
                case 1:
                    cpuSel.textContent = "✋";
                    break;
                case 2:
                    cpuSel.textContent = "✌";
                    break;
            }
            if(resultado(jogoP, jogoCPU)[1] === false)
            {
                scoreCPU++;
            }
            else if (resultado(jogoP, jogoCPU)[1] === true)
            {
                scoreP++;
            }
            disputa.textContent = (resultado(jogoP,jogoCPU)[0]);
            confronto.textContent = (resultado(jogoP, jogoCPU)[2]);
            pontosPlayer.textContent = "Você: " + scoreP;
            pontosCPU.textContent = "Computador: " + scoreCPU;
            if(scoreCPU === 5 || scoreP === 5)
            {
                if(scoreP > scoreCPU)
                {
                    msgEnd.textContent = "Parabéns, você ganhou!";
                }
                else
                {
                    msgEnd.textContent = "Você perdeu!"
                }
                playerSel.textContent = "❔";
                cpuSel.textContent = "❔";
                endGame.style.visibility = "visible";
            }
        }
    });
});

