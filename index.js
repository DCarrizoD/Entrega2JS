const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    },
  
    {
      id: 3,
      nombre: "pizza Napolitana",
      precio: 1350,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
    },
  
    {
      id: 5,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    },
  
    {
      id: 6,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
    },
  ];
  
  console.log(pizzas);
  
  /* a)  Las pizzas que tengan un id impar.
   */
  console.log('\nA - PIZZAS IMPARES:');
  pizzas.forEach(pizza =>{
    if (pizza.id % 2 != 0){
        console.log("   - " + pizza.nombre.toUpperCase());
    }


  })
  

  /* b) Responder: ¿Hay alguna pizza que valga menos de $600? */
    
  console.log('\nB - PIZZAS CON PRECIO MENOR A $ 600');
  const menosde600 = pizzas.filter((pizza) => (pizza.precio < 600));
  menosde600.forEach(filtrada => {
    console.log(`\n   - ${filtrada.nombre}`);
  });
  

  /*c) El nombre de cada pizza con su respectivo precio. */
  console.log("\nC - LISTADO DE PIZZAS CON SU PRECIO:");
  pizzas.forEach(pizza => {
    console.log(`\n   - ${pizza.nombre}, precio: $ ${pizza.precio}`);
    
  });
  
  
  /* 
  d) Todos los ingredientes de cada pizza (En cada iteración imprimir 
    los ingredientes de la pizza que se esta recorriendo). 
  
  
    Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array
   de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes. */
  
   console.log("\nD - INGREDIENTES DE CADA PIZZA:");
  pizzas.forEach(pizza => {
    console.log(`\n   * ${pizza.nombre.toUpperCase()}:`);
    pizza.ingredientes.forEach(ingrediente => console.log(`      - ${ingrediente}`));
  });
  