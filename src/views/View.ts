import { Model } from "../models/Model";

// Model (is used as a generic constraint) is also egenric so we need to pass to it a generic whcih K
export abstract class View<T extends Model<k>, k>{
    regions: {[key:string]:Element} = {}

    constructor(public  parent: Element, public model:T) {
        this.bindModel();
       }

    abstract template():string;
    regionsMap():{ [key:string] : string }{
            return {}
    }
    eventsMap():{ [key:string] : () => void }{
           return {}
    }
    bindModel():void{
            this.model.on("change", ()=>{
                this.render()
            })
    }
    mapRegions(fragment: DocumentFragment):void{
        const regionsMap = this.regionsMap();
        for(let key in regionsMap){
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            element ? this.regions[key] = element : null
        }
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
    onRender():void{}
    render():void{
        this.parent.innerHTML = ""
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content)
        this.mapRegions(templateElement.content)
        
        this.onRender()

        this.parent.append(templateElement.content)
    }
}