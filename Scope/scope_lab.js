// Global scope
// var globalVar = "I'm a global variable";
// let globalLet = "I'm also global, but scoped with let";
// const globalConst = "I'm a global constant";

// {
//     //Block scope
//     var blockVar = "I'm a block-scoped var";
//     var blockLet = "I'm a block-scoped let";
//     var blockConst = "I'm a block-scoped const";
// }

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

//console.log(blockVar);
//console.log(blockLet);


// function show(){
//     var functionVar = "I'm a block-scoped var";
//     let functionLet = "I'm a block-scoped let";
//     const functionConst = "I'm a block-scoped const"
// }
// show();

// console.log(functionVar);
// console.log(functionLet);
// console.log(functionConst);

{
    var a = "hello";
    let b = "goodbye";
    const c = "turtles";

    a = "NEVA";
    b = "FOREVA";
    // c = "NOOO";

    console.log(a);
    console.log(b);
    console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);

// in short this is a long mess to understand
// the differences between var, let and const
// the conclusion is const cannot change and is
// limited to block level, so naming a const 
// outside a block just creates a new const
// let is limited to within the block but can 
// obviously freely change, var is global, within
// a block or not the same variables can be 
// referenced freely