interface UserProps{
    name?: string; // ? means optional
    age?: number;
}
type Callback = ()=>{};

// class User
export class User{
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
        document.addEventListener(eventName, callbackFunc);
     }
}