/* para escrever na tela do nodeJS  não funciona o "document.write", tem que fazer
 temos que escrever o console.log.
*/

//console.log('O console funcionou corretamente!');

/* Eu posso fazer o seguinte, vamos imaginar que eu tenha uma váriável que vou chamar de velocidade
vou chamar de vel, que vai ser  a velocidade de um carro.Não sei, meu carro está andando a 60.5 km/h
criei uma variável numérica é real e eu coloquei dentro de vel.
*/


//sequencias 
/*
console.log (`A velocidade do seu carro é ${vel} Km/h`);
console.log (`Você ultrpassou a velocidade permitida .Multado!`);

console.log (`digija sempre usando cinto de segurança!`);
*/

//condição simples , é quando ela nao tem o else (se não )

var vel = 100
console.log (`A velocidade do seu carro é ${vel} Km/h`);
if (vel > 60) {
    console.log (`Você ultrpassou a velocidade permitida .Multado!`);
}
console.log (`digija sempre usando cinto de segurança!`);




