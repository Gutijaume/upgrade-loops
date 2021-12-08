const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

// let cities = placesToTravel.join(" , ")

// let listOfCities = (data) => {
//     for(let value of data){
//         value.placesToTravel
//     }
//     console.log(data[0])
// }

// listOfCities(cities)



let listOfCities = (data) => {
    for(let value of data){
        value.placesToTravel
    }
    console.log(data[2])
}

listOfCities(placesToTravel)




