const mongoose = require("mongoose");
require("dotenv").config();
const Recipe = require("./models/Recipe")

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("MongoDB connected");

        // clear old recipes
        await Recipe.deleteMany({});

        // insert recipes
        await Recipe.insertMany([
            // SWEET
            { title: "Poha Sweet", description: "Sweet Poha", image: "https://media.istockphoto.com/id/670526200/photo/poha-indian-snacks.jpg", ingredients: ["Rice", "Sugar", "Milk"], steps: ["Cook rice", "Add sugar & milk", "Serve"], cookTime: "<10 mins", foodType: "Grain", cookedType: "Fire Cooked", taste: "Sweet" },
            { title: "Fruit Salad Sweet", description: "Honey Fruit Salad", image: "https://t3.ftcdn.net/jpg/03/15/42/85/360_F_315428580_8uRldqkt45z6TRnL1cDkWkjkVQFvFM1N.jpg", ingredients: ["Apple", "Banana", "Honey"], steps: ["Chop fruits", "Add honey", "Serve"], cookTime: "<10 mins", foodType: "Fruit", cookedType: "Without Fire", taste: "Sweet" },
            { title: "Sweet Pancakes", description: "Yummy Pancakes", image: "https://t3.ftcdn.net/jpg/04/85/02/12/360_F_485021279_YxltlJU2G3nQztb1ee2u5J9d5jPAOV7b.jpg", ingredients: ["Flour", "Milk", "Sugar"], steps: ["Mix", "Cook on pan", "Serve"], cookTime: "10-30 mins", foodType: "Grain", cookedType: "Fire Cooked", taste: "Sweet" },
            { title: "Sweet Lassi", description: "Refreshing Sweet Lassi", image: "https://t3.ftcdn.net/jpg/05/47/60/56/360_F_547605637_szz9b6DpVx9x2uR5DEtFYTPZk8uzG3A3.jpg", ingredients: ["Yogurt", "Sugar", "Cardamom"], steps: ["Blend yogurt & sugar", "Add cardamom", "Serve chilled"], cookTime: "10-30 mins", foodType: "Dairy", cookedType: "Without Fire", taste: "Sweet" },
            { title: "Gajar Halwa", description: "Carrot dessert", image: "", ingredients: ["Carrot", "Milk", "Sugar"], steps: ["Grate carrots", "Cook with milk", "Add sugar & serve"], cookTime: "30-50 mins", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Sweet" },
            { title: "Rice Kheer", description: "Sweet rice pudding", image: "", ingredients: ["Rice", "Milk", "Sugar"], steps: ["Cook rice in milk", "Add sugar & serve"], cookTime: "30-50 mins", foodType: "Grain", cookedType: "Fire Cooked", taste: "Sweet" },
            { title: "Sweet Smoothie", description: "Fruit Smoothie", image: "", ingredients: ["Banana", "Milk", "Honey"], steps: ["Blend all ingredients", "Serve chilled"], cookTime: ">1 hr", foodType: "Fruit", cookedType: "Without Fire", taste: "Sweet" },
            { title: "Sweet Pie", description: "Vegetable Sweet Pie", image: "", ingredients: ["Pumpkin", "Flour", "Sugar"], steps: ["Prepare crust", "Fill with pumpkin mix", "Bake & serve"], cookTime: ">1 hr", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Sweet" },

            // SALTY
            { title: "Chana Chaat", description: "Spiced chickpeas", image: "", ingredients: ["Chana", "Onion", "Tomato"], steps: ["Boil chana", "Mix veggies", "Add spices"], cookTime: "<10 mins", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Salty" },
            { title: "Masala Corn", description: "Spiced corn", image: "", ingredients: ["Corn", "Butter", "Salt"], steps: ["Boil corn", "Add spices", "Serve"], cookTime: "<10 mins", foodType: "Vegetable", cookedType: "Without Fire", taste: "Salty" },
            { title: "Salted Veg Sandwich", description: "Quick sandwich", image: "", ingredients: ["Bread", "Tomato", "Lettuce", "Salt"], steps: ["Assemble veggies in bread", "Add salt", "Serve"], cookTime: "10-30 mins", foodType: "Grain", cookedType: "Without Fire", taste: "Salty" },
            { title: "Paneer Tikka Salty", description: "Grilled paneer", image: "", ingredients: ["Paneer", "Salt", "Spices"], steps: ["Marinate paneer", "Grill", "Serve"], cookTime: "10-30 mins", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Salty" },
            { title: "Veg Cutlet", description: "Crispy cutlet", image: "", ingredients: ["Potato", "Carrot", "Salt"], steps: ["Mash veggies", "Shape cutlets", "Fry & serve"], cookTime: "30-50 mins", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Salty" },
            { title: "Cheese Toast", description: "Grilled cheese", image: "", ingredients: ["Bread", "Cheese", "Salt"], steps: ["Place cheese in bread", "Grill", "Serve"], cookTime: "30-50 mins", foodType: "Dairy", cookedType: "Without Fire", taste: "Salty" },
            { title: "Veg Burger", description: "Quick burger", image: "", ingredients: ["Bun", "Veg Patty", "Lettuce", "Salt"], steps: ["Assemble burger", "Serve"], cookTime: ">1 hr", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Salty" },
            { title: "Salted Soup", description: "Veg soup", image: "", ingredients: ["Carrot", "Tomato", "Salt"], steps: ["Boil veggies", "Blend", "Serve"], cookTime: ">1 hr", foodType: "Vegetable", cookedType: "Without Fire", taste: "Salty" },

            // SPICY
            { title: "Paneer Tikka Spicy", description: "Hot paneer cubes", image: "", ingredients: ["Paneer", "Chili powder", "Spices"], steps: ["Marinate", "Grill", "Serve"], cookTime: "<10 mins", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Spicy" },
            { title: "Spicy Tomato Soup", description: "Hot soup", image: "", ingredients: ["Tomato", "Chili", "Salt"], steps: ["Boil", "Blend", "Simmer & serve"], cookTime: "<10 mins", foodType: "Vegetable", cookedType: "Without Fire", taste: "Spicy" },
            { title: "Veg Chili", description: "Hot chili", image: "", ingredients: ["Beans", "Chili powder", "Salt"], steps: ["Cook beans", "Add spices", "Serve"], cookTime: "10-30 mins", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Spicy" },
            { title: "Spicy Corn Salad", description: "Corn salad with chili", image: "", ingredients: ["Corn", "Chili powder", "Salt"], steps: ["Mix corn & spices", "Serve"], cookTime: "10-30 mins", foodType: "Vegetable", cookedType: "Without Fire", taste: "Spicy" },
            { title: "Spicy Veg Curry", description: "Hot curry", image: "", ingredients: ["Potato", "Carrot", "Chili powder"], steps: ["Cook veggies", "Add spices", "Serve"], cookTime: "30-50 mins", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Spicy" },
            { title: "Hot Pepper Soup", description: "Spicy soup", image: "", ingredients: ["Pepper", "Salt", "Veggies"], steps: ["Boil veggies", "Add pepper", "Serve"], cookTime: "30-50 mins", foodType: "Vegetable", cookedType: "Without Fire", taste: "Spicy" },
            { title: "Spicy Stir Fry", description: "Veg stir fry", image: "", ingredients: ["Broccoli", "Chili sauce"], steps: ["Stir fry veggies", "Add chili sauce", "Serve"], cookTime: ">1 hr", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Spicy" },
            { title: "Spicy Grilled Veg", description: "Hot grilled veggies", image: "", ingredients: ["Capsicum", "Chili powder"], steps: ["Grill veggies", "Serve"], cookTime: ">1 hr", foodType: "Vegetable", cookedType: "Without Fire", taste: "Spicy" },

            // SOUR
            { title: "Lemon Rice Sour", description: "Tangy rice", image: "", ingredients: ["Rice", "Lemon juice", "Salt"], steps: ["Cook rice", "Add lemon juice", "Serve"], cookTime: "<10 mins", foodType: "Grain", cookedType: "Fire Cooked", taste: "Sour" },
            { title: "Sour Yogurt Salad", description: "Tangy salad", image: "", ingredients: ["Yogurt", "Lemon", "Salt"], steps: ["Mix yogurt & lemon", "Serve"], cookTime: "<10 mins", foodType: "Dairy", cookedType: "Without Fire", taste: "Sour" },
            { title: "Tamarind Curry", description: "Tangy curry", image: "", ingredients: ["Tamarind", "Veggies"], steps: ["Cook veggies with tamarind", "Serve"], cookTime: "10-30 mins", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Sour" },
            { title: "Sour Stir Fry", description: "Tangy stir fry", image: "", ingredients: ["Broccoli", "Lemon"], steps: ["Stir fry & add lemon", "Serve"], cookTime: "10-30 mins", foodType: "Vegetable", cookedType: "Without Fire", taste: "Sour" },
            { title: "Sour Soup", description: "Tangy soup", image: "", ingredients: ["Tomato", "Tamarind"], steps: ["Boil & blend", "Serve"], cookTime: "30-50 mins", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Sour" },
            { title: "Tamarind Salad", description: "Tangy salad", image: "", ingredients: ["Tamarind", "Carrot"], steps: ["Mix & serve"], cookTime: "30-50 mins", foodType: "Vegetable", cookedType: "Without Fire", taste: "Sour" },
            { title: "Sour Pie", description: "Tangy vegetable pie", image: "", ingredients: ["Pumpkin", "Tamarind"], steps: ["Prepare crust", "Fill", "Bake"], cookTime: ">1 hr", foodType: "Vegetable", cookedType: "Fire Cooked", taste: "Sour" },
            { title: "Sour Smoothie", description: "Tangy smoothie", image: "", ingredients: ["Lemon", "Banana"], steps: ["Blend & serve"], cookTime: ">1 hr", foodType: "Fruit", cookedType: "Without Fire", taste: "Sour" },
        ]);
        console.log("Recipes seeded");
        mongoose.connection.close();
    })

    .catch(err => console.log(err));
    