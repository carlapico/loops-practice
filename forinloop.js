// for (key in object){
//     statement;
// }

// const obj = {a:, b:, c:};
// for (const key in object) {
//     console.log(key);
// }

    // for in loop - iterated over properties of an objet 
    // object -{'Key"; value} pair
    // key - property of the object 
    //statement -code that is executed when the object is true

const object ={
        name:"Matt",
        age:20,
        inClass:true,
};

for (const key in object) {
    console.log(key)
} // this is how you would get the keys 

//name
// age
// inClass

for (const key in object) {
    console.log(object[key])
} // this is how you would get the objects

// Matt
// 20
// true