
export class Attributes<T> {

    constructor(private data: T) { }

    get = <K extends keyof T>(key: K): T[K]=> { // means that K can only be one of keys of T
        return this.data[key] // return id/name/age of obj(user) in: new User(obj)
    }

    set(update: T): void { // edit obj in: new User(obj)
        Object.assign(this.data, update ) // it's like : this.data = update; override the data;
    }

    getAll():T{
        return this.data;
    }
}   
