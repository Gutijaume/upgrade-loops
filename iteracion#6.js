const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];



let catToys = (data) => {
  let filtered = data.filter((toy) => toy.name.includes("gato"));
  console.log(filtered);
};

catToys(toys);


for (let value of toys){
  if(value.name.includes("gato")){
    
  }
} 
