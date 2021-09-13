## CONDIÇÕES 

* condições simples
* condições compostas 
* condições aninhadas 
* condições multiplas 



<h3>Aula 11</h3>

Primeiro temos que falar sobre sequêcias ,por que todos os códigos que a gente fez até hoje , até  o momento nesse curso, foram codigos sequencias .

<p align="center">

  <img alt="sequencias" src="https://i.ibb.co/bPxxMcz/Screenshot-3.png">


na primeira linha criamos uma varivel "n" ele arecebe o valor 3
na segunda linha vai pegar o valor de "n" que é 3 e vai somar + 2 , que o resultado é 5, dentro do proprio "n", e por fim o último comando

e por ultimo  o comando window.alert(n) , o ultimo comando na tela  em forma de uma janela,na forma do navegador , uma janela de alerta.

a pergunta que fica é : o primeiro comando, o segundo comando e o terceiro comando,nesse caso aqui  , nessa disposição, tem como executar o primeiro, depois o terceiro e depois o segundo?

NÂO!


tem que executar o  primeiro , o segundo e o terceiro, não posso mudar a ordem. Outra coisa eu posso por exemplo, executar o primeiro, executar o terceiro e nao executar o do meio em alguma situação?

Também Não!, por que é só você olhar o fluxo , O fluxo apresentado aqui ao lado têm que ser,já que ele é uma seguencia , tem que se executado primeiro comando um, em segundo o comando dois e terceiro o comando três.

___

Existem situações que : "Tem que horas que vou querer executar o comando dois, e tem horas  que eu não vou quer executar o comando dois".

Chegou a hora de aprender um pouco mais sobre as condições 

basicamente eu tenho dois comandos e eu tenho um comando aqui embaixo, no meio está vazio por que dependendo de alguma coisa eu quero executar um determinado comando .E se ão der certo, eu executo outro comando.



<p align="center">

  <img alt="condições" src="https://i.ibb.co/VDxC2rY/Screenshot-1.png">

Seria por exemplo um , losango.Vou representar como losango.Ele vai fazer um filtro , tipo uma placa de transito , Sabe aquela placa que você está andando de carro mas chega uma gora que você só pode virar a esquerda ou virar a direita, examente .Imagina essa placa.

O meu programa está sendo executado de cima para baixo, examentamente como está aqui, chegou aqui em baixo onde está o losango, eu vou ter duas possibilidades.Exixte uma bifurcação examente como está representado embaixo.Essa bifurcação vai me levar para dois caminhos possiíveis: 

para um lado se acontecer 

<p align="center">

<img alt="condições" src="https://i.ibb.co/3BkWsmD/Screenshot-2.png">

 <p align="center">

<img alt="condições" src="https://i.ibb.co/LZ6ND12/Screenshot-3.png">
    

 <p align="center">

<img alt="condições" src="https://i.ibb.co/YTqsH87/Screenshot-4.png">

<p align="center">

<img alt="condições" src="https://i.ibb.co/dpLJ6TX/Screenshot-5.png">

---
<h3></h3>




para escrever na tela do nodeJS  não funciona o "document.write", tem que fazer
temos que escrever o console.log.

    console.log('O console funcionou corretamente!');


para escrever na tela do nodeJS  não funciona o "document.write", tem que fazer
temos que escrever o console.log.

console.log('O console funcionou corretamente!');

Eu posso fazer o seguinte, vamos imaginar que eu tenha uma váriável que vou chamar de velocidade
vou chamar de vel, que vai ser  a velocidade de um carro.Não sei, meu carro está andando a 60.5 km/h
criei uma variável numérica é real e eu coloquei dentro de vel.

---
sequencias 

    console.log (`A velocidade do seu carro é ${vel} Km/h`);
    console.log (`Você ultrpassou a velocidade permitida .Multado!`);

    console.log (`digija sempre usando cinto de segurança!`);

---
condição simples , é quando ela nao tem o else (se não ), quando é verdadeiro.

    var vel = 100
    console.log (`A velocidade do seu carro é ${vel} Km/h`);
    if (vel > 60) {
    console.log (`Você ultrpassou a velocidade permitida .Multado!`);
      }
    console.log (`digija sempre usando cinto de segurança!`);

---


condição composta 

    var país = 'EUA'

    console.log (`Estou vivendo em ${país}`);

    if (país == 'Brasil')  { //se país for igual a brasil vai ser executado esse comando;
    console.log('Voce é Brasileiro!');

    }
      else{
    console.log (' Voce é Estrangeiro!'); // se for diferente de  brasil vai ser esse comando que vai ser executado.
    }



