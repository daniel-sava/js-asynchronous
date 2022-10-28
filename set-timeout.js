setTimeout(() => {
    console.log('setTimeout 4 secunde mai tarziu');
}, 4000);

console.log('Exemple cu setTimeout!');

for (let index = 0; index < 100; index++) {
    console.log(index);
}

setTimeout(() => {
    console.log('setTimeout in 0 ms');
}, 0);

console.log('Mesaj dupa setTimeout de 0 ms');
