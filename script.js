//1. create an array of 5 person objects, the objects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------

let persons = [
  {
    firstName: "Hector",
    lastName: "Acevedo",
    age: 41,
    job: true,
  },
  {
    firstName: "Lise",
    lastName: "Johnsen",
    age: 39,
    job: true,
  },
  {
    firstName: "Madelen",
    lastName: "Acevedo",
    age: 10,
    job: false,
  },
  {
    firstName: "Lasse",
    lastName: "Acevedo",
    age: 6,
    job: false,
  },
  {
    firstName: "Alex",
    lastName: "Eide",
    age: 22,
    job: false,
  },
];

console.log(persons[4]);
console.table(persons);

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name

console.log(persons[0].firstName + " " + [persons[0].lastName]);

//------------------------------------------------------------------------------------------------------------------------------------------------

//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.

// Add a fullName method to each person object

for (let i = 0; i < persons.length; i++) {
  persons[i].fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

console.log(persons[2].fullName());

//------------------------------------------------------------------------------------------------------------------------------------------------

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.

persons[2].age = 11;
persons[2].job = true;

console.log(persons[2]);
console.table(persons[2]);
//------------------------------------------------------------------------------------------------------------------------------------------------

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.

function footballPubben(person) {
  if (person.age >= 18) {
    console.log(person.fullName() + ": party time");
  } else {
    console.log(person.fullName() + ": too young");
  }
}

persons.forEach((person) => {
  footballPubben(person);
});

//--------------------------------------------------------------------------------------------------------------------

//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.

// const alex = persons[4]
// const hecc = persons[0]

// function university(person, b) {
//   if (b === "bachelors") {
//     person.age += 2;
//     person.degree = "bachelors";
//     person.student_loan = 5000;
//   } else if (b === "masters") {
//     person.age += 3;
//     person.degree = "masters";
//     person.student_loan = 10000;
//   }
// }
// university(persons[0], "masters");
// console.table(persons[0]);

async function getBreeds() {
  const url = "https://dog.ceo/api/breeds/list/all";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.message; // returns breeds list
  } catch (error) {
    console.error(error.message);
  }
}


//------------------------------------------------------------------------------------------------------------------------------------------------

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.

// async function getData() {
//   const url = "https://dog.ceo/api/breeds/list/all";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

fetch("https://dog.ceo/api/breed/hound/images/random/4")
.then(res => {
  return res.json();
})
.then(data =>{
  console.log(data);
})
  // .catch(error => console.log(error));
  


//------------------------------------------------------------------------------------------------------------------------------------------------

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------
