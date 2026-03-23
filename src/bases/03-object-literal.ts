interface Person {
    firstName: string;
    lastName: string;
    age: number;
    country: string;
    address: Address;
}

interface Address {
    street: string;
    city: string;
}

const ironman: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    country: 'MX',
    address: {
        street: 'Street 123',
        city: 'Mexico City',
    }
};

console.log(ironman);

const spiderman: Person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 20,
    country: 'US',
    address: {
        street: 'Wall Street',
        city: 'New York',
    }
}

console.log(spiderman);
/**
 * ironman.name = 'Juan';
 * ironman.lastName = 'Perez';
 *
 * // const Spider-Man = {...Iron Man};
 * const Spider-Man = structuredClone(Iron Man);
 *
 * Spider-Man.name = 'Spider-Man';
 * spiderman.address.street = 'Street 456';
 * console.log(ironman, spiderman);
 */