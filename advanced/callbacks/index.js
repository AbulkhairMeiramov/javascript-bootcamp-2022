// Callbacks, Events and events queue, execution contexts stack, Web APIs

function waitingFn(timeInMs) {
    const futureTime = Date.now() + timeInMs;
    while(futureTime > Date.now()) {
        // waiting ...
    }
}

setTimeout(() => console.log('Callback is executed'), 5000);

waitingFn(3000);

console.log('Last statement in the global execution context');