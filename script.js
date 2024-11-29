
//Uppgift 1

// let doAfterDelay = (callback) => {
//     console.log("Goodbye");
// }

// let useCallback = () => {
//     console.log("Hello");
// };

// useCallback(doAfterDelay);

// setTimeout (doAfterDelay, 2000);

//Uppgift 2

// let fruits = ['Apple', 'Banana', 'Anananas', 'Cherry']

// let inköpsLista = () => {
//     console.log("Jag ska köpa dessa frukter idag:");
// }

// let fruitList = (callback) => {
//  fruits.forEach(fruit => {
//         console.log(fruit)
//     });
// }

// inköpsLista(fruitList);
// setTimeout(fruitList, 1000)

//Uppgift 3

// const balls = ["Basketball", "Football", "Tennisball", "Golfball"];

// const ballBag = (balls, cb, delayBeforeStart) => {
//     setTimeout(() => {
//         for (let i = 0; i < balls.length; i++) {
//             const ballType = balls[i];
//             setTimeout(() => {
//                 cb(ballType);
//             }, i * 1000); // Fördröjning för varje element
//         }
//     }, delayBeforeStart); // Fördröjning innan itereringen startar
// };

// ballBag(balls, (ballType) => {
//     console.log(ballType);
// }, 2000);



//Uppgift 5

// function shootBall() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             let shot = false;

//             if (shot) {
//                 resolve("You shoot the ball!");
//             } else {
//                 reject("Why didn't you shoot?");
//             }
//         }, 250)
//     })
// }

// function scoreBall() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             let scored = true;

//             if (scored) {
//                 resolve("You make the shot!");
//             } else {
//                 reject("You missed!")
//             }

//         }, 2000)
//     })

// }

// function crowdCheers() {


//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             let crowd = true;

//             if(crowd){
//                 resolve("The crowd goes wild!");
//             } else {
//                 reject("The crowd is stunned.")
//             }


//         }, 800)
//     })
// }

// shootBall().then(value => { console.log(value); return scoreBall() })
//     .then(value => { console.log(value); return crowdCheers() })
//     .then(value => {console.log(value); console.log("You won!");})
//     .catch(error => {console.log(error); console.log("You lost the game!")})


//SIMPLE CALLBACK

// let handleData = (input, callback) => {
//     return callback(input)
// }

// let makeUppercase = (str) => {
//     document.querySelector("#baller").innerHTML = str.toUpperCase();
// }

// handleData("Hello World", makeUppercase);

// //Eventlistener

// const changeBtnText = () => {
//     let btnPress = document.querySelector("#btn");
//     btnPress.innerHTML = "Hejsan";
// }

// let btn = document.getElementById("btn");
// btn.addEventListener("click", changeBtnText);

//MAP

// const numbers = [1, 2, 43, 65, 87]
// const pringNumbers = numbers.map((num) => {
//     console.log(num);
// });

//MANUAL MAP FUNCTION 
// const number1 = [1, 2, 43, 65, 87];

// let forEachElement = (number1, callback) => {
//     for (let i = 0; number1.length; i++) {
//         callback(number1[i])
//     }
// }

// const consoleNumbers = (number1) => {
//     console.log(number1);
// }

// consoleNumbers(number1, forEachElement);

// const ages = [10, 20, 30, 40, 50, 100, 150];

// let checkAge = (age) => {
//   return age > document.getElementById("ageToCheck").value;
// }

// let showAge = () => {
//   document.getElementById("demo").innerHTML = ages.filter(checkAge);

// }

// let ageBtn = document.getElementById("ageBtn");
// ageBtn.addEventListener("click", showAge);

// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`making request to ${location}`);
//         if (location === 'Google') {
//             resolve('Google says hi!')
//         } else {
//             reject('We only talk to Google')
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('Processing response');
//         resolve(`Extra information + ${response}`)
//     })
// }

// makeRequest('Google').then(response => {
//     console.log('Response has been recieved')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse);

// }).catch(error => {
// console.log(error);
// })

// async function doWork() {
//     try {
//         const response = await makeRequest('Google')
//         console.log('Response recieved');
//         const processedResponse = await processRequest(response)
//         console.log(processedResponse)
//     } catch (error) {
//         console.log(error);
//     }

// }

// doWork();

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch Pokemon");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        const pokeType1 = data.types[0].type.name;
        // const poketype2 = data.types[1].type.name;

        const pokemonType = document.getElementById('pokeType');
        pokemonType.textContent = `${pokemonName}´s primary typing is ${pokeType1}`

    } catch (error) {
        console.error(error);
    }
}

const apiUrl = 'https://official-joke-api.appspot.com/random_joke';


fetchJoke = () => {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Hittade inga skämt, sorry, not sorry!');
            }
            return response.json();
        })

        .then(data => {
            const setup = document.getElementById('setup');
            const punchLine = document.getElementById('punchLine');
            setup.textContent = data.setup;
            punchLine.textContent = data.punchline;
            console.log(data);
        })

        .catch(error => {
            console.error('Error: ', error);
        });

        setTimeout(() => {
            const jokeButton = document.getElementById('Btn2')
        jokeButton.textContent = 'Another please!'
        }, 2000);
        
}