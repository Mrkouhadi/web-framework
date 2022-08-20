import axios, { AxiosResponse } from "axios";

interface UserProps{
    id?:number
    name?: string; // ? means optional
    age?: number;
}

type Callback = ()=>void;

// class User
export class User{
    // in on method, we will get events and store them here :
     events:{[key: string] : Callback[] } = {};
     constructor(private data:UserProps){}

     get(propName:string): string | number {
         return this.data[propName]
     }

     set(update:UserProps):void{
         Object.assign(this.data, update) // it's like : this.data = update; override the data;
     }

     on(eventName: string, callbackFunc:Callback):void{
       const arrayOfCallbacks = this.events[eventName] || [];
       arrayOfCallbacks.push(callbackFunc);
       this.events[eventName] = arrayOfCallbacks;
     }

     trigger(eventName:string):void{
        const handlers = this.events[eventName];
        if(!handlers || handlers.length === 0 ) return;
        handlers.forEach(callbackFunction => callbackFunction());
     }

     fetch():void{
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
        .then((response: AxiosResponse):void=>{
            this.set(response.data)
        })
     }
}