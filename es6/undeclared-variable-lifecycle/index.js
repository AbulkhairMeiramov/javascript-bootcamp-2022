function fn() {
    function fn2() {
        // console.log(a); // a is not defined
        a = 10;
        console.log(a);
    }

    fn2();
    console.log(a);
}

fn();
console.log(a); // a is declared in the global scope