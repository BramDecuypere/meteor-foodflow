import { Recipe } from "/imports/api/recipes/recipes";
import { Ingredients } from "/enums/ingredients.enum";
import { Metrics } from "/enums/metrics.enum";
import { Departments } from "/enums/departments.enum";
import { Languages } from "/enums/languages.enum";
import { Labels } from "/enums/labels.enum";

export const recipesMock: Omit<Recipe, "_id">[] = [
  {
    language: Languages.NL,
    title: "Tomaat Mozerella",
    image:
      "https://img.static-rmg.be/a/food/image/q75/w640/h400/7077/tomaat-mozzarella.jpg",
    timings: {
      total: 30,
      active: 10,
    },
    labels: ["zomer", "hoofdgerecht", "light"],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.TOMATOES,
          amount: 4,
          metric: Metrics.PIECES,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.MOZERELLA,
          amount: 2,
          metric: Metrics.BALLS,
          departments: [Departments.CHEESE],
        },
        {
          name: Ingredients.BASIL_FRESH,
          amount: 2,
          metric: Metrics.BRANCHES,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Departments.OILS],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.BALSAMIC_SIROP,
          departments: [Departments.HERBS],
        },
      ],
    },
    steps: [
      {
        ingredients: [Ingredients.TOMATOES, Ingredients.MOZERELLA],
        description: "Snij de tomaten en de mozzarella in plakken.",
      },
      {
        ingredients: [Ingredients.BASIL_FRESH],
        description:
          "Schik de plakken tomaat en mozzarella afwisselend op een bord, en stop er ook blaadjes basilicum tussen.",
      },
      {
        ingredients: [Ingredients.BLACK_PEPPER, Ingredients.SEA_SALT],
        description: "Kruid met flink wat peper en een snuifje zeezout.",
      },
      {
        ingredients: [Ingredients.OLIVE_OIL],
        description: "Overgiet met een straaltje olijfolie. Serveer meteen.",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Roerei met zalm, kerstomaat, jonge spinazie en bieslook",
    image:
      "https://i.pinimg.com/originals/1c/23/57/1c23570cbb57efdf4f1128dc7c006f27.jpg",
    timings: {
      total: 15,
      active: 15,
    },
    labels: [Labels.SUMMER, Labels.BREAKFAST],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.TOMATOES_CHERRY,
          amount: 5,
          metric: Metrics.AMOUNT_ABOUT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.SMOKED_SALMON,
          amount: 40,
          metric: Metrics.GRAM,
          departments: [Departments.FISH],
        },
        {
          name: Ingredients.EGGS,
          amount: 4,
          metric: Metrics.AMOUNT,
          departments: [Departments.EGGS],
        },
        {
          name: Ingredients.CHIVE,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Departments.OILS],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.HERBS],
        },
      ],
    },
    steps: [
      {
        ingredients: [Ingredients.TOMATOES, Ingredients.MOZERELLA],
        description: "Snij de tomaten en de mozzarella in plakken.",
      },
      {
        ingredients: [Ingredients.BASIL_FRESH],
        description:
          "Schik de plakken tomaat en mozzarella afwisselend op een bord, en stop er ook blaadjes basilicum tussen.",
      },
      {
        ingredients: [Ingredients.BLACK_PEPPER, Ingredients.SEA_SALT],
        description: "Kruid met flink wat peper en een snuifje zeezout.",
      },
      {
        ingredients: [Ingredients.OLIVE_OIL],
        description: "Overgiet met een straaltje olijfolie. Serveer meteen.",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Lasagne met gegrilde groenten",
    image:
      "https://images.vrt.be/dako2017_1600s_j75/2017/03/06/082907e0-0252-11e7-8f5f-00163edf48dd.jpg",
    timings: {
      total: 150,
      active: 60,
    },
    labels: [Labels.ITALIAN, Labels.DINNER],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.ONION_WHITE,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.GARLIC,
          amount: 4,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.CHILI_RED,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.LAUREL,
          amount: 1,
          metric: Metrics.LEAVES,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.THYME,
          amount: 1,
          metric: Metrics.BRANCHES,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.TOMATO_PUREE,
          amount: 35,
          metric: Metrics.GRAM,
          departments: [Departments.PRESERVED],
        },
        {
          name: Ingredients.WINE_WHITE,
          amount: 0.5,
          metric: Metrics.DECILITER,
          departments: [Departments.WINE],
        },
        {
          name: Ingredients.TOMATO_PIECES,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.PRESERVED],
        },
        {
          name: Ingredients.TOMATO_PULP,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.PRESERVED],
        },
        {
          name: Ingredients.PAPRIKA_RED,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.COURGETTE,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.EGG_PLANT,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.MUSHROOMS,
          amount: 125,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.SPINACH_FRESH,
          amount: 150,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.CHEESE_PARMASAN,
          amount: 75,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.RICOTTA,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.PASTA_LASAGNA_LEAVES,
          amount: 9,
          metric: Metrics.AMOUNT,
          departments: [Departments.PASTA],
        },
        {
          name: Ingredients.HERBS_PROVENCAL,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.MOZERELLA,
          amount: 1,
          metric: Metrics.BALLS,
          departments: [Departments.CHEESE],
        },
      ],
    },
    steps: [
      {
        title: "Tomatensaus",
      },
      {
        ingredients: [Ingredients.ONION_RED, Ingredients.GARLIC],
        description: "Versnipper de ui & look in fijne stukjes",
      },
      {
        ingredients: [Ingredients.OLIVE_OIL],
        description:
          "Verhit een stoofpot op een matig vuur met een scheut olijfolie in. Doe de ui erin en roer regelmatig. Wanneer de ui glazig is, doe je de versnipperde look erbij.",
      },
      {
        ingredients: [Ingredients.CHILI_RED],
        description:
          "Versnipper de rode chilipeper en voeg toe (zonder de zaadjes als je niet van TE pikant houdt",
      },
      {
        ingredients: [Ingredients.LAUREL, Ingredients.THYME],
        description:
          "Voeg de laurier en tijm toe. Je kan de kruiden ook samenbinden met wat keukentouw.",
      },
      {
        ingredients: [Ingredients.TOMATO_PUREE],
        description:
          "Schep de geconcentreerde tomatenpuree toe en roer. Laat de puree kort meestoven, zodat de wrange smaak van de puree verdwijnt.",
      },
      {
        ingredients: [Ingredients.WINE_WHITE],
        description:
          "Schenk de witte wijn erbij (laat de alcohol enkele minuten verdampen).",
      },
      {
        ingredients: [Ingredients.TOMATO_PULP, Ingredients.TOMATO_PIECES],
        description: "Voeg de tomatenpulp en de tomatenstukjes toe.",
      },
      {
        description: "Kwartier pruttelen op een zacht vuur.",
      },
      {
        title: "Gegrilde groenten",
      },
      {
        description:
          "Zet de grillpan op een stevig vuur en laat ze minstens 10 minuten voorverwarmen. Hoe heter de pan is, hoe krachtiger je kan grillen.  Spoel alle groenten schoon.",
      },
      {
        ingredients: [Ingredients.PAPRIKA_RED],
        description:
          "Schil de rode paprika’s met een dunschiller. Verdeel de vruchten in kwarten en snij het steeltje en de bleke vliesjes aan de binnenzijde weg.",
      },
      {
        ingredients: [
          Ingredients.COURGETTE,
          Ingredients.EGG_PLANT,
          Ingredients.MUSHROOMS,
        ],
        description:
          "Snij de courgette en de aubergine overlangs in repen van een halve centimeter breed. Veeg de paddenstoelen schoon met een beetje papier (indien nodig) en snij ze in brede schijfjes.",
      },
      {
        ingredients: [Ingredients.OLIVE_OIL],
        description:
          "Leg de groenten op een schaal en besprenkel ze met een beetje olijfolie.",
      },
      {
        description:
          "Zet de dampkap op en grill de groenten in beurten. Laat de pan een mooi grillpatroon bakken in de stukken paprika, courgette en aubergine.",
      },
      {
        title: "Afwerking",
      },
      {
        description: "Verwarm de oven voor op 180°C.",
      },
      {
        ingredients: [Ingredients.SPINACH_FRESH],
        description:
          "Spoel de blaadjes spinazie in ruim water. Verwijder de taaiste bladstelen en de middennerf van de bladeren (of gebruik jonge spinazie).",
      },
      {
        ingredients: [
          Ingredients.CHEESE_PARMASAN,
          Ingredients.RICOTTA,
          Ingredients.BLACK_PEPPER,
        ],
        description:
          "Rasp de parmazaanse kaas en meng met de ricotta tot een stevig mengsel. Voeg gemalen peper toe naar smaak",
      },
      {
        description:
          "Neem de diepe ovenschaal en schep een laagje van de eerder gemaakte tomatensaus op de bodem.",
      },
      {
        ingredients: [Ingredients.PASTA_LASAGNA_LEAVES],
        description:
          "Schik er een vel pasta bovenop. Zorg dat het laagje lasagnevellen de hele bodem bedekt, maar vermijd dat de pastavellen elkaar overlappen.",
      },
      {
        description: "Strijk daarbovenop een laagje van het kaasmengsel.",
      },
      {
        description:
          "Leg een laag verse spinazieblaadjes op de kaas, en een deel van de gegrilde groenten. Puzzel ze samen, zodat de diverse groenten evenredig verdeeld zijn.",
      },
      {
        description:
          "Strooi er een beetje Provençaalse kruiden, een beetje grof zout en wat peper van de molen bovenop.",
      },
      {
        description: "Vervolgens is het de beurt aan een laagje tomatensaus.",
      },
      {
        description:
          "Herhaal de handelingen: lasagnevellen, kaasmengsel, spinazie, gegrilde groenten, kruiden, peper en zout.",
      },
      {
        description:
          "Bovenop het laatste laagje lasagnevellen komt een laagje kaasmengsel, eventueel nog een deel geroosterde groenten (zonder spinazie). Schenk er nog wat tomatensaus over.",
      },
      {
        ingredients: [Ingredients.MOZERELLA],
        description:
          "Werk de ovenschotel af met brokjes verse mozzarella. Verdeel ze over het hele oppervlak van de lasagne.",
      },
      {
        description:
          "Plaats de lasagne in de voorverwarmde oven van 180°C. Laat ze ongeveer 30 tot 40 minuten garen. Let wel: de exacte gaartijd is afhankelijk van de dikte van je lasagne. Gebruik een prikvork om te controleren of de lasagnevellen gaar (en dus zacht) zijn.",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Orzo met tomaat-lauriersaus",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblythesblog.com%2Fwp-content%2Fuploads%2F2015%2F05%2FIMG_0707.jpg&f=1&nofb=1&ipt=d5829bfc8cded3ff89e1ea0f8c7284aa1c49c1539578531ba1ee89494538fdfa&ipo=images",
    timings: {
      total: 30,
      active: 15,
    },
    labels: [Labels.ITALIAN, Labels.DINNER],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.ONION_RED,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.PASTA_ORZO,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.PASTA],
        },
        {
          name: Ingredients.TOMATOES_CHERRY,
          amount: 400,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.BOUILLON_VEGGIES,
          amount: 400,
          metric: Metrics.MILLILITER,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.LAUREL,
          amount: 2,
          metric: Metrics.LEAVES,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Ingredients.OLIVE_OIL],
        },
        {
          name: Ingredients.BASIL_FRESH,
          departments: [Departments.VEGETABLES_FRUITS],
        },
      ],
    },
    steps: [
      {
        description: "Verwarm de oven voor op 200 °C",
      },
      {
        ingredients: [Ingredients.ONION_WHITE],
        description:
          "Versnipper de ui in fijne stukjes en strooi in een diepe braadslee",
      },
      {
        ingredients: [Ingredients.BOUILLON_VEGGIES, Ingredients.PASTA_ORZO],
        description: "Roer de orzo en de groentebouillon erdoor",
      },
      {
        ingredients: [Ingredients.TOMATOES_CHERRY],
        description:
          "Halveer de kerstomaten en leg ze gelijkmatig op de orzo. (optioneel: takjes van de tomaten kan je er ook in leggen voor extra smaak)",
      },
      {
        ingredients: [Ingredients.BLACK_PEPPER, Ingredients.SEA_SALT],
        description: "Voeg peper en zout toe naar smaak",
      },
      {
        description: "Zet 20 minuten in de oven",
      },
      {
        description:
          "Zodra de orzo gaar is (al dente), haal je de tomatentakjes uit de braadslee en roer je olijfolie erdoor.",
      },
      {
        ingredients: [Ingredients.BASIL_FRESH],
        description: "Voeg de verse kruiden toe",
      },
      {
        description: "Serveer meteen",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Ratatouille uit de oven",
    image:
      "https://www.lekkerensimpel.com/wp-content/uploads/2016/10/IMG_5077.jpg.webp",
    timings: {
      total: 70,
      active: 15,
    },
    labels: [Labels.ITALIAN, Labels.DINNER],
    food: {
      servings: 4,
      ingredients: [
        {
          name: Ingredients.COURGETTE,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.EGG_PLANT,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.PAPRIKA_RED,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.ONION_RED,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.GARLIC,
          amount: 2,
          metric: Metrics.CLOVES,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OILS],
        },
        {
          name: Ingredients.SEA_SALT,
          amount: 2,
          metric: Metrics.TEASPOON,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.BASIL_FRESH,
          amount: 25,
          metric: Metrics.GRAM,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.TOMATO_PIECES,
          amount: 800,
          metric: Metrics.GRAM,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.BREADCRUMBS,
          amount: 75,
          metric: Metrics.GRAM,
          departments: [],
        },
        {
          name: Ingredients.CHEESE_PARMASAN,
          amount: 30,
          metric: Metrics.GRAM,
          departments: [Departments.CHEESE],
        },
        {
          name: Ingredients.BREAD,
          departments: [Departments.BREAD],
        },
      ],
    },
    steps: [
      {
        description: "Verwarm de oven voor op 200 °C",
      },
      {
        ingredients: [
          Ingredients.ONION_RED,
          Ingredients.COURGETTE,
          Ingredients.EGG_PLANT,
          Ingredients.PAPRIKA_RED,
          Ingredients.GARLIC,
          Ingredients.OLIVE_OIL,
          Ingredients.SEA_SALT,
          Ingredients.BLACK_PEPPER,
          Ingredients.BASIL_FRESH,
        ],
        description: `Versnij de ui en paprika naar keuze. Maak dunne rondjes van de ${Ingredients.COURGETTE} en ${Ingredients.EGG_PLANT}. Doe de rondjes van de ${Ingredients.EGG_PLANT} nog eens door twee (halve cirkels). Voeg de knoflook, olijfolie, zout, peper en basilicum toe`,
      },
      {
        ingredients: [Ingredients.TOMATO_PULP],
        description: "Overgiet met de tomatenblokjes en strijk glad",
      },
      {
        description: "Zet voor 30 minuten in de oven",
      },
      {
        ingredients: [Ingredients.BREADCRUMBS, Ingredients.CHEESE_PARMASAN],
        description:
          "Haal de schotel uit de oven en verdeel de broodkruimels en parmazaanse kaas.",
      },
      {
        description:
          "Verhoog de temperatuur van de oven naar 220 °C en zet nog eens 30 minuten in de oven.",
      },
      {
        description:
          "Haal uit de oven en laat 10 minuten rusten. Dien op met brood.",
      },
    ],
  },
];
