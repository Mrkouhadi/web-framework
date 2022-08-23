import axios, { AxiosPromise } from "axios"

interface HasId{
    id?:number
}
export class Sync<T extends HasId>{

    constructor(public rootUrl: string){}
    fetch(id:number): AxiosPromise {
       return axios.get(`${this.rootUrl}/${id}`);
        // the response will be taken care of when calling fetch(id).then(....)
    }

    save(data:T):AxiosPromise {
        const {id} = data; // data.id
        if(id){
            return axios.put(`${this.rootUrl}/${id}`, data)
        }else{
           return  axios.post(this.rootUrl, data)
        }            
    }
}