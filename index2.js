function Person(name, dob) {
    this.name = name;
    this.dateOfBirth = dob;
}

const person1 = {
    nationality: "US"
};

console.log(person1);

const person2 = {
    nationality: "Canadian"
};

Person.call(person2, "Mark", "12/5/1999");

console.log(person2);


function Student(name, dob, nationality) {
    Person.call(this, name, dob);
    this.nationality = nationality;

}
const mike = new Student("Ron","12/6/1999","Colombian");
console.log(mike);



