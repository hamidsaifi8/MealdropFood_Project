const FoodData = {
  "categories": [
    { "id": "c1", "name": "Pizza", "image": "pizza.jpg" },
    { "id": "c2", "name": "Burgers", "image": "burger.jpg" },
    { "id": "c3", "name": "Biryani", "image": "biryani.jpg" },
    { "id": "c4", "name": "Chinese", "image": "chinese.jpg" },
    { "id": "c5", "name": "North Indian", "image": "northindian.jpg" },
    { "id": "c6", "name": "South Indian", "image": "southindian.jpg" },
    { "id": "c7", "name": "Desserts", "image": "dessert.jpg" },
    { "id": "c8", "name": "Street Food", "image": "streetfood.jpg" },
    { "id": "c9", "name": "Healthy", "image": "healthy.jpg" },
    { "id": "c10", "name": "Drinks", "image": "drinks.jpg" }
  ],

  "restaurants": [
    {
      "id": "r1",
      "name": "Spice Villa",
      "image": "restaurant1.jpg",
      "rating": 4.5,
      "deliveryTime": 30,
      "priceForTwo": 500,
      "cuisines": ["North Indian"],
      "location": "Connaught Place",
      "offer": "20% OFF up to ₹100"
    },
    {
      "id": "r2",
      "name": "Pizza Italiano",
      "image": "restaurant2.jpg",
      "rating": 4.3,
      "deliveryTime": 25,
      "priceForTwo": 600,
      "cuisines": ["Pizza"],
      "location": "Karol Bagh",
      "offer": "Free Delivery"
    },
    {
      "id": "r3",
      "name": "Burger Town",
      "image": "restaurant3.jpg",
      "rating": 4.1,
      "deliveryTime": 20,
      "priceForTwo": 350,
      "cuisines": ["Fast Food"],
      "location": "Rajouri Garden"
    },
    {
      "id": "r4",
      "name": "Biryani House",
      "image": "restaurant4.jpg",
      "rating": 4.6,
      "deliveryTime": 35,
      "priceForTwo": 550,
      "cuisines": ["Biryani"],
      "location": "Lajpat Nagar"
    },
    {
      "id": "r5",
      "name": "Dragon Chinese",
      "image": "restaurant5.jpg",
      "rating": 4.2,
      "deliveryTime": 28,
      "priceForTwo": 450,
      "cuisines": ["Chinese"],
      "location": "Saket"
    },
    {
      "id": "r6",
      "name": "South Dosa Corner",
      "image": "restaurant6.jpg",
      "rating": 4.4,
      "deliveryTime": 22,
      "priceForTwo": 300,
      "cuisines": ["South Indian"],
      "location": "Dwarka"
    },
    {
      "id": "r7",
      "name": "Sweet Cravings",
      "image": "restaurant7.jpg",
      "rating": 4.7,
      "deliveryTime": 18,
      "priceForTwo": 250,
      "cuisines": ["Desserts"],
      "location": "Janakpuri"
    },
    {
      "id": "r8",
      "name": "Delhi Street Bites",
      "image": "restaurant8.jpg",
      "rating": 4.3,
      "deliveryTime": 24,
      "priceForTwo": 200,
      "cuisines": ["Street Food"],
      "location": "Chandni Chowk"
    },
    {
      "id": "r9",
      "name": "Healthy Bowl",
      "image": "restaurant9.jpg",
      "rating": 4.5,
      "deliveryTime": 20,
      "priceForTwo": 400,
      "cuisines": ["Healthy"],
      "location": "Vasant Kunj"
    },
    {
      "id": "r10",
      "name": "Cool Drinks Cafe",
      "image": "restaurant10.jpg",
      "rating": 4.2,
      "deliveryTime": 15,
      "priceForTwo": 180,
      "cuisines": ["Beverages"],
      "location": "Rohini"
    },
    {
      "id": "r11",
      "name": "Tandoori Nights",
      "image": "restaurant11.jpg",
      "rating": 4.6,
      "deliveryTime": 32,
      "priceForTwo": 650,
      "cuisines": ["North Indian"],
      "location": "Punjabi Bagh"
    },
    {
      "id": "r12",
      "name": "Urban Pizza Hub",
      "image": "restaurant12.jpg",
      "rating": 4.1,
      "deliveryTime": 27,
      "priceForTwo": 550,
      "cuisines": ["Pizza"],
      "location": "Pitampura"
    },
    {
      "id": "r13",
      "name": "Burger Factory",
      "image": "restaurant13.jpg",
      "rating": 4.0,
      "deliveryTime": 23,
      "priceForTwo": 320,
      "cuisines": ["Burgers"],
      "location": "Noida Sector 18"
    },
    {
      "id": "r14",
      "name": "Hyderabadi Biryani",
      "image": "restaurant14.jpg",
      "rating": 4.7,
      "deliveryTime": 34,
      "priceForTwo": 600,
      "cuisines": ["Biryani"],
      "location": "Okhla"
    },
    {
      "id": "r15",
      "name": "Green Healthy Kitchen",
      "image": "restaurant15.jpg",
      "rating": 4.4,
      "deliveryTime": 21,
      "priceForTwo": 420,
      "cuisines": ["Healthy"],
      "location": "Greater Kailash"
    }
  ],

  "menuItems": [
    { "id": "m1", "restaurantId": "r1", "categoryId": "c5", "name": "Butter Chicken", "description": "Creamy tomato gravy chicken", "price": 349, "veg": false, "bestseller": true, "rating": 4.7 },
    { "id": "m2", "restaurantId": "r1", "categoryId": "c5", "name": "Paneer Butter Masala", "description": "Paneer cubes in buttery gravy", "price": 289, "veg": true, "bestseller": true, "rating": 4.6 },
    { "id": "m3", "restaurantId": "r1", "categoryId": "c5", "name": "Dal Makhani", "description": "Creamy black lentils", "price": 249, "veg": true, "rating": 4.4 },

    { "id": "m4", "restaurantId": "r2", "categoryId": "c1", "name": "Margherita Pizza", "description": "Classic cheese pizza", "price": 199, "veg": true, "rating": 4.4 },
    { "id": "m5", "restaurantId": "r2", "categoryId": "c1", "name": "Farmhouse Pizza", "description": "Loaded veggie pizza", "price": 299, "veg": true, "bestseller": true, "rating": 4.6 },
    { "id": "m6", "restaurantId": "r2", "categoryId": "c1", "name": "Pepperoni Pizza", "description": "Pepperoni & cheese", "price": 349, "veg": false, "rating": 4.5 },

    { "id": "m7", "restaurantId": "r3", "categoryId": "c2", "name": "Cheese Burger", "description": "Grilled patty with cheese", "price": 149, "veg": true, "rating": 4.2 },
    { "id": "m8", "restaurantId": "r3", "categoryId": "c2", "name": "Chicken Burger", "description": "Crispy chicken burger", "price": 179, "veg": false, "rating": 4.3 },

    { "id": "m9", "restaurantId": "r4", "categoryId": "c3", "name": "Chicken Biryani", "description": "Hyderabadi dum biryani", "price": 249, "veg": false, "bestseller": true, "rating": 4.6 },
    { "id": "m10", "restaurantId": "r4", "categoryId": "c3", "name": "Veg Biryani", "description": "Mixed veg aromatic rice", "price": 199, "veg": true, "rating": 4.4 },

    { "id": "m11", "restaurantId": "r5", "categoryId": "c4", "name": "Hakka Noodles", "description": "Stir fried noodles", "price": 189, "veg": true, "rating": 4.2 },
    { "id": "m12", "restaurantId": "r5", "categoryId": "c4", "name": "Chilli Chicken", "description": "Spicy fried chicken", "price": 229, "veg": false, "rating": 4.5 },

    { "id": "m13", "restaurantId": "r6", "categoryId": "c6", "name": "Masala Dosa", "description": "Crispy dosa with potato filling", "price": 120, "veg": true, "bestseller": true, "rating": 4.5 },
    { "id": "m14", "restaurantId": "r6", "categoryId": "c6", "name": "Idli Sambar", "description": "Steamed rice cakes", "price": 90, "veg": true, "rating": 4.3 },

    { "id": "m15", "restaurantId": "r7", "categoryId": "c7", "name": "Chocolate Cake", "description": "Rich chocolate cake", "price": 150, "veg": true, "rating": 4.7 },
    { "id": "m16", "restaurantId": "r7", "categoryId": "c7", "name": "Brownie", "description": "Chocolate fudge brownie", "price": 120, "veg": true, "rating": 4.6 },

    { "id": "m17", "restaurantId": "r8", "categoryId": "c8", "name": "Pani Puri", "description": "Crispy golgappa", "price": 60, "veg": true, "rating": 4.4 },
    { "id": "m18", "restaurantId": "r8", "categoryId": "c8", "name": "Aloo Tikki", "description": "Crispy potato patty", "price": 80, "veg": true, "rating": 4.3 },

    { "id": "m19", "restaurantId": "r9", "categoryId": "c9", "name": "Quinoa Salad", "description": "Healthy quinoa bowl", "price": 220, "veg": true, "rating": 4.5 },
    { "id": "m20", "restaurantId": "r9", "categoryId": "c9", "name": "Grilled Chicken Bowl", "description": "Protein rich bowl", "price": 260, "veg": false, "rating": 4.6 },

    { "id": "m21", "restaurantId": "r10", "categoryId": "c10", "name": "Cold Coffee", "description": "Chilled coffee with cream", "price": 120, "veg": true, "rating": 4.2 },
    { "id": "m22", "restaurantId": "r10", "categoryId": "c10", "name": "Mango Shake", "description": "Fresh mango drink", "price": 110, "veg": true, "rating": 4.3 }
  ]
};

export default FoodData;