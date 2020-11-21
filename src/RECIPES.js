import cuid from 'cuid';

const RECIPES = {
  recipeType: [
    {
      id: '1e3df1d2',
      type: 'Appetizer'
    },
    {
      id: '1e3df1d3',
      type: 'Entree'
    },
    {
      id: '1e3df1d4',
      type: 'Side'
    },
    {
      id: '1e3df1d5',
      type: 'Sauce'
    },
    {
      id: '1e3df1d6',
      type: 'Beverage'
    },
    {
      id: '1e3df1d7',
      type: 'Dessert'
    }
  ],
  recipes: [
    {
      id: '1e3df1d8',
      name: 'Kohlrabi and Apple Slaw',
      recipeType: 'Side',
      ingredients: [
        {
          ingredient: 'Kohlrabi',
          amount: 1/2,
          unit: 'lb',
        },
        {
          ingredient: 'Apple',
          amount: 1,
          unit: 'each',
        },
        {
          ingredient: 'Pecans',
          amount: 1/4,
          unit: 'cup',
        },
        {
          ingredient: 'Scallion, thinly sliced',
          amount: 1,
          unit: 'each',
        },
        {
          ingredient: 'Parsley, minced',
          amount: 1/4,
          unit: 'cup',
        },
        {
          ingredient: 'Mayonnaise (or vegan sub)',
          amount: 4,
          unit: 'tbsp',
        },
        {
          ingredient: 'Lemon Juice',
          amount: 1,
          unit: 'tbsp',
        },
        {
          ingredient: 'Salt & Pepper',
          amount: 0,
          unit: 'to taste',
        },
      ],
      content: 'Toast pecans in a 375 degree oven on a parchment lined sheet tray for 10-12 minutes. Remove from the oven and leave to cool. While pecans are toasting, use a knife or vegetable peeler to peel the kohlrabi. Slice into thin matchsticks and place in a medium sized bowl. Remove the core from the apple and slice into thin matchsticks. Add it to the bowl with the kohlrabi. In a small bowl mix together mayonnaise and lemon juice. Add sliced scallions and minced parsley, season with salt and pepper. Pour this dressing mixture over the apples and kohlrabi and mix thoroughly. Top with the chopped toasted pecans. Enjoy this on salad greens, in a sandwich, or as a topper for fried chicken or fish.',
    },
    {
      id: '1e3df1d9',
      name: 'Watercress and Cilantro Chimichurri',
      recipeType: 'Sauce',
      ingredients: [
        {
          ingredient: 'Watercress, finely chopped',
          amount: 1.5,
          unit: 'cups',
        },
        {
          ingredient: 'Cilantro, finely chopped',
          amount: 1/2,
          unit: 'cup',
        },
        {
          ingredient: 'Olive Oil',
          amount: 3/4,
          unit: 'cup',
        },
        {
          ingredient: 'Lemon Juice',
          amount: 1/3,
          unit: 'cup',
        },
        {
          ingredient: 'Shallot, finely minced',
          amount: 1,
          unit: 'each',
        },
        {
          ingredient: 'Garlic, finely minced',
          amount: 1,
          unit: 'tbsp',
        },
        {
          ingredient: 'Dried Red Hot Chili Flakes',
          amount: 1.5,
          unit: 'tsp',
        },
        {
          ingredient: 'Salt & Pepper',
          amount: 0,
          unit: 'to taste',
        },
      ],
      content: 'Finely chop watercress and cilantro (including stems) and add them to a medium sized bowl. Mince shallot and garlic and add to the watercress mix. Add the remaining ingredients. Season with additional salt and pepper as needed. This sauce recipe is easy to pull together but packs great flavor! Use this as a marinade for beef, a topper for cooked chicken or roasted vegetables, or as a spread on a sandwich.',
    },
    {
      id: '1e3df1f1',
      name: 'Kabocha Squash Bisque',
      recipeType: 'Appetizer',
      ingredients: [
        {
          ingredient: 'Kabocha Squash',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Onion, diced',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Celery, diced',
          amount: 2,//a number
          unit: 'each',
        },
        {
          ingredient: 'Red Bell Pepper, diced',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Carrot, peeled & diced',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Garlic, minced',
          amount: 4,//a number
          unit: 'cloves',
        },
        {
          ingredient: 'Apple, cored & diced',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Tomato, diced',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Thyme, chopped',
          amount: 1,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Rosemary, chopped',
          amount: 1,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Oil',
          amount: 2,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Maple Syrup',
          amount: 2,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Stock, Vegetable or Chicken',
          amount: 1/2,//a number
          unit: 'gallon',
        },
        {
          ingredient: 'Salt & Pepper',
          amount: 0,
          unit: 'to taste',
        },
      ],
      content: 'Preheat your oven to 400 degrees. Cut the kabocha squash in half, scrape out the seeds, and place the squash cut side down on a sheet pan lined with parchment paper. Bake squash for 1-1.5 hours until it is tender and develops some good color. When your squash is fully roasted, remove from the oven and let it cool until you can scoop out the flesh. Heat a pot over medium low heat and add the oil. Add the onion, celery, pepper, carrot, and garlic, and sauté for 10 minutes. Add the roasted squash, apples, tomatoes, herbs, and maple syrup. Let this reduce for 5 minutes. Add the stock and let simmer for 30 minutes. Remove from the heat and purée in a high speed blender, being careful to fill the blender no more than halfway and to leave a vent for steam to escape. Season with salt and pepper. Serve garnished with diced apples, crème fraîche, or thyme- or all three!',
    },
    {
      id: '1e3df1f2',
      name: 'Breakfast Home Fries',
      recipeType: 'Side',
      ingredients: [
        {
          ingredient: 'Kennebec Potatoes, washed',
          amount: 1,//a number
          unit: 'lb',
        },
        {
          ingredient: 'Garlic, minced',
          amount: 1,//a number
          unit: 'clove',
        },
        {
          ingredient: 'Jalapeño, minced',
          amount: 1/2,//a number
          unit: 'each',
        },
        {
          ingredient: 'Butter',
          amount: 1,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'Olive Oil',
          amount: 1,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'White Onion, chopped',
          amount: 1/2,//a number
          unit: 'each',
        },
        {
          ingredient: 'Bell Pepper, minced',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Parsley, minced',
          amount: 2,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'Paprika',
          amount: 1/2,//a number
          unit: 'tsp',
        },
        {
          ingredient: 'Salt & Pepper',
          amount: 0,
          unit: 'to taste',//a number
        },
      ],
      content: 'Cut potatoes into 1/4 inch cubes. Bring a large pot of salted water to a boil. Add the potatoes, cover, and cook over medium-high heat until just tender (about 6 minutes), then drain. Place the drained potatoes on a paper towel-lined plate, and place a paper towel on top to absorb all of the moisture. Heat a large skillet over medium-high heat. Once hot, add butter and oil (vegan option: double the oil or use a vegan butter replacement). Add potatoes and cook without stirring for 3-5 minutes. Reduce to medium heat, add the remaining vegetables and continue to cook, stirring frequently for 15 minutes. Add paprika, salt, and pepper and stir to combine. Remove from heat and toss in your chopped parsley. Enjoy this hash with breakfast, in a burrito, or as an awesome side for dinner! ',
    },
    {
      id: '1e3df1f3',
      name: 'Pickled Jalapeño Peppers',
      recipeType: 'Side',
      ingredients: [
        {
          ingredient: 'Jalapeños',
          amount: 15,//a number
          unit: 'each',
        },
        {
          ingredient: 'Garlic',
          amount: 2,//a number
          unit: 'cloves',
        },
        {
          ingredient: 'Water',
          amount: 1.25,//a number
          unit: 'cups',
        },
        {
          ingredient: 'White Vinegar',
          amount: 1.25,//a number
          unit: 'cups',
        },
        {
          ingredient: 'Sugar',
          amount: 4,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'Salt',
          amount: 2,//a number
          unit: 'tbsp',
        },
        
      ],
      content: 'Combine the garlic, water, white vinegar, sugar and salt in a medium sauce pan. Heat to a boil and stir until the sugar and salt are dissolved, and let the mixture come to a boil. Rinse and dry your jalapeños. Wearing gloves is recommended when processing any hot pepper. Remove the stems and slice your peppers into small rings. Pack these sliced jalapeños into a cleaned and dried quart container. Once brine is boiling, pour it over your jalapeños. Cool to room temperature before putting the lid on. Leave the peppers in your fridge overnight to let them fully develop. These pickles can be held in your fridge for up to 2 months in an air tight container. Note: the longer the pepper sits in the brine the less spice it will have. ',
    },
    {
      id: '1e3df1f4',
      name: 'Dragon Tongue Beans with Sesame Vinaigrette and Peanuts',
      recipeType: 'Side',
      ingredients: [
        {
          ingredient: 'Dragon Tongue Beans',
          amount: 1,//a number
          unit: 'lb',
        },
        {
          ingredient: 'Toasted Peanuts',
          amount: 1,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Toasted Sesame Seeds',
          amount: 1,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'Olive Oil',
          amount: 1/2,//a number
          unit: 'cup',
        },
        {
          ingredient: 'Sesame Oil',
          amount: 1/2,//a number
          unit: 'cup',
        },
        {
          ingredient: 'Ginger, peeled & grated',
          amount: 2,//a number
          unit: 'inch',
        },
        {
          ingredient: 'Rice Wine Vinegar',
          amount: 1,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'Lime Juice',
          amount: 2,//a number
          unit: 'tbsp',
        },
      ],
      content: 'Make the vinaigrette: Combine all remaining ingredients in a small jar and shake together. This vinaigrette can be consumed right away but is best if held to marinate overnight. You can eat this salad two ways, cooked or raw. For a cooked version of this salad: bring a pot of heavily salted water to boil, add the beans and cook for 3-5 minutes. Remove from the boiling water and submerge in ice water to stop the cooking. Once cooled, use the cooked beans to assemble the salad (see below). To consume raw: cut the beans on a slight bias, dress with the sesame vinaigrette and then place on a plate, garnishing with peanuts and toasted sesame seeds. ',
    },
    {
      id: '1e3df1f5',
      name: 'Ginger Leaf Simple Syrup',
      recipeType: 'Beverage',
      ingredients: [
        {
          ingredient: 'Ginger Stems & Leaves',
          amount: 3,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Water',
          amount: 1.5,//a number
          unit: 'cups',
        },
        {
          ingredient: 'White Sugar',
          amount: 1/4,//a number
          unit: 'cup',
        },
        {
          ingredient: 'Brown Sugar',
          amount: 1/4,//a number
          unit: 'cup',
        },
        {
          ingredient: 'Lime Juice',
          amount: 1/4,//a number
          unit: 'cup',
        },
        
      ],
      content: 'Remove the stems and leaves from your ginger root, reserving the root for another recipe, and cut the stem and leaves into small chunks. Combine ginger, water, sugars, and lime juice in a small pot. Bring this up to a low simmer and let cook for 30 minutes. Remove from the heat and let steep for an additional 20 minutes. Strain the syrup through a sieve into a jar. Chill the syrup and cover tightly. The syrup should keep in the fridge for about two weeks.',
    },
    {
      id: '1e3df1f6',
      name: 'Ginger Spritzer',
      recipeType: 'Beverage',
      ingredients: [
        {
          ingredient: 'Ginger Simple Syrup',
          amount: 1/4,//a number
          unit: 'cup',
        },
        {
          ingredient: 'Lime Juice',
          amount: 1,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'Plain Seltzer',
          amount: 10,//a number
          unit: 'oz',
        },
      ],
      content: 'To assemble your Ginger Seltzer, add your ginger syrup and lime juice to a small glass and mix. Top this with plain seltzer and garnish with a lime wedge to enjoy a nice refreshing drink!',
    },
    {
      id: '1e3df1f7',
      name: 'Roasted Chioggia Beets with Balsamic Glaze',
      recipeType: 'Side',
      ingredients: [
        {
          ingredient: 'Chioggia Beets, peeled & quartered',
          amount: 1,//a number
          unit: 'lb',
        },
        {
          ingredient: 'Olive Oil',
          amount: 1,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Salt',
          amount: 1,//a number
          unit: 'tsp',
        },
        {
          ingredient: 'Pepper',
          amount: 1/2,//a number
          unit: 'tsp',
        },
        {
          ingredient: 'Rosemary',
          amount: 1/2,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Balsamic Vinegar',
          amount: 1/2,//a number
          unit: 'cup',
        },
        {
          ingredient: 'Dijon Mustard',
          amount: 1,//a number
          unit: 'tsp',
        },
        {
          ingredient: 'Garlic',
          amount: 1,//a number
          unit: 'clove',
        },
        {
          ingredient: 'Maple Syrup or Honey',
          amount: 2,//a number
          unit: 'tbsp',
        },
      ],
      content: 'Preheat oven to 375 degrees. Place a piece of parchment paper on your cutting board to avoid stains. Peel your beets using a vegetable peeler then quarter and place them in a large bowl. Toss the beets with olive oil, salt, pepper and rosemary. Bake for 25-30 minutes. While your beets are in the oven, combine all of the ingredients for the glaze in a small sauce pan. Bring this mixture up to a boil, reduce to medium heat and cook for 15-25 minutes or until reduced by half. The finished glaze should coat a spoon without falling off instantly. Remove the beets from the oven and pour the hot balsamic glaze onto the beets. Bake for an additional 10-15 minutes or until the glaze sticks to the beets. Eat these hot as a side or cold on top of salads! ',
    },
    {
      id: '1e3df1f8',
      name: 'Buttermilk Panna Cotta with Fruit Gelée',
      recipeType: 'Dessert',
      ingredients: [
        {
          ingredient: 'Heavy Cream, divided',
          amount: 1.25,//a number
          unit: 'cups',
        },
        {
          ingredient: 'Sugar',
          amount: 4,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Powdered Gelatin',
          amount: 1,//a number
          unit: 'envelope',
        },
        {
          ingredient: 'Buttermilk, cold',
          amount: 1.75,//a number
          unit: 'cups',
        },
        {
          ingredient: 'Fruit Puree',
          amount: 1,//a number
          unit: 'cup',
        },
        {
          ingredient: 'Sugar',
          amount: 6,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'Gelatin',
          amount: 2,//a number
          unit: 'tsp',
        },
        {
          ingredient: 'Water, cold',
          amount: 1/4,//a number
          unit: 'cup',
        },
        {
          ingredient: 'Salt',
          amount: 0,
          unit: 'to taste',//a number
        },
      ],
      content: 'Buttermilk Panna Cotta: Sprinkle the gelatin over ¼ cup of cold cream, allow to sit for 10 minutes or until hydrated. Combine sugar and remaining cream in saucepan and heat until sugar has dissolved and cream is hot (do not boil). Remove from heat and stir in gelatin until dissolved. Add buttermilk, stir and strain through fine mesh sieve. Cool to body temperature over ice water bath, stirring, then ladle 4oz into small dishes (glass is best to see the color of the fruit). Cover with plastic. Fruit Gelée: Sprinkle the gelatin over cold water, allow to sit for 10 minutes or until hydrated. Warm fruit purée, sugar, and salt over medium heat to dissolve sugar and salt completely. Add gelatin. Cool to body temperature then spoon mixture over set Panna Cottas (approximately 2 tbsp per dish). Allow to set for 8 hours or overnight. Recipe by Pastry Chef Laney Jahkel-Parrish of 300 East',
    },
    {
      id: '1e3df1f9',
      name: 'Koginut Squash and Apple Salad',
      recipeType: 'Appetizer',
      ingredients: [
        {
          ingredient: 'Koginut Squash',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Apple, diced',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Dried Fruit (cranberries, raisins, etc.)',
          amount: 2,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Nuts or Seeds',
          amount: 1,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Spring Mix',
          amount: 4,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Soft or Vegan Cheese',
          amount: 1,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Apple Cider Vinegar',
          amount: 1/4,//a number
          unit: 'cup',
        },
        {
          ingredient: 'Dijon Mustard',
          amount: 1,//a number
          unit: 'tsp',
        },
        {
          ingredient: 'Salt',
          amount: 1/2,//a number
          unit: 'tsp',
        },
        {
          ingredient: 'Maple Syrup',
          amount: 1.5,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'Olive Oil',
          amount: 5,//a number
          unit: 'tbsp',
        },
      ],
      content: 'Preheat oven to 375 degrees. Cut squash in half, remove the seeds and place on a baking sheet cut side down. Rub the outside of the squash with a small amount of oil and season with salt and pepper. Roast for 40-55 minutes or until a paring knife can pierce the squash with no resistance. While the squash is roasting, prepare your vinaigrette. Combine vinegar, mustard, salt, and syrup in a small bowl. Slowly whisk in the olive oil until a creamy texture is achieved. Season with salt and pepper. Once the squash has finished roasting, let it cool to room temperature. Cut a few slices of squash and place it on your plate, them dress the lettuce with the vinaigrette and place that on the squash. Finish the salad by adding diced apples, dried fruit, seeds/nuts, and some soft cheese of your choice. This is a great template to create a flavorful fall salad with what you have on hand! ',
    },
    {
      id: '1e3df1g1',
      name: 'Wine Poached Pears',
      recipeType: 'Dessert',
      ingredients: [
        {
          ingredient: 'Water',
          amount: 3,//a number
          unit: 'cups',
        },
        {
          ingredient: 'Sugar',
          amount: 1,//a number
          unit: 'cup',
        },
        {
          ingredient: 'Pears, peeled, cored, and quartered',
          amount: 3,//a number
          unit: 'each',
        },
        {
          ingredient: 'Cinnamon Sticks',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Cloves',
          amount: 2,//a number
          unit: 'each',
        },
        {
          ingredient: 'Lemon',
          amount: 1/2,//a number
          unit: 'each',
        },
      ],
      content: 'Heat the water and sugar in a large saucepan until warm and the sugar is dissolved. Then add cinnamon stick, cloves, and lemon half. Slide the pears into the sugar water solution and cover with a round of parchment paper that has a small hole cut in the center (this helps air escape, and keeps the pears submerged.) Simmer the pears until cooked through, 15-25 minutes. The pears are fully cooked when a sharp knife can pierce the pear with little to no resistance. Remove from heat and let the pears cool in their liquid. Once cool, carefully remove the pears and strain the liquid. Serve pears drizzled with the cooking liquid with ice cream or on a cheese board! ',
    },
    {
      id: '1e3df1g2',
      name: 'Smokey Pink Eye Peas',
      recipeType: 'Side',
      ingredients: [
        {
          ingredient: 'Pink Eye Peas',
          amount: 1,//a number
          unit: 'lb',
        },
        {
          ingredient: 'Broth',
          amount: 4,//a number
          unit: 'cups',
        },
        {
          ingredient: 'Yellow Onion, diced',
          amount: 1,//a number
          unit: 'each',
        },
        {
          ingredient: 'Garlic, crushed',
          amount: 3,//a number
          unit: 'cloves',
        },
        {
          ingredient: 'Bay Leaves',
          amount: 2,//a number
          unit: 'each',
        },
        {
          ingredient: 'Thyme',
          amount: 3,//a number
          unit: 'sprigs',
        },
        {
          ingredient: 'Olive Oil',
          amount: 1,//a number
          unit: 'oz',
        },
        {
          ingredient: 'Apple Cider Vinegar',
          amount: 1/2,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'Smoked Paprika',
          amount: 1/2,//a number
          unit: 'tbsp',
        },
        {
          ingredient: 'Salt & Pepper',
          amount: 0,
          unit: 'to taste',
        },
      ],
      content: 'Heat olive oil in a medium sauce pan over medium heat. Once hot, add  diced onion and crushed garlic. Sauté until aromatic, stir frequently for 3-5 minutes. Add the rest of the ingredients to the pot and bring to a boil. Reduce to a simmer and cook for 20-25 minutes. The peas are ready when they are tender to the tooth. This recipe is perfect as a side for chicken or pork, or enjoy over rice with roasted vegetables for a wonderful late summer vegan meal.',
    }, 
    // {
    //   id: '1e3df1g3',
    //   name: '',
    //   recipeType: '',
    //   ingredients: [
    //     {
    //       ingredient: '',
    //       amount: 3,//a number
    //       unit: lb,
    //     }
    //   ],
    //   content: '',
    // },
    // {
    //   id: '1e3df1g4',
    //   name: '',
    //   recipeType: '',
    //   ingredients: [
    //     {
    //       ingredient: '',
    //       amount: 3,//a number
    //       unit: lb,
    //     }
    //   ],
    //   content: '',
    // },
    // {
    //   id: '1e3df1g5',
    //   name: '',
    //   recipeType: '',
    //   ingredients: [
    //     {
    //       ingredient: '',
    //       amount: 3,//a number
    //       unit: lb,
    //     }
    //   ],
    //   content: '',
    // },
    // {
    //   id: '1e3df1g6',
    //   name: '',
    //   recipeType: '',
    //   ingredients: [
    //     {
    //       ingredient: '',
    //       amount: 3,//a number
    //       unit: lb,
    //     }
    //   ],
    //   content: '',
    // },
    // {
    //   id: '1e3df1g7',
    //   name: '',
    //   recipeType: '',
    //   ingredients: [
    //     {
    //       ingredient: '',
    //       amount: 3,//a number
    //       unit: lb,
    //     }
    //   ],
    //   content: '',
    // },
    // {
    //   id: '1e3df1g8',
    //   name: '',
    //   recipeType: '',
    //   ingredients: [
    //     {
    //       ingredient: '',
    //       amount: 3,//a number
    //       unit: lb,
    //     }
    //   ],
    //   content: '',
    // },
    // {
    //   id: '1e3df1g9',
    //   name: '',
    //   recipeType: '',
    //   ingredients: [
    //     {
    //       ingredient: '',
    //       amount: 3,//a number
    //       unit: lb,
    //     }
    //   ],
    //   content: '',
    // },
    
    
  ]
}

export default RECIPES;