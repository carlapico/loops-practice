//write a function that counts down from ten and says "BLAST OFF" at 0

function countDown (){
for  (i = 20; i >= -1; i --) {
    if (i === 0 ) {
        console.log("BLAST OFF");
        return;
    }
    console.log(i)
}
}

countDown ()
