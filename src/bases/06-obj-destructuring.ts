const person = {
    firstName: 'Ironman',
    age: 20,
    country: 'Mexico',
    key: 'Ironman-1234567890',
}

const { firstName, age, country } = person;
console.log(firstName, age, country);
console.log(person);

interface Hero {
    firstName: string,
    age: number,
    country: string,
    key: string,
    rank?: string
}

const useContext = ({firstName, age, country, key, rank}: Hero) => {
    return {
        keyName: key,
        user: {
            firstName,
            age,
            country,
        },
        rank
    }
}

const context = useContext(person);

console.log(context);

const { keyName, user: { firstName: userName, age: userAge, country: userCountry }, rank = 'without rank' } = context;
console.log(keyName, userName, userAge, userCountry, rank);

