import entradaDados from 'readline-sync'; 
import listaDeFrutas from './dados.js';

console.log("------------JOGO DA FORCA------------");
const palavraEscolhida = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];
let totalstring = palavraEscolhida.length;
console.log("Advinhe o nome da fruta com "+totalstring+" letras:"); 
let primeiraLetra = palavraEscolhida[0]; 
let underline = "_".repeat(palavraEscolhida.length - 1);
 let palavraOculta = primeiraLetra + underline; 
 function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) { let palavraOcultaArray = palavraOculta.split(''); 
 for (let i = 0; i < palavraEscolhida.length; i++) { 
    if (letraDigitada === palavraEscolhida[i]) 
      { palavraOcultaArray[i] = letraDigitada; } } 
    return palavraOcultaArray.join(''); } 

let total = 3; while (palavraOculta.includes("_")) 
  { console.log(`Palavra atual: ${palavraOculta}`);
  let letraDigitada = entradaDados.question("Digite uma letra: "); 
  // testa se é um caractere valido   
  if (!validarLetraDigitada(letraDigitada)) 
    {   
      console.log("Por favor, digite uma letra válida."); 
      continue;
    } 
  // se o caractere é valido, testa se está presenta na palavra 
   if (palavraEscolhida.includes(letraDigitada)) 
    { palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);
    }else{ 
      total --;
      if(total == 0){
        console.log("--------------VOCÊ PERDEU!!--------------");
          break;}
        console.log(`OPÇÃO ERRADA! Você ainda tem `+total+` chance(s)!`);
     }
     if(palavraOculta == palavraEscolhida){
      console.log("---------------VITÓRIA!!--------------")
      console.log(`Você acertou o nome da fruta: ${palavraEscolhida}`)}
    }
    function validarLetraDigitada(letraDigitada) { 
     return letraDigitada.length === 1 && letraDigitada.match(/[a-z]/);
  } 
   
export {atualizarPalavraOculta, validarLetraDigitada};
