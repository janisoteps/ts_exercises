function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

// greeter(printToConsole);
printToConsole('test');

greeter((smt) => {
    console.log(smt)
});
