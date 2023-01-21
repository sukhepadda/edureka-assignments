//first question

class RestaurantManager {
    constructor() {
        this.restaurantList = [];
    }
    // below function is created for adding the data in restaurantList array
    addRestaurant(name, address, city) {
        const newRestaurant = {name: name, address: address, city: city};
        this.restaurantList.push(newRestaurant);
    }

    // below function is for print all restaurant names in restaurantList
    printAllRestaurantNames() {
        for (let i = 0; i < this.restaurantList.length; i++) {
            console.log(this.restaurantList[i].name);
        }
    }
    
    // below function is for filter the restaurant name as per the city
    filterRestaurantByCity(city) {
        return this.restaurantList.filter(restaurant => restaurant.city === city);
      }
}

// creating object
const manager = new RestaurantManager();

// adding the restaurant details by using addRestaurant() function
manager.addRestaurant("Tasty Treats", "123 Main St", "Anytown");
manager.addRestaurant("Delicious Eats", "456 Park Ave", "Anycity");
manager.addRestaurant("Eatary", "Ave", "Anycity");
manager.addRestaurant("Eagary Foods", "Ave", "Anycity");
manager.addRestaurant("Dinners", "Ave", "Anycigty");
manager.addRestaurant("Hungry Haus", "Ave", "Anycigty");
manager.addRestaurant("Haunted Eats", "Ave", "Agnycity");
manager.addRestaurant("Punjabi Tadka", "Ave", "Anygcity");
manager.addRestaurant("Viki da Dhaba", "Ave", "Anygcity");

// calling restaurants names function
console.log('.........Here are the all restaurant names:.........' );
manager.printAllRestaurantNames();

// calling filter restaurant city function with argument of city
// that you want to see how many restaurant available in the given city
// and accesing the output using map and consoling the name of restaurant
// that located in given city... 
console.log('.........The restaurant names in given city are:.........');
manager.filterRestaurantByCity('Anycity').map(filterone => {// give any city name from available data in argument 
    console.log(filterone.name)
})







//2nd Question
const orderData = { 'Below 500': 20, '500-1000': 29, '1000-1500': 30, '1500-2000': 44, 'Above 2000': 76 };

// a.
let totalOrders = 0;
for (const order in orderData) {
    totalOrders += orderData[order];
}
console.log(`Total number of orders placed = ${totalOrders}`);

// b.
const totalProportions = Object.keys(orderData).length;
console.log(`Total number of order proportions = ${totalProportions}`);

// c.
const proportionArray = [];
let count = 1;
for (const order in orderData) {
    const proportion = (orderData[order] / totalOrders) * 100;
    proportionArray.push({ id: count, order: order, orderpercentage: proportion.toFixed(2), restaurant: "Punjabi Tadka" });
    count++;
}
console.log(proportionArray);

