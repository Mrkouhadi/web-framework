import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps>{

   eventsMap(): { [key:string]:() => void } {
       return {
            'click:.set-age':()=> this.onSetAgeClick(),  // another example 'mouseenter:h1':()=>this.onh1Hover(),
            'click:.set-name':()=>this.onSetNameClick(),
            'click:.save-model':()=>this.onSaveClick(),
        }
   }

   onSaveClick=():void=>{
       this.Model.save()
   }
   onSetAgeClick=():void=>{
       this.Model.setRandomAge();
   }
   onSetNameClick=():void=>{
        const input = this.parent.querySelector('input');
        if(input){
            const name = input.value;
            this.Model.set({name})
        }
   }
   
   template():string{
        return `
                <div>
                <style>
                    div{
                        padding:20px;
                        background-color:pink;
                    }
                    input, button{
                        padding:6px;
                    }
                </style>
                    <input type="text" placeholder="${this.Model.get('name')}" />
                    <button class="set-name"> Change Name </button>
                    <button class="set-age"> Set a Random Age </button>
                    <button class="save-model"> Save User </button>
                </div>
                `
    }

}