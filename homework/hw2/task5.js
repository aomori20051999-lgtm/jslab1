const users = [
    {
        name: "Александр",
        email: "alexplay14@gmail.com",
        age: 20
    },
    {
        name: "Иван",
        email: "ivanDorn@gmail.com",
        age: 19
    },
    {
        name: "Мария",
        email: "mariape4eneg@gmail.com",
        age: 21
    }
];

for (const { name, email, age } of users) {
    console.log(name, email, age);
}