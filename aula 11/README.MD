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
condição simples , é quando ela nao tem o else, quando é verdadeiro., são 'ifs', eu tenho ifs sem a clásula else.Eu tenho  uma condição e se ela for satisfeita ela vai executar o bloco.


    var vel = 100
    console.log (`A velocidade do seu carro é ${vel} Km/h`);
    if (vel > 60) {
    console.log (`Você ultrpassou a velocidade permitida .Multado!`);
      }
    console.log (`digija sempre usando cinto de segurança!`);

---


condição composta  se  precisar de blocos duplos , se uma determinada condição for verdadeira e faz alguma coisa e se não faz outra coisa , eu tenho as condições compostas.

    var país = 'EUA'

    console.log (`Estou vivendo em ${país}`);

    if (país == 'Brasil')  { //se país for igual a brasil vai ser executado esse comando;
    console.log('Voce é Brasileiro!');

    }
      else{
    console.log (' Voce é Estrangeiro!'); // se for diferente de  brasil vai ser esse comando que vai ser executado.
    }



<img src="https://i.ibb.co/Tq2YC8m/Screenshot-1.png" align="center" border="0"></a>


--- 
condições aninhadas  eu vou pegar uma condição composta e vou colocar outras condições dentro dela por exemplo 

Nessa condição , se for verdae faz aquele bloco ali sendo representado ali do lado, senão, eu não faço outro bloco, eu coloco outra condição e isso amplia minhas possibilidades.
Essa minha condição vai ter duas possibilidades.Eu posso executar um bloco e fazer outra condição dentro e ir aninhando , vem de ninho, um dentro do outro.Nesse meu caso aqui, eu não vou ficar colocando um dentro do outro não , eu vou colocar só dois níveis .

lembrando que se pode fazer vários níveis.

Aqui , se for verdade (true) eu faço uma e se for mentira eu faço outra.Então agora eu tenho três possibilidades, é só você olhar a quantidade de blocos que têm aqui em baixo.Sendo assim, quando eu tenho uma condição aninhada eu tenho exatamente isso aqui em baixo, uma condição dentro de outra.
Na verdade o que você está vendo no exemplo a baixo,a condição de cima está puxando para os dois lados, eu poderia puxar para os dois lados e criar duas condições , uma dentro de cada.Não existe uma regra de aninhamento, mas pe muito comum você fazer desse jeito do exemplo abaixo,Tão comum que o javascript tem uma estrutura , um comando bem especial que é o<strong> else if</strong>

<img src="https://i.ibb.co/6HhGtL1/Screenshot-7.png" align="center" border="0"></a>
