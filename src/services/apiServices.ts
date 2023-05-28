type PromiseResolve<T> = (value?: T | PromiseLike<T>) => void; 
type PromiseReject = (error?: any) => void; 

export function promiseFunc(time:number, func:Function): void{
    new Promise((resolve: PromiseResolve<number>, reject: PromiseReject): void => { 
        setTimeout(()=>{
            func();
            resolve(1);
        }, time * 1000);
    }); 
}