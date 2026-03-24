function sum(a: number, b: number): number {
    return a + b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

console.log(sum(1, 2));
console.log(multiply(2, 3));

function greet(name: string): string {
    return `Hello ${name}`;
}

const message = greet('Goku');

console.log(message);

const greet2 = (name: string): string => `Hello ${name}`;
console.log(greet2('Vegueta'));

function getUser(): { id: number, name: string } {
    return {
        id: 1,
        name: 'Juan'
    };
}

const getUser2 = (): { id: number, name: string } => ({
    id: 2,
    name: 'jose'
});

console.log(getUser(), getUser2());
