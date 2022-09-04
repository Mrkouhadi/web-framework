import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> { // T : user, blog, post .... K is for the interface like UserProps
    Models: T[] = [];
    Events: Eventing = new Eventing();

    constructor(public rootUrl:string, public deserialize:(json:K)=>T){}
    
    get on(){
        return this.Events.on;
    }
    get trigger(){
        return this.Events.trigger;
    }

    fetch(){
        axios.get(this.rootUrl).then((res:AxiosResponse) => {
            res.data.forEach((val:K)=>{
                this.Models.push(this.deserialize(val));
            })
        })
        this.trigger("change");
    }
}