const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


let print = (data) => console.log(data)

let isAproved = (arrayAlumns) =>{
    arrayAlumns.forEach((alumn) =>{
        if (alumn.T1 === true)
        return (result)
    }) 

alumns.forEach((alumn)=>{
   isAproved (alumns, alumn.name)
})

isAproved(alumns, "Pepe Viruela")

}

let notaFinal = (isAproved + "is aproved")
print (notaFinal)