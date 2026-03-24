const characterNames: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Black Widow', 'Captain America'];
console.log(characterNames);

const [captain, ...others] = characterNames;

console.log({captain});
console.log({others});

const [first] = characterNames;
console.log({first});

const [, , third] = characterNames;
console.log({third});

const returnArrayFn = () => {
    return ['Ironman', 256] as const;
};

const [letters, numbers] = returnArrayFn();
console.log(numbers + 5);

console.log({letters, numbers});

// Homework
const useState = (value: string) => {
    return [value, (newValue: string) => console.log(newValue)] as const;
};

const [state, setState] = useState('Hello');
console.log({state});
setState('Hola');

const [nameGoku, setName] = useState('Goku');
console.log(nameGoku);       // Goku
setName('Vegeta');

