const alien = { name: 'Wormuck',
race: 'Cucusumusu',
planet: 'Eden',
weight: '259kg'};

let showData = (data) => {
    for (let prop in data){
        console.log(`${prop}: ${data[prop[1]]}`)
    }
}

showData(alien)

