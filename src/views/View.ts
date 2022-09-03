import { Model } from "../models/Model";
import { User } from "../models/User";

// Model (is used as a generic constraint) is also egenric so we need to pass to it a generic whcih K
export abstract class View<T extends Model<k>, k>{
    constructor(public  parent: Element, public Model:T) {
        this.bindModel();
       }

       abstract template():string;
       
       eventsMap():{ [key:string] : () => void }{
           return {}
       }
       bindModel():void{
            this.Model.on("change", ()=>{
                this.render()
            })
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
        this.parent.innerHTML = ""
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}