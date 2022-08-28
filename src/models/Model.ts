import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes <T> {
    set(value:T):void;
    getAll():T;
    get<K extends keyof T>(key: K):T[K];
}
interface Sync <T> {
    fetch(id:number):AxiosPromise;
    save(data:T):AxiosPromise;
}

interface Events{
    on( eventName:string, callback:()=>void ):void;
    trigger(eventName:string):void;
}
interface HasId{
    id?:number;
}

// class Model
export class Model <T extends HasId> {
    constructor(
        private attributes:ModelAttributes<T>,
        private events:Events,
        private sync:Sync<T>,
    ){}
    /*** since we are not assinging some variables in the contructor(example: this.x = x), we can shorten
        our methods syntax from : get on(){return this.x.on}   to:   on = this.x.on;
        if we assign variables outside the contructor and we already did that inside contructor for other
        variables, the order of these variables will be messy(vars indside will be the last);
    *******/
    on = this.events.on; // get a refrence of events.on method 
    trigger = this.events.trigger;  // get a refrence of events.trigger method 
    get = this.attributes.get;  // get a refrence of attributes.get method 


    set(update: T):void{
        this.attributes.set(update); 
        this.events.trigger("change")
    }
    fetch():void{
        const id = this.attributes.get("id");
        if(typeof id !== 'number') throw new Error("Cannot fetch data without an ID")

        this.sync.fetch(id).then((response: AxiosResponse):void=>{
            this.set(response.data)
        })
    }

    save():void{
      this.sync.save(this.attributes.getAll()).then((res:AxiosResponse):void=>{
          this.trigger("save");
      }).catch(()=>{
          this.trigger("error");
      })
    }

}