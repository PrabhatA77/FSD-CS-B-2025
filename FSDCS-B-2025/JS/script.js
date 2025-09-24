// console.log("hello world")

// let a = 4;
// if(a>10){
//     let a= 300;
//     console.log("a inside:"+a);
// }
// else{
//     console.log("a inside:"+a);
// }

// let b= 20;
// if(b===20){
//     console.log("Equal")
// }
// else{
//     console.log("not equal")
// }

// const myName = "rahul";
// const data = `hello ... ${myName}`;
// console.log(data);

// function msg(name){
//     return name+" welcome to js";
// }

// const data = msg("ram");
// console.log(data)


// const data = function msg(name){
//     return name+" welcome to js";
// }

// const msg = data("rahul")
// console.log(msg)

// const data=(myname)=>{
//     console.log("hello arrow function "+myname)
// }
// data("ram");

//single line
const data = msg=>"hiii..."+msg;
console.log(data("greetings..."))

//IIFE
// (function(){
//     console.log("welcome to js");
// })();


// setTimeout(()=>{
//     console.log("using tmeout")
// },1000)

// setInterval(()=>{
//     console.log("hiii")
// },1000)

function greetings(msg="welcome"){
    console.log("hi"+msg)
}
greetings("rahul");

function selectLang(lang){
    let data;
    if(lang=='java'){
            function javaCompiler(){
                return "java compiler selected"
        }
        data = javaCompiler();
    }
    else if(lang == 'c'){
        function cComp(){
            return "c Compiler selected"
        }
        data = cComp();
    }
    else{
        data = "no such comp"
    }
    return data;
}

console.log(selectLang("c"));