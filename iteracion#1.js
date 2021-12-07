const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];





    let showRep = (arrayProducts) =>{
        arrayProducts.forEach((product) =>{
            if (product.includes("Camiseta"))
            console.log(product)
        }) 
    }

    showRep(products)