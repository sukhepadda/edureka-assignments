const ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
];

// a
const groupedData = ratingData.reduce((acc, curr) => {
    if (!acc[curr.restaurant]) {
        acc[curr.restaurant] = {
            restaurant: curr.restaurant,
            ratings: [],
        };
    }
    acc[curr.restaurant].ratings.push(curr.rating);
    return acc;
}, {});

const avgRating = Object.values(groupedData).map(restaurant => {
    return {
        restaurant: restaurant.restaurant,
        averageRating: (restaurant.ratings.reduce((a, b) => a + b, 0) / restaurant.ratings.length).toFixed(1),
    }
});
console.log(avgRating);


// b
const highRatedRestaurants = avgRating.filter(restaurant => restaurant.averageRating >= 4);
console.log(highRatedRestaurants);