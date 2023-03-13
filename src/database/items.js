export const COLOURS= {
   white:'#ffffff',
   black:'#000000',
   lightGrey:'#B3B4B6',
   accent:'#FFC231',
   accentRed:'#FB5D2E',
   accenrPink:'#F96165'
  
}

export const Categories = [
    {
        name: 'Burger',
        image: require('./images/burger.jpeg'),
        items:[
          {
            name: 'Cheese Burger',
            weight: 120,
            rating: '5.0',
            price:'199',
            isTopOfTheWeek: true,
            image: require('./images/Burger/cheeseburger.jpeg'),
            size:'Large 8',
            crust:'Thick Crust',
            delivery:'25',
            ingredients: [
                require('./images/flour.jpeg'),
                require('./images/onions.jpeg'),
                require('./images/tomatoes.jpeg'),
                require('./images/cheese.jpeg'),
            ]
          
          },

          {
            name: 'Bacon n Cheese',
            weight: 150,
            rating: '4.5',
            price:'100',
            isTopOfTheWeek: false,
            image: require('./images/Burger/baconcheese.jpeg'),
            size:'Large 12',
            crust:'Thick Crust',
            delivery:'20',
            ingredients: [
                require('./images/onions.jpeg'),
                require('./images/tomatoes.jpeg'),
                require('./images/flour.jpeg'),
                require('./images/cheese.jpeg'),
            ]
            
         },
         {
            name: 'Double Kingsize',
            weight: 250,
            rating: '4.2',
            price:'299',
            isTopOfTheWeek: false,
            image: require('./images/Burger/double-kingsize.jpeg'),
            size:'Large 10',
            crust:'Thick Crust',
            delivery:'35',
            ingredients: [
                require('./images/flour.jpeg'),
                require('./images/cheese.jpeg'),
                require('./images/onions.jpeg'),
                require('./images/tomatoes.jpeg'),
            ]
            
          },
       ]  
          
    },
  
    {
        name:'Pizza',
        image:require('./images/pizza.jpeg'),
        items:[
          {
            name: 'Pepperoni Pizza',
            weight: 250,
            rating: '5.0',
            price:'199',
            isTopOfTheWeek: true,
            image: require('./images/Pizza/Pepperoni.jpg'),
            size:'Large 14',
            crust:'Thin Crust',
            delivery:'30',
            ingredients: [
                require('./images/tomatoes.jpeg'),
                require('./images/flour.jpeg'),
                require('./images/onions.jpeg'),
                require('./images/cheese.jpeg'),
            ]
        },

        {
            name: 'Chicken Hawaiian',
            weight: 300,
            rating: '4.5',
            price:'299',
            isTopOfTheWeek: false,
            image: require('./images/Pizza/mushroom.jpeg'),
            size:'Large 16',
            crust:'Thin Cheese',
            delivery:'25',
            ingredients: [
                require('./images/onions.jpeg'),
                require('./images/flour.jpeg'),
                require('./images/cheese.jpeg'),
                require('./images/tomatoes.jpeg'),
            ]
            
        },

        {
            name: 'Veg Feast',
            weight: 350,
            rating: '4.2',
            price:'499',
            isTopOfTheWeek: false,
            image: require('./images/Pizza/Veggetable.jpeg'),
            size:'Large 15',
            crust:'Thin Crust',
            delivery:'45',
            ingredients: [
                require('./images/flour.jpeg'),
                require('./images/cheese.jpeg'),
                require('./images/tomatoes.jpeg'),
                require('./images/onions.jpeg'),
            ]
            
        },
      ]  
        
    },

    {
        name: 'Soft Drinks',
        image:require('./images/SoftDrinks/soft.jpeg'),
        items:[
           {
            name: 'Coca Cola',
            weight: 200,
            rating: '5.0',
            price:'299',
            isTopOfTheWeek: true,
            image: require('./images/SoftDrinks/soda.jpeg'),
            size:'Medium Glass',
            crust:'Small Ice',
            delivery:'10',
            ingredients: [
                require('./images/SoftDrinks/soda.jpeg'),
               
            ]
                   
           },

          {
            name: 'Mango Juice',
            weight: 150,
            rating: '4.2',
            price:'99',
            isTopOfTheWeek: false,
            image: require('./images/mango.jpeg'),
            size:'Large Glass',
            crust:'Small Ice',
            delivery:'5',
            ingredients: [
                require('./images/mango.jpeg'),
            ]
          },
          
          {

            name: 'Orange juice',
            weight: 500,
            rating: '4.5',
            price:'199',
            isTopOfTheWeek: false,
            image: require('./images/SoftDrinks/orangejuice.jpeg'),
            size:'Large Glass',
           crust:'Large Ice',
           delivery:'8',
           ingredients: [
              require('./images/SoftDrinks/orangejuice.jpeg'),
              
          ] 
        }


        ]
    }

   

]