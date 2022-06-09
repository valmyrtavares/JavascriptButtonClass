export default class button{
constructor(label, container, event, func, background, padding, color, borderRadius, border ){
this.label = label || "Clique"
this.container = container? document.querySelector(container): document.querySelector('body')
this.event = event || 'click';
this.func = func || console.log("Estou funcionando");
this.background = background || 'green';
this.padding = padding || '6px 13px';
this.color = color || 'white';
this.borderRadius = borderRadius || '15%';
this.border = border || 'none';
}
    init(){
         const btn = document.createElement('button')
        btn.innerHTML=this.label        
        btn.style.background = this.background
        btn.style.padding = this.padding
        btn.style.color = this.color
        btn.style.borderRadius = this.borderRadius        
        btn.style.border = this.border 
        btn.addEventListener(this.event, ()=>{
          this.func()
        })   
        this.container.appendChild(btn)      
        console.log(this.container)

        
    }

}
