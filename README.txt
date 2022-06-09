BUTTOM JAVASCRIPT
Essa é uma tentativa de reescrita de código, de partes simples para partes mais complexas. Essa é uma classe que é gerada por javascript.
Dentro do projeto  tem um index.html que está feito somente para exemplificar o uso da classe.

 No final do HTML exatamente antes da tag de fechamento do body deve ser implementado esse script que trará o javascript para dentro do html

<script type="module" src="js/script.js">

Esse index original do projeto deve ser apagado e a linha acima copiada e colada dentro do seu html no local indicado (antes do fechamento da tag body </body>). 

Dentro do arquivo js/script.js que está disponível nesse projeto está importado a classe button na linha um e depois ela é instanciada na linha 3. Os parametros da classe Button regulam as caracterísiticas do button, exatamente nessa ordem.

1- Nome que vai dentro do botão Ex Clique, Salvar etc : default Clique

2- O container onde deve aparecer o botão, aqui pode ser feito com classe, id ou o nome da tag se houver uma só: default body

3- Evento que normalmente é um click: default click

4- Nome da função que esse button vai disparar, caso não haja função vinculada ele vai disparar um console.log(funcionando). A função pode ser escrita dentro do js/script.js

5 Cor do background : default green

6 padding: default 6px 13px

7 Color: default white

8 border-radius: default 15%

9 border: default none

EXEMPLO DA CLASSE INSTANCIADA

const btn = new Button("Clique","div","click",deFora,"red","6px 13px","white", "10%", "solid, black 1px,)

Dentro do js/script.js tem uma função experimental, que deve ser substituida pela função real que será usada pelo usuário de verdade.

function deFora (){
    console.log("Sou uma função experimental")
}

Uma forma final de posicionar o botão dentro do container é usar flex dessa forma
 <div style="display:flex; justify-content: start;"></div>
 usando start center ou end, conforme o flex

