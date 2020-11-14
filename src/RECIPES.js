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