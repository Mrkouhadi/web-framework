type Callback = () => void;

export class Eventing{
    // in on method, we will get events and store them here :
    events: { [key: string]: Callback[] } = {};

    on(eventName: string, callbackFunc: Callback): void {
        const arrayOfCallbacks = this.events[eventName] || [];
        arrayOfCallbacks.push(callbackFunc);
        this.events[eventName] = arrayOfCallbacks; // store events
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) return;
        handlers.forEach(callbackFunction => callbackFunction());
    }
}