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
            {
                "title": "Vegan Banana Smoothie",
                "description": "A quick and sweet banana smoothie made without any fire.",
                "image": "banana_smoothie.jpg",
                "ingredients": ["2 bananas", "1 cup almond milk", "1 tsp maple syrup"],
                "steps": [
                    "Peel and slice bananas.",
                    "Add bananas and almond milk to a blender.",
                    "Blend until smooth and add maple syrup.",
                    "Serve chilled."
                ],
                "cookTime": "<10mins",
                "foodType": "Fruit",
                "cookedType": "Without Fire",
                "taste": "Sweet"
            },
            {
                "title": "Baked Sweet Potato",
                "description": "Sweet and soft baked sweet potato, perfect as a fire-cooked snack.",
                "image": "baked_sweet_potato.jpg",
                "ingredients": ["2 sweet potatoes", "1 tsp olive oil", "Pinch of salt"],
                "steps": [
                    "Preheat oven to 200°C.",
                    "Wash sweet potatoes and rub with olive oil and salt.",
                    "Bake for 40 minutes until soft.",
                    "Serve warm."
                ],
                "cookTime": "30-50mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Sweet"
            },
            {
                "title": "Fruit Salad with Honey",
                "description": "A fresh and sweet fruit salad, made quickly without cooking.",
                "image": "fruit_salad.jpg",
                "ingredients": ["1 apple", "1 orange", "1 cup grapes", "1 tsp honey"],
                "steps": [
                    "Chop all fruits into bite-sized pieces.",
                    "Mix fruits in a bowl and drizzle with honey.",
                    "Serve immediately."
                ],
                "cookTime": "<10mins",
                "foodType": "Fruit",
                "cookedType": "Without Fire",
                "taste": "Sweet"
            },
            {
                "title": "Vegan Oatmeal Porridge",
                "description": "Creamy sweet oatmeal porridge cooked over fire.",
                "image": "oatmeal_porridge.jpg",
                "ingredients": ["1 cup oats", "2 cups almond milk", "1 tbsp maple syrup"],
                "steps": [
                    "Boil almond milk in a pot.",
                    "Add oats and cook for 5-7 minutes.",
                    "Stir in maple syrup and serve warm."
                ],
                "cookTime": "10-30mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Sweet"
            },
            {
                "title": "Chilled Rice Pudding",
                "description": "Sweet rice pudding made without fire, chilled for dessert.",
                "image": "rice_pudding.jpg",
                "ingredients": ["1 cup cooked rice", "1 cup almond milk", "2 tsp sugar", "1 tsp vanilla extract"],
                "steps": [
                    "Mix cooked rice with almond milk, sugar, and vanilla.",
                    "Refrigerate for at least 1 hour.",
                    "Serve cold."
                ],
                "cookTime": "<10mins",
                "foodType": "Grain",
                "cookedType": "Without Fire",
                "taste": "Sweet"
            },
            {
                "title": "Baked Apple with Cinnamon",
                "description": "A sweet baked apple dessert, fire-cooked for 30-50 minutes.",
                "image": "baked_apple.jpg",
                "ingredients": ["2 apples", "1 tsp cinnamon", "1 tsp honey"],
                "steps": [
                    "Preheat oven to 180°C.",
                    "Core apples and sprinkle cinnamon and honey inside.",
                    "Bake for 35 minutes.",
                    "Serve warm."
                ],
                "cookTime": "30-50mins",
                "foodType": "Fruit",
                "cookedType": "Fire Cooked",
                "taste": "Sweet"
            },
            {
                "title": "Vegan Smoothie Bowl",
                "description": "A sweet, chilled smoothie bowl made without fire, topped with fruits.",
                "image": "smoothie_bowl.jpg",
                "ingredients": ["1 banana", "1/2 cup strawberries", "1/2 cup almond milk", "1 tsp chia seeds"],
                "steps": [
                    "Blend banana, strawberries, and almond milk.",
                    "Pour into a bowl and sprinkle chia seeds on top.",
                    "Serve immediately."
                ],
                "cookTime": "<10mins",
                "foodType": "Fruit",
                "cookedType": "Without Fire",
                "taste": "Sweet"
            },
            {
                "title": "Carrot Halwa",
                "description": "Sweet carrot dessert, fire-cooked for over 1 hour.",
                "image": "carrot_halwa.jpg",
                "ingredients": ["4 carrots", "1 cup almond milk", "2 tbsp sugar", "1 tsp cardamom"],
                "steps": [
                    "Grate carrots and cook with almond milk over medium heat.",
                    "Add sugar and cardamom, stir until thick and soft.",
                    "Serve warm."
                ],
                "cookTime": ">1hr",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Sweet"
            },
            {
                "title": "Vegan Yogurt Parfait",
                "description": "A quick, sweet vegan parfait made without cooking.",
                "image": "yogurt_parfait.jpg",
                "ingredients": ["1 cup vegan yogurt", "1/2 cup granola", "1/2 cup mixed berries", "1 tsp maple syrup"],
                "steps": [
                    "Layer vegan yogurt, granola, and berries in a glass.",
                    "Drizzle with maple syrup.",
                    "Serve immediately."
                ],
                "cookTime": "<10mins",
                "foodType": "Dairy",
                "cookedType": "Without Fire",
                "taste": "Sweet"
            },
            {
                "title": "Baked Vegan Cheesecake",
                "description": "Sweet vegan cheesecake, fire-cooked for 1 hour.",
                "image": "vegan_cheesecake.jpg",
                "ingredients": ["1 cup vegan cream cheese", "1/2 cup sugar", "1 cup biscuit crust", "1 tsp vanilla extract"],
                "steps": [
                    "Preheat oven to 180°C.",
                    "Mix vegan cream cheese, sugar, and vanilla.",
                    "Pour over biscuit crust and bake for 1 hour.",
                    "Serve cooled."
                ],
                "cookTime": ">1hr",
                "foodType": "Dairy",
                "cookedType": "Fire Cooked",
                "taste": "Sweet"
            },
            // SALTY (cover all cookTime + foodType + cookedType)
            {
                "title": "Cucumber Sandwich",
                "description": "A quick and salty cucumber sandwich made without fire.",
                "image": "cucumber_sandwich.jpg",
                "ingredients": ["2 slices whole grain bread", "1 cucumber", "Pinch of salt", "1 tsp vegan butter"],
                "steps": [
                    "Spread vegan butter on bread slices.",
                    "Slice cucumber thinly and place on bread.",
                    "Sprinkle a little salt and close the sandwich.",
                    "Serve fresh."
                ],
                "cookTime": "<10mins",
                "foodType": "Vegetable",
                "cookedType": "Without Fire",
                "taste": "Salty"
            },
            {
                "title": "Vegan Fried Rice",
                "description": "Salty fried rice with vegetables, fire-cooked in under 30 minutes.",
                "image": "fried_rice.jpg",
                "ingredients": ["2 cups cooked rice", "1 carrot", "1/2 cup beans", "1 tbsp soy sauce", "1 tsp oil"],
                "steps": [
                    "Heat oil in a pan and sauté chopped carrots and beans.",
                    "Add cooked rice and soy sauce.",
                    "Mix well and cook for 5 minutes.",
                    "Serve hot."
                ],
                "cookTime": "10-30mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Salty"
            },
            {
                "title": "Stuffed Bell Peppers",
                "description": "Fire-cooked bell peppers stuffed with a salty rice and spice mix.",
                "image": "stuffed_bell_peppers.jpg",
                "ingredients": ["4 bell peppers", "1 cup cooked rice", "1 onion", "1 tsp cumin", "Salt to taste"],
                "steps": [
                    "Cut tops off bell peppers and remove seeds.",
                    "Mix rice, onion, cumin, and salt.",
                    "Stuff peppers with the mixture.",
                    "Bake at 180°C for 40 minutes."
                ],
                "cookTime": "30-50mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Salty"
            },
            {
                "title": "Olive Salad",
                "description": "A salty olive and tomato salad made without fire.",
                "image": "olive_salad.jpg",
                "ingredients": ["1 cup olives", "1 tomato", "1 cucumber", "Pinch of salt", "1 tsp olive oil"],
                "steps": [
                    "Chop tomato and cucumber.",
                    "Mix with olives and drizzle with olive oil.",
                    "Sprinkle a little salt.",
                    "Serve chilled."
                ],
                "cookTime": "<10mins",
                "foodType": "Fruit",
                "cookedType": "Without Fire",
                "taste": "Salty"
            },
            {
                "title": "Vegan Paneer Bhurji",
                "description": "A salty vegan paneer-style scramble, fire-cooked for 20 minutes.",
                "image": "paneer_bhurji.jpg",
                "ingredients": ["1 block tofu", "1 onion", "1 tomato", "1 tsp turmeric", "Salt to taste"],
                "steps": [
                    "Crumble tofu and set aside.",
                    "Sauté onions and tomatoes in a pan.",
                    "Add tofu, turmeric, and salt.",
                    "Cook for 10 minutes and serve hot."
                ],
                "cookTime": "10-30mins",
                "foodType": "Dairy",
                "cookedType": "Fire Cooked",
                "taste": "Salty"
            },
            {
                "title": "Vegan Cheese Crackers",
                "description": "Crispy salty vegan crackers, baked in under 1 hour.",
                "image": "vegan_crackers.jpg",
                "ingredients": ["1 cup whole wheat flour", "2 tbsp vegan cheese", "1 tsp salt", "2 tbsp olive oil"],
                "steps": [
                    "Mix flour, vegan cheese, salt, and oil into dough.",
                    "Roll thin and cut into cracker shapes.",
                    "Bake at 180°C for 20 minutes.",
                    "Cool and serve."
                ],
                "cookTime": "30-50mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Salty"
            },
            {
                "title": "Roasted Potato Wedges",
                "description": "Salty roasted potato wedges with herbs, fire-cooked for 40 minutes.",
                "image": "potato_wedges.jpg",
                "ingredients": ["3 potatoes", "1 tsp olive oil", "1 tsp rosemary", "Salt to taste"],
                "steps": [
                    "Cut potatoes into wedges.",
                    "Toss with olive oil, rosemary, and salt.",
                    "Bake at 200°C for 40 minutes.",
                    "Serve hot."
                ],
                "cookTime": "30-50mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Salty"
            },
            {
                "title": "Vegan Yogurt Dip",
                "description": "A quick salty dip made with vegan yogurt and spices, no fire needed.",
                "image": "yogurt_dip.jpg",
                "ingredients": ["1 cup vegan yogurt", "1 tsp cumin powder", "1 tsp salt", "1 tsp lemon juice"],
                "steps": [
                    "Mix vegan yogurt with cumin, salt, and lemon juice.",
                    "Stir well.",
                    "Serve as a dip with snacks."
                ],
                "cookTime": "<10mins",
                "foodType": "Dairy",
                "cookedType": "Without Fire",
                "taste": "Salty"
            },
            {
                "title": "Vegan Pizza",
                "description": "Fire-cooked salty vegan pizza with dairy-free cheese.",
                "image": "vegan_pizza.jpg",
                "ingredients": ["1 pizza base", "1/2 cup tomato sauce", "1/2 cup vegan cheese", "Vegetables of choice", "Salt to taste"],
                "steps": [
                    "Spread tomato sauce on pizza base.",
                    "Top with vegetables and vegan cheese.",
                    "Bake at 220°C for 15 minutes.",
                    "Serve hot."
                ],
                "cookTime": "10-30mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Salty"
            },
            {
                "title": "Vegan Lentil Stew",
                "description": "A salty and hearty lentil stew, fire-cooked for over 1 hour.",
                "image": "lentil_stew.jpg",
                "ingredients": ["1 cup lentils", "2 carrots", "1 onion", "1 tsp salt", "4 cups water"],
                "steps": [
                    "Soak lentils for 30 minutes.",
                    "Cook lentils, carrots, onion, and salt with water.",
                    "Simmer for 1 hour until thick.",
                    "Serve hot."
                ],
                "cookTime": ">1hr",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Salty"
            },
            // SPICY (cover all combos)
            {
                "title": "Chili Peanut Salad",
                "description": "A quick spicy peanut and veggie salad, made without fire.",
                "image": "chili_peanut_salad.jpg",
                "ingredients": ["1 cucumber", "1 tomato", "1/2 cup roasted peanuts", "1 green chili", "Pinch of salt"],
                "steps": [
                    "Chop cucumber and tomato.",
                    "Mix with peanuts and sliced green chili.",
                    "Add a pinch of salt and serve fresh."
                ],
                "cookTime": "<10mins",
                "foodType": "Vegetable",
                "cookedType": "Without Fire",
                "taste": "Spicy"
            },
            {
                "title": "Spicy Fried Rice",
                "description": "A classic fire-cooked fried rice with chili and soy sauce.",
                "image": "spicy_fried_rice.jpg",
                "ingredients": ["2 cups cooked rice", "1 onion", "1 green chili", "1 tbsp soy sauce", "1 tsp chili sauce"],
                "steps": [
                    "Heat oil in a wok and sauté onions and chili.",
                    "Add cooked rice and sauces.",
                    "Stir-fry for 5 minutes.",
                    "Serve hot."
                ],
                "cookTime": "10-30mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Spicy"
            },
            {
                "title": "Stuffed Spicy Eggplant",
                "description": "Eggplants stuffed with spicy masala mix, roasted until soft.",
                "image": "spicy_eggplant.jpg",
                "ingredients": ["4 baby eggplants", "2 tbsp chili powder", "1 tsp cumin", "1 tsp salt", "2 tbsp oil"],
                "steps": [
                    "Slit eggplants and stuff with chili powder, cumin, and salt.",
                    "Heat oil in a pan and place stuffed eggplants.",
                    "Cook covered on low heat for 30 minutes.",
                    "Serve hot."
                ],
                "cookTime": "30-50mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Spicy"
            },
            {
                "title": "Spicy Corn Chaat",
                "description": "A quick and spicy corn snack made without fire.",
                "image": "spicy_corn_chaat.jpg",
                "ingredients": ["1 cup boiled corn", "1 tsp chili powder", "1 tsp lemon juice", "Pinch of salt"],
                "steps": [
                    "Mix corn with chili powder, lemon juice, and salt.",
                    "Serve in a bowl."
                ],
                "cookTime": "<10mins",
                "foodType": "Grain",
                "cookedType": "Without Fire",
                "taste": "Spicy"
            },
            {
                "title": "Spicy Vegan Curry",
                "description": "A hearty fire-cooked curry with vegetables and spices.",
                "image": "spicy_curry.jpg",
                "ingredients": ["2 potatoes", "1 onion", "1 tomato", "1 tsp chili powder", "Salt to taste"],
                "steps": [
                    "Sauté onions and tomatoes in oil.",
                    "Add potatoes, chili powder, and salt.",
                    "Add water and simmer until potatoes are soft.",
                    "Serve hot with rice or bread."
                ],
                "cookTime": "10-30mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Spicy"
            },
            {
                "title": "Spicy Lentil Soup",
                "description": "A fire-cooked lentil soup with chili and spices, slow-cooked for depth.",
                "image": "spicy_lentil_soup.jpg",
                "ingredients": ["1 cup lentils", "2 red chilies", "1 onion", "1 tsp cumin", "Salt to taste"],
                "steps": [
                    "Boil lentils with water until half cooked.",
                    "Add onions, chilies, cumin, and salt.",
                    "Simmer for 1 hour until thick and spicy.",
                    "Serve hot."
                ],
                "cookTime": ">1hr",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Spicy"
            },
            {
                "title": "Spicy Vegan Wrap",
                "description": "A quick spicy wrap with veggies and chili sauce.",
                "image": "spicy_wrap.jpg",
                "ingredients": ["1 tortilla wrap", "1/2 cup lettuce", "1/2 cup beans", "1 tsp chili sauce", "1 tsp salt"],
                "steps": [
                    "Spread chili sauce on tortilla.",
                    "Add lettuce and beans.",
                    "Sprinkle salt, roll tightly, and serve fresh."
                ],
                "cookTime": "<10mins",
                "foodType": "Grain",
                "cookedType": "Without Fire",
                "taste": "Spicy"
            },
            {
                "title": "Spicy Vegan Yogurt Dip",
                "description": "A no-fire dip with vegan yogurt and chili flakes.",
                "image": "spicy_yogurt_dip.jpg",
                "ingredients": ["1 cup vegan yogurt", "1 tsp chili flakes", "1 tsp lemon juice", "Salt to taste"],
                "steps": [
                    "Mix vegan yogurt with chili flakes, lemon juice, and salt.",
                    "Serve chilled with snacks."
                ],
                "cookTime": "<10mins",
                "foodType": "Dairy",
                "cookedType": "Without Fire",
                "taste": "Spicy"
            },
            {
                "title": "Spicy Vegan Pizza",
                "description": "A fire-cooked pizza with chili toppings and vegan cheese.",
                "image": "spicy_pizza.jpg",
                "ingredients": ["1 pizza base", "1/2 cup tomato sauce", "1/2 cup vegan cheese", "Chili flakes", "Vegetables of choice"],
                "steps": [
                    "Spread tomato sauce on pizza base.",
                    "Top with vegetables, chili flakes, and vegan cheese.",
                    "Bake at 220°C for 15 minutes.",
                    "Serve hot."
                ],
                "cookTime": "10-30mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Spicy"
            },
            {
                "title": "Spicy Tofu Stir Fry",
                "description": "A quick and spicy tofu stir fry with chili sauce.",
                "image": "spicy_tofu.jpg",
                "ingredients": ["1 block tofu", "1 bell pepper", "1 onion", "2 tbsp chili sauce", "Salt to taste"],
                "steps": [
                    "Cut tofu into cubes and sauté with onions and bell peppers.",
                    "Add chili sauce and salt.",
                    "Cook for 10 minutes until spicy and flavorful.",
                    "Serve hot."
                ],
                "cookTime": "10-30mins",
                "foodType": "Dairy",
                "cookedType": "Fire Cooked",
                "taste": "Spicy"
            },
            // SOUR (cover all combos)
            {
                "title": "Lemon Cucumber Salad",
                "description": "A refreshing sour cucumber salad made without fire.",
                "image": "lemon_cucumber_salad.jpg",
                "ingredients": ["1 cucumber", "1 tomato", "1 tsp lemon juice", "Pinch of salt"],
                "steps": [
                    "Chop cucumber and tomato.",
                    "Mix with lemon juice and salt.",
                    "Serve chilled."
                ],
                "cookTime": "<10mins",
                "foodType": "Vegetable",
                "cookedType": "Without Fire",
                "taste": "Sour"
            },
            {
                "title": "Tamarind Rice",
                "description": "A tangy and sour rice dish flavored with tamarind, fire-cooked.",
                "image": "tamarind_rice.jpg",
                "ingredients": ["2 cups cooked rice", "2 tbsp tamarind paste", "1 tsp mustard seeds", "1 tbsp oil"],
                "steps": [
                    "Heat oil in a pan and add mustard seeds.",
                    "Mix in tamarind paste and cook for 2 minutes.",
                    "Add cooked rice and mix well.",
                    "Serve warm."
                ],
                "cookTime": "10-30mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Sour"
            },
            {
                "title": "Sour Mango Pickle",
                "description": "A spicy and sour raw mango pickle, made without fire.",
                "image": "mango_pickle.jpg",
                "ingredients": ["2 raw mangoes", "1 tsp chili powder", "1 tsp salt", "1 tsp mustard oil"],
                "steps": [
                    "Chop raw mangoes into cubes.",
                    "Mix with chili powder, salt, and mustard oil.",
                    "Store in a jar for 1 day before serving."
                ],
                "cookTime": "<10mins",
                "foodType": "Fruit",
                "cookedType": "Without Fire",
                "taste": "Sour"
            },
            {
                "title": "Lemon Rice",
                "description": "A classic South Indian-style sour lemon rice.",
                "image": "lemon_rice.jpg",
                "ingredients": ["2 cups cooked rice", "2 tbsp lemon juice", "1 tsp turmeric", "1 tsp salt", "1 tbsp oil"],
                "steps": [
                    "Heat oil in a pan and add turmeric and salt.",
                    "Mix in lemon juice.",
                    "Add cooked rice and stir well.",
                    "Serve warm."
                ],
                "cookTime": "10-30mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Sour"
            },
            {
                "title": "Vegan Yogurt Raita",
                "description": "A sour raita made with vegan yogurt, cucumber, and spices.",
                "image": "vegan_raita.jpg",
                "ingredients": ["1 cup vegan yogurt", "1 cucumber", "1 tsp lemon juice", "Salt to taste"],
                "steps": [
                    "Grate cucumber and mix with vegan yogurt.",
                    "Add lemon juice and salt.",
                    "Stir and serve chilled."
                ],
                "cookTime": "<10mins",
                "foodType": "Dairy",
                "cookedType": "Without Fire",
                "taste": "Sour"
            },
            {
                "title": "Vegetable Sambar",
                "description": "A sour and spicy lentil-based South Indian stew.",
                "image": "sambar.jpg",
                "ingredients": ["1 cup toor dal", "1 tomato", "1 onion", "2 tbsp tamarind paste", "Sambar spices"],
                "steps": [
                    "Cook lentils in water until soft.",
                    "Add vegetables and tamarind paste.",
                    "Mix in sambar spices and simmer for 20 minutes.",
                    "Serve hot with rice."
                ],
                "cookTime": "30-50mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Sour"
            },
            {
                "title": "Fermented Rice Porridge",
                "description": "A sour and cooling fermented rice dish made overnight.",
                "image": "fermented_rice.jpg",
                "ingredients": ["1 cup cooked rice", "2 cups water", "1 tsp salt"],
                "steps": [
                    "Soak cooked rice in water overnight.",
                    "Next morning, add salt.",
                    "Serve with raw onion or green chili."
                ],
                "cookTime": ">1hr",
                "foodType": "Grain",
                "cookedType": "Without Fire",
                "taste": "Sour"
            },
            {
                "title": "Tomato Rasam",
                "description": "A tangy South Indian tomato soup flavored with tamarind.",
                "image": "rasam.jpg",
                "ingredients": ["2 tomatoes", "1 tbsp tamarind paste", "1 tsp cumin", "1 tsp pepper", "Salt to taste"],
                "steps": [
                    "Boil tomatoes and tamarind paste with water.",
                    "Add cumin, pepper, and salt.",
                    "Simmer for 15 minutes.",
                    "Serve hot with rice or as soup."
                ],
                "cookTime": "10-30mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Sour"
            },
            {
                "title": "Sour Vegan Buttermilk",
                "description": "A cooling sour drink made with vegan yogurt and spices.",
                "image": "vegan_buttermilk.jpg",
                "ingredients": ["1 cup vegan yogurt", "1 cup water", "1 tsp cumin powder", "1 tsp lemon juice", "Salt to taste"],
                "steps": [
                    "Whisk vegan yogurt with water.",
                    "Add cumin powder, lemon juice, and salt.",
                    "Stir and serve chilled."
                ],
                "cookTime": "<10mins",
                "foodType": "Dairy",
                "cookedType": "Without Fire",
                "taste": "Sour"
            },
            {
                "title": "Sour Okra Curry",
                "description": "A fire-cooked curry with okra and tamarind for a sour flavor.",
                "image": "okra_curry.jpg",
                "ingredients": ["200g okra", "1 onion", "1 tomato", "1 tbsp tamarind paste", "Salt to taste"],
                "steps": [
                    "Sauté onion and tomato in oil.",
                    "Add okra and tamarind paste.",
                    "Cook for 20 minutes until okra is soft.",
                    "Serve hot."
                ],
                "cookTime": "10-30mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Sour"
            },
            {
                "title": "Paneer Butter Masala",
                "description": "A creamy sweet and mildly spicy paneer curry.",
                "image": "paneer_butter_masala.jpg",
                "ingredients": ["200g paneer", "2 tomatoes", "1 onion", "2 tbsp cream", "Spices"],
                "steps": [
                    "Cook onion and tomatoes into a paste.",
                    "Add paneer and spices, simmer in cream.",
                    "Serve hot with naan or rice."
                ],
                "cookTime": "30-50mins",
                "foodType": "Dairy",
                "cookedType": "Fire Cooked",
                "taste": "Sweet"
            },
            {
                "title": "Masala Poha",
                "description": "A savory and slightly spicy flattened rice breakfast.",
                "image": "masala_poha.jpg",
                "ingredients": ["2 cups poha", "1 onion", "1 potato", "Green chili", "Spices"],
                "steps": [
                    "Soak poha and drain water.",
                    "Cook onion, potato, and spices.",
                    "Mix in poha and serve hot."
                ],
                "cookTime": "10-30mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Salty"
            },
            {
                "title": "Stuffed Capsicum",
                "description": "Bell peppers stuffed with spiced mashed potatoes.",
                "image": "stuffed_capsicum.jpg",
                "ingredients": ["3 bell peppers", "2 potatoes", "1 onion", "Spices"],
                "steps": [
                    "Boil and mash potatoes with spices.",
                    "Stuff mixture into capsicum.",
                    "Cook in oven or pan until tender."
                ],
                "cookTime": "30-50mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Spicy"
            },
            {
                "title": "Mango Smoothie",
                "description": "A sweet and creamy summer drink.",
                "image": "mango_smoothie.jpg",
                "ingredients": ["1 ripe mango", "1 cup milk/vegan milk", "1 tsp sugar"],
                "steps": [
                    "Blend mango with milk and sugar.",
                    "Serve chilled."
                ],
                "cookTime": "<10mins",
                "foodType": "Fruit",
                "cookedType": "Without Fire",
                "taste": "Sweet"
            },
            {
                "title": "Spinach Dal",
                "description": "A nutritious sour and spicy lentil curry with spinach.",
                "image": "spinach_dal.jpg",
                "ingredients": ["1 cup toor dal", "2 cups spinach", "1 tomato", "Tamarind paste"],
                "steps": [
                    "Cook dal until soft.",
                    "Add spinach, tomato, and tamarind.",
                    "Simmer and serve with rice."
                ],
                "cookTime": "30-50mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Sour"
            },
            {
                "title": "Sweet Corn Soup",
                "description": "A mildly sweet and salty soup made from sweet corn.",
                "image": "sweet_corn_soup.jpg",
                "ingredients": ["1 cup sweet corn", "1 carrot", "1 onion", "Salt", "Pepper"],
                "steps": [
                    "Boil corn, carrot, and onion.",
                    "Blend half, keep half whole.",
                    "Simmer and serve hot."
                ],
                "cookTime": "10-30mins",
                "foodType": "Vegetable",
                "cookedType": "Fire Cooked",
                "taste": "Sweet"
            },
            {
                "title": "Aloo Paratha",
                "description": "Stuffed flatbread with spiced mashed potato filling.",
                "image": "aloo_paratha.jpg",
                "ingredients": ["2 cups wheat flour", "2 potatoes", "Spices", "Butter"],
                "steps": [
                    "Make dough from wheat flour.",
                    "Stuff with spiced mashed potatoes.",
                    "Cook on tawa with butter."
                ],
                "cookTime": "10-30mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Salty"
            },
            {
                "title": "Beetroot Raita",
                "description": "A refreshing sour and sweet yogurt-based side dish.",
                "image": "beetroot_raita.jpg",
                "ingredients": ["1 beetroot", "1 cup vegan yogurt", "Salt", "Cumin powder"],
                "steps": [
                    "Grate beetroot.",
                    "Mix with vegan yogurt, salt, and cumin powder.",
                    "Serve chilled."
                ],
                "cookTime": "<10mins",
                "foodType": "Dairy",
                "cookedType": "Without Fire",
                "taste": "Sour"
            },
            {
                "title": "Veg Fried Rice",
                "description": "A salty and spicy Indo-Chinese fried rice.",
                "image": "veg_fried_rice.jpg",
                "ingredients": ["2 cups cooked rice", "1 cup mixed veggies", "Soy sauce", "Chili sauce"],
                "steps": [
                    "Heat oil and cook veggies.",
                    "Add sauces and rice.",
                    "Stir-fry and serve hot."
                ],
                "cookTime": "10-30mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Spicy"
            },
            {
                "title": "Fruit Chaat",
                "description": "A tangy and sour fruit salad with spices.",
                "image": "fruit_chaat.jpg",
                "ingredients": ["1 apple", "1 banana", "1 orange", "Chaat masala", "Lemon juice"],
                "steps": [
                    "Chop all fruits.",
                    "Sprinkle chaat masala and lemon juice.",
                    "Toss and serve fresh."
                ],
                "cookTime": "<10mins",
                "foodType": "Fruit",
                "cookedType": "Without Fire",
                "taste": "Sour"
            },
            {
                "title": "Masala Dosa",
                "description": "A crispy salty and spicy South Indian dosa with potato filling.",
                "image": "masala_dosa.jpg",
                "ingredients": ["2 cups dosa batter", "2 potatoes", "Onion", "Spices"],
                "steps": [
                    "Spread dosa batter on hot tawa.",
                    "Fill with spiced mashed potato.",
                    "Fold and serve with chutney."
                ],
                "cookTime": "30-50mins",
                "foodType": "Grain",
                "cookedType": "Fire Cooked",
                "taste": "Spicy"
            }
        ]);

        console.log("Recipes seeded");
        mongoose.connection.close();
    })

    .catch(err => console.log(err));
