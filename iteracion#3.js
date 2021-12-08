const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']




let cities = placesToTravel.join(" , ")

let listOfCities = (data) => {
    for(let value of data){
        value.placesToTravel
    }
    console.log(data)
}

listOfCities(cities)


