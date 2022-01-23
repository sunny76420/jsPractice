
//-------------------------------------------------------------------------

function forloop() {
    for (i = 0; i < 5; i++) {
        console.log(i);
    }
}
// forloop();

//-------------------------------------------------------------------------

function whileloop() {
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
}
// whileloop();

//-------------------------------------------------------------------------

function forInLoop() {
    const person = { fname: "John", lname: "Doe", age: 25 };
    const numbers = [45, 4, 9, 16, 25];

    // let text = "";
    // for (let x in person) {
    //     text += person[x];
    // }

    let txt = "";
    for (let x in numbers) {
        txt += numbers[x];
    }

    console.log(txt);
}

// forInLoop();

//-------------------------------------------------------------------------

function forOfLoop() {
    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
        text += x;
    }
    console.log(text);
}

forOfLoop();
//-------------------------------------------------------------------------