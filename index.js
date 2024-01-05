function fullName() {
    return this.firstName + " " + this.lastName;
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Mary",
    lastName: "Jane"
}
console.log(fullName());
// const person1Name = fullName.call(person1);
// console.log(person1Name);

 const person2Name = fullName.call(person2);
console.log(person2Name);


