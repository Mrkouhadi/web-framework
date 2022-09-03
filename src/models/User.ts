import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { SyncApi } from "./SyncAPI";

export interface UserProps {
    id?: number
    name?: string; // ? means optional
    age?: number;
}

const rootUrl = "http://localhost:3000/users"

// class User
export class User extends Model <UserProps> {

    static buildUser(attrs: UserProps): User {
        return new User(
                    new Attributes<UserProps>(attrs),
                    new Eventing(),
                    new SyncApi<UserProps>(rootUrl),
        );
    }
    static getUsersCollection():Collection<User, UserProps>{
        return new Collection<User, UserProps>(rootUrl, (json:UserProps)=>{
                 return User.buildUser(json);
                });
    }

    setRandomAge():void{
        const age = Math.round((Math.random() * 90) + 5);
        this.set({age})
    }
}
