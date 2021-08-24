
<!-- ************************************* Baadges ********************************************* -->


<!-- ************************************* Título ********************************************* -->

<h1>Eventos DOM</h1>

<h1>Aula 10</h1>

<!-- ************************************* Sobre o projeto ********************************************* -->


---

<h3>📚 Conteúdo</h3>

Eventos DOM, a <div> que acabou de criar, evento e tudo aquilo que possa acontecer com essa <div>, com qualquer elemento , mas no exemplo acima , o que pode acontecer com essa div ?, um monte de coisa, a mais comum : 
    eventos de mouse, então por exemplo  chegar o curso do mouse e mover o mouse até encostar , até chegar dentro da <div>, quando chega o mouse dentro da <div> vai disparar um evento  pode ser o :

mouseenter  que o mouse entrou na <div>
    mousemove que o mouse continua se mover dentro da <div> , nesse momento disparado várias vezes, enquanto tiver movendo dentro da <div>, ele vai desperar esse evento "mousemove".
     mousedown  que se pegar o mouse e clicar e segurar ,tenho o disparo do mousedown.
     mouseup no momento que eu disparo outro evento  mouseup ou mouse up  que é  no momento que eu soltar
     click movimento do click inteiro apertar e soltar 
     mouseout ou mouse out e da mesma maneira que com o mouseenter, quando eu vou mover o mouse para fora dessa  <div> ele vai disparar 
    
        
Para disparar um evento, para tratar um evento , tem que ser explicado antes , o que é uma função ou uma funcionalidade.
uma função em javascript é o seguinte : é um conjunto de códigos, é um conjunto de linhas que a gente já fez várias vezes durante todas essas aulas  do curso , que vão ser executadas só quando o evento ocorrer.
Então por exemplo : eu vou programar dez linhas , essas dez linhas a gente chama de bloco,então imagina que esse bloco tivesse 10 linhas , essas 10 linhas não vão ser executadas  automáticamente,todos os nossos códigos até o momento foram executadas automaticamente carregava a pagina e ele executava o código , agora essas 10 linhas (esse bloco), ele só vai ocorrer, por exemplo: quando eu clicar dentro da <div>,então essas 10 linhas vão ser disparadas somente quando evento ocorrer 

---
para eu executar essas 10 linhas somente quando o evento ocorrer, para executar essas 10 linhas somente quando o evento ocorrer , primeiro passo é coloca-lá  dentro de um bloco, um bloco em javascript ele é delimitado entre os sinais de  de chaves {}, então  você abre  chaves , coloca o seu código e fecha chaves.

            

                    {

                 bloco 

                    }



---
Isso aqui a gente chama de bloco , esse bloco você tem que nomear ele como uma 'function'



            function{

              bloco 

            }



---

 então você coloca a palavra 'function', que quer dizer função  antes do bloco,no javascript existe isso aqui:


        function  {

                  }
        
        
        
---


função anônima , é uma função que simplesmente não tem nome, só que para que o método possa funcionar,
eu tenho que dar um nome para essa função  e geramente são das funções são ações que nós podemos fazer, geralmente  funções  de evento,
    eles são  nomes de ação , que você vai colocar .

vai colocar o nome da ação que vai acontecer  e abre e fecha parenteses, 
        
 
     function ação () {

                 }

  ---            
 E opcionalmente você pode também colocar dentro desses parenteses
 alguns parametros , pode ser um, pode ser vários parametros.
 

    function ação (parametros){

            
                    }


vamos  voltar ao código que fizemos  até o momento e vamos disparar um código simples que é um código de click.

---

Os eventos pode ser configurados na parte HTML ou diretamente no javascript , exemplos de duas técnicas  usa qual você preferir.

eu vou fazer o seguinte aqui : meu método  que vou disparar é o evento click , para disparar o click , para eu dispar o click dentro do html , eu vou colocar aqui dentro da minha <div> do lado do ID  e vou colocar "on" e o nome do método 

### exemplo direto no html :

  tudo que tiver aqui dentro da function ele só vai ser executado quando eu chamar o clicar ,
    eu tenho que disparar o método só vai ser disparado quando eu clicar com o mouse, então esse método "clicar" ,
    vou chamar essa função de clicar .

    <div id="area" onclick="clicar()">


        interaja..

    </div>
    

    <script>

    

    function clicar() {

    então quando eu chamar a função ao clicar ele vai executar tudo que está aqui dentro. 
    essa é a configuração básica e aqui dentro vai configurar tudo que vai acontecer , 
  

       }

      eu tenho que disparar o método só vai ser disparado quando eu clicar com o mouse, então esse método "clicar" ,
    vou chamar essa função de clicar .



    quando eu clicar eu quero fazer o seguinte : esse interaja vai mudar o conteudo dele ,para eu mudar  o conteudo dele, eu tenho que ver dentro da minha árvore DOM , 
    
    
    isso aqui é uma <div> de id "area". Então eu posso fazer :

    var a ( pode chama de "a" ou de "area" sem problemas)


    <div id="area" onclick="clicar()">


        interaja..

    </div>
    

    <script>

    


    function clicar() {

            var area = window.document.getElementById // tambem posso usar o querrySelector, não está no plural então não tem que usar colchetes, vou colocar entre aspas simples,
    }



     
    </script>
   
    <div id="area" onclick="clicar()">


        interaja..

    </div>
    

    <script>

/*tudo que tiver aqui dentro ele só vai ser executado quando eu chamar o clicar ,
então quando eu chamar ao clicar ele vai executar tudo que está aqui dentro. essa é a configuração básica , 
eu tenho que disparar o método só vai ser disparado quando eu clicar com o mouse, então esse método "clicar" ,
vou chamar essa função de clicar .



var area = window.document.getElementById // tambem posso usar o querrySelector, não está no plural então não tem que usar colchetes, vou colocar entre aspas simples,
        */


    function clicar() {

    var area =window.document.getElementById('area');
        area.innerText = 'clicou !'
    }



     Esse "clicou" , ele só vai acontecer quando eu efetivamente clicar em cima do elemento , porque eu disparei o evento "onclick", vamos para outro elemento aqui que é o "onmouseenter" (isso é quando o mouse entrar na <div> )
     <div id="area" onclick="clicar()" onmouseenter="entrar()">
        interaja..

    </div>
    

    <script>

/*tudo que tiver aqui dentro ele só vai ser executado quando eu chamar o clicar ,
então quando eu chamar ao clicar ele vai executar tudo que está aqui dentro. essa é a configuração básica , 
eu tenho que disparar o método só vai ser disparado quando eu clicar com o mouse, então esse método "clicar" ,
vou chamar essa função de clicar .



var area = window.document.getElementById // tambem posso usar o querrySelector, não está no plural então não tem que usar colchetes, vou colocar entre aspas simples,
    
Esse "clicou" , ele só vai acontecer quando eu efetivamente clicar em cima do elemento , porque eu disparei o evento "onclick", 
vamos para outro elemento aqui que é o "onmouseenter" (isso é quando o mouse entrar na <div> )vou chamar o 'entrar',
coloquei a ação e vou ter que criar outra function 

*/
var area =window.document.getElementById('area');  /*vamos colocar o "var area" para fora,
colocando para fora o "area" vai funcionar dentro de qualquer function que for criada. */

    function clicar() {

    

    area.innerText = 'clicou !'

    }

    function entrar(){

    area.innerText= "entrou !"
    }



var area =window.document.getElementById('area'); /* a variavel do lado de fora é um escopo global,vamos colocar o "var area" para fora,
colocando para fora, o "area" vai funcionar dentro de qualquer function que for criada. de forma resumida quando crio do lado de fora ela vai servir para todas a três functions*/

    function clicar() {

    var area =window.document.getElementById('area'); // se eu pego isso aqui e coloco dentro da variavel ela so vai funcionar no clicar e não vai servir para as outras .

    area.innerText = 'clicou !'
    }

    function entrar(){

     area.innerText= 'entrou !'
    }

    function sair () {

    area.innerText = 'saiu !'

    }

### exemplos por javascript

    <div id="area" >
        interaja..

    </div>

    <script>
    var area =window.document.getElementById('area');


    //EventListener
    
    area.addEventListener('click', clicar);
        area.addEventListener('mouseenter', entrar);
    area.addEventListener('mouseout',sair);

    function clicar() {

    
    area.innerText = 'clicou !'
    area.style.background = 'red'   

    }

    function entrar(){

    area.innerText= 'entrou !'
    area.style.background ='purple'
    area.style.color ='black'
    }

    function sair () {

    area.innerText = 'saiu !'
    area.style.background ='yellow'
    }

     
    </script>









## O ponta pé inicial da minha caminhada ao desenvolvimento web.



<h3>🛠Ferramentas</h3>

* [Visual Studio Code](https://code.visualstudio.com/) - IDE de Desenvolvimento. 
* [Gustavo Guanabara](https://www.youtube.com/channel/UCrWvhVmt0Qac3HgsjQK62FQ ) - Referência

