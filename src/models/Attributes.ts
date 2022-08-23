

export class Attributes<T> {

    constructor(private data: T) { }

    get(propName: string): string | number {
        return this.data[propName] // return id/name/age of obj(user) in: new User(obj)
    }

    set(update: T): void { // edit obj in: new User(obj)
        Object.assign(this.data, update) // it's like : this.data = update; override the data;
    }
}