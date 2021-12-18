const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

let eliminator = (data) => {
    
  for (let i = 0; i < data.length; i++) {
    if (data[i].id !== 11 && data[i].id !== 40) {
      console.log(data[i])
    }
  } 
};

eliminator(placesToTravel)







