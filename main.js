// const person = [{
//     Firstname: "Abdallah",
//     Lastname: "Abdourahman",
//     Location: "Jalan Taylors",
//     Building: "Dlatour",
//     grade: 23000
// },
// {
//     Firstname: "Fahmi",
//     Lastname: "Abdallah",
//     Location: "KlCC",
//     Building: "SOMALIA",
//     grade: 201
// },
// {
//     Firstname: "Hanan",
//     Lastname: "Abdi",
//     Location: "Subang Jaya",
//     Building: "Dlatour",
//     grade: 2112
// }];


// const names = person.map(person => {
//     return person.Firstname + " " + person.Lastname
// })

// console.log(names)

// const location = person.filter(person => {
//     return person.Building == 'Dlatour'
// }).map(person =>{
//     return person.Firstname
// })

// console.log(location)

// const tootalGrade = person.reduce((total, person) => {
//     return total + person.grade
// }, 0)

// console.log(tootalGrade)

async function loadData() {
    const response = await fetch('https://ronreiter-meme-generator.p.rapidapi.com/meme')
    console.log(response)
}
loadData()