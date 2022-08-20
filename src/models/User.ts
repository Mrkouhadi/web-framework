interface UserProps{
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
        console.log(this.data[propName])
         return this.data[propName]
     }

     set(update:UserProps):void{
         Object.assign(this.data, update) // it's like : this.data = update; override the data;
         console.log("data has been updated !",update )
     }

     on(eventName: string, callbackFunc:Callback):void{
       const arrayOfCallbacks = this.events[eventName] || [];
       arrayOfCallbacks.push(callbackFunc);
        this.events[eventName] = arrayOfCallbacks;
     }
}