import cuid from 'cuid';

const RECIPES = {
  recipeType: [
    {
      id: cuid(),
      type: 'Appetizer'
    },
    {
      id: cuid(),
      type: 'Entree'
    },
    {
      id: cuid(),
      type: 'Side'
    },
    {
      id: cuid(),
      type: 'Sauce'
    },
    {
      id: cuid(),
      type: 'Beverage'
    },
    {
      id: cuid(),
      type: 'Dessert'
    }
  ],
  recipes: [
    {
      id: cuid(),
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
          unit: 'to taste',
        },
      ],
      content: 'Toast pecans in a 375 degree oven on a parchment lined sheet tray for 10-12 minutes. Remove from the oven and leave to cool. While pecans are toasting, use a knife or vegetable peeler to peel the kohlrabi. Slice into thin matchsticks and place in a medium sized bowl. Remove the core from the apple and slice into thin matchsticks. Add it to the bowl with the kohlrabi. In a small bowl mix together mayonnaise and lemon juice. Add sliced scallions and minced parsley, season with salt and pepper. Pour this dressing mixture over the apples and kohlrabi and mix thoroughly. Top with the chopped toasted pecans. Enjoy this on salad greens, in a sandwich, or as a topper for fried chicken or fish.',
    },
    {
      id: cuid(),
      name: 'Watercress and Cilantro Chimichurri',
      recipeType: 'Sauce',
      ingredients: [
        {
          ingredient: 'Watercress, finely chopped',
          amount: 1.5,
          unit: 'cup',
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
          unit: 'To Taste',
        },
      ],
      content: 'Finely chop watercress and cilantro (including stems) and add them to a medium sized bowl. Mince shallot and garlic and add to the watercress mix. Add the remaining ingredients. Season with additional salt and pepper as needed. This sauce recipe is easy to pull together but packs great flavor! Use this as a marinade for beef, a topper for cooked chicken or roasted vegetables, or as a spread on a sandwich.',
    },
    {
      id: cuid(),
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
          unit: 'To Taste',
        },
      ],
      content: 'Preheat your oven to 400 degrees. Cut the kabocha squash in half, scrape out the seeds, and place the squash cut side down on a sheet pan lined with parchment paper. Bake squash for 1-1.5 hours until it is tender and develops some good color. When your squash is fully roasted, remove from the oven and let it cool until you can scoop out the flesh. Heat a pot over medium low heat and add the oil. Add the onion, celery, pepper, carrot, and garlic, and sauté for 10 minutes. Add the roasted squash, apples, tomatoes, herbs, and maple syrup. Let this reduce for 5 minutes. Add the stock and let simmer for 30 minutes. Remove from the heat and purée in a high speed blender, being careful to fill the blender no more than halfway and to leave a vent for steam to escape. Season with salt and pepper. Serve garnished with diced apples, crème fraîche, or thyme- or all three!',
    },
    {
      id: cuid(),
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
          amount: 'To Taste',//a number
        },
      ],
      content: 'Cut potatoes into 1/4 inch cubes. Bring a large pot of salted water to a boil. Add the potatoes, cover, and cook over medium-high heat until just tender (about 6 minutes), then drain. Place the drained potatoes on a paper towel-lined plate, and place a paper towel on top to absorb all of the moisture. Heat a large skillet over medium-high heat. Once hot, add butter and oil (vegan option: double the oil or use a vegan butter replacement). Add potatoes and cook without stirring for 3-5 minutes. Reduce to medium heat, add the remaining vegetables and continue to cook, stirring frequently for 15 minutes. Add paprika, salt, and pepper and stir to combine. Remove from heat and toss in your chopped parsley. Enjoy this hash with breakfast, in a burrito, or as an awesome side for dinner! ',
    },
    {
      id: cuid(),
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
          unit: 'cup',
        },
        {
          ingredient: 'White Vinegar',
          amount: 1.25,//a number
          unit: 'cup',
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
      id: cuid(),
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
      id: cuid(),
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
          unit: 'cup',
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
      id: cuid(),
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
      id: cuid(),
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
      id: cuid(),
      name: 'Buttermilk Panna Cotta with Fruit Gelée',
      recipeType: 'Dessert',
      ingredients: [
        {
          ingredient: 'Heavy Cream, divided',
          amount: 1.25,//a number
          unit: 'cup',
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
          unit: 'cup',
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
          amount: 'To Taste',//a number
        },
      ],
      content: 'Buttermilk Panna Cotta: Sprinkle the gelatin over ¼ cup of cold cream, allow to sit for 10 minutes or until hydrated. Combine sugar and remaining cream in saucepan and heat until sugar has dissolved and cream is hot (do not boil). Remove from heat and stir in gelatin until dissolved. Add buttermilk, stir and strain through fine mesh sieve. Cool to body temperature over ice water bath, stirring, then ladle 4oz into small dishes (glass is best to see the color of the fruit). Cover with plastic. Fruit Gelée: Sprinkle the gelatin over cold water, allow to sit for 10 minutes or until hydrated. Warm fruit purée, sugar, and salt over medium heat to dissolve sugar and salt completely. Add gelatin. Cool to body temperature then spoon mixture over set Panna Cottas (approximately 2 tbsp per dish). Allow to set for 8 hours or overnight. Recipe by Pastry Chef Laney Jahkel-Parrish of 300 East',
    },
    {
      id: cuid(),
      name: '',
      recipeType: '',
      ingredients: [
        {
          ingredient: '',
          amount: 3,//a number
          unit: lb,
        }
      ],
      content: '',
    },
    {
      id: cuid(),
      name: '',
      recipeType: '',
      ingredients: [
        {
          ingredient: '',
          amount: 3,//a number
          unit: lb,
        }
      ],
      content: '',
    },
    {
      id: cuid(),
      name: '',
      recipeType: '',
      ingredients: [
        {
          ingredient: '',
          amount: 3,//a number
          unit: lb,
        }
      ],
      content: '',
    },
    {
      id: cuid(),
      name: '',
      recipeType: '',
      ingredients: [
        {
          ingredient: '',
          amount: 3,//a number
          unit: lb,
        }
      ],
      content: '',
    },
    {
      id: cuid(),
      name: '',
      recipeType: '',
      ingredients: [
        {
          ingredient: '',
          amount: 3,//a number
          unit: lb,
        }
      ],
      content: '',
    },
    {
      id: cuid(),
      name: '',
      recipeType: '',
      ingredients: [
        {
          ingredient: '',
          amount: 3,//a number
          unit: lb,
        }
      ],
      content: '',
    },
    {
      id: cuid(),
      name: '',
      recipeType: '',
      ingredients: [
        {
          ingredient: '',
          amount: 3,//a number
          unit: lb,
        }
      ],
      content: '',
    },
    {
      id: cuid(),
      name: '',
      recipeType: '',
      ingredients: [
        {
          ingredient: '',
          amount: 3,//a number
          unit: lb,
        }
      ],
      content: '',
    },
    {
      id: cuid(),
      name: '',
      recipeType: '',
      ingredients: [
        {
          ingredient: '',
          amount: 3,//a number
          unit: lb,
        }
      ],
      content: '',
    },
    {
      id: cuid(),
      name: '',
      recipeType: '',
      ingredients: [
        {
          ingredient: '',
          amount: 3,//a number
          unit: lb,
        }
      ],
      content: '',
    },
    
    
  ]
}

export default RECIPES;