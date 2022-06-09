import Button from './module/button.js';

const btn = new Button("Clique","div","click",deFora,"","","")
btn.init()

//EXEMPLO
const btn1 = new Button("Salvar","","click",deFora,"red","","white","15%","")
btn1.init()


function deFora (){
    console.log("De fora")
}