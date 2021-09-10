import Person from "./interfaces";

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

const sm = getFullName(john)
console.log(sm);
