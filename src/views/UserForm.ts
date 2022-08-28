

export class UserForm{
   constructor(public  parent: Element){}

   eventsMap(): {[key:string]:()=>void} {
       return {
           'click:button':()=>this.onButtonClick(),
           'mouseenter:h1':()=>this.onh1Hover(),

       }
   }
   onh1Hover():void{
       console.log('Hovered over an h1 tag');
   }
   onButtonClick():void{
       console.log("You just clicked this button !!")
   }
    template():string{
        return `
                <div>
                    <h1>User Form</h1>
                    <input type="text" placeholder="type something..." />
                    <button> ClickMe </button>
                </div>
                `
    }

    bindEvents(fragment: DocumentFragment):void{
        const eventsMap = this.eventsMap();
        for(let eventKey in eventsMap){
            const [eventName, selector] = eventKey.split(":");
            fragment.querySelectorAll(selector).forEach(el =>{
                 el.addEventListener(eventName, eventsMap[eventKey]);
            })
        }
    }
    render():void{
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}