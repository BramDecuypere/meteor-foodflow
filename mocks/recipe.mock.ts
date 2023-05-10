import { Recipe } from "/imports/api/recipes/recipes";
import { Ingredients } from "/enums/ingredients.enum";
import { Metrics } from "/enums/metrics.enum";
import { Departments } from "/enums/departments.enum";
import { Languages } from "/enums/languages.enum";
import { Labels } from "/enums/labels.enum";

export const recipesMock: Omit<Recipe, "_id">[] = [
  {
    language: Languages.NL,
    title: "Spaghetti bolognese",
    image: "",
    timings: {
      total: 60 * 3 + 20,
      active: 20,
    },
    labels: ["zomer", "winter", "hoofdgerecht", "light"],
    food: {
      servings: 6,
      ingredients: [
        {
          name: Ingredients.CELERY,
          amount: 2,
          metric: Metrics.STALK,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CARROTS,
          amount: 2,
          metric: Metrics.STALK,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.ONION_WHITE,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.GROUND_BEEF,
          amount: 300,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
        },
        {
          name: Ingredients.GROUND_PIG,
          amount: 300,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
        },
        {
          name: Ingredients.TOMATO_PUREE,
          amount: 140,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.PASSATA,
          amount: 500,
          metric: Metrics.MILLILITER,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.BAY_LEAF,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.RED_WINE,
          amount: 150,
          metric: Metrics.MILLILITER,
          departments: [Departments.BEER_WINE_LIQUOR],
          optional: true,
        },
        {
          name: Ingredients.MILK,
          amount: 80,
          metric: Metrics.MILLILITER,
          departments: [Departments.DAIRY_AND_EGGS],
          optional: true,
        },
        {
          name: Ingredients.PASTA_TAGLIATELLE,
          amount: 600,
          metric: Metrics.GRAM,
          departments: [Departments.PASTA_SAUCE],
        },
      ],
    },
    steps: [
      // Increase the heat to medium and add the ground beef and pork. Stirring as the meat is cooking to break up the pieces. Once the meat has browned turned the heat up to high and add the wine.
      // Cook until the alcohol has evaporated (about 20-30 seconds) and the liquid has evaporated. Decrease the heat to medium/low and add the tomato paste, puree, salt, pepper and bay leaf. Gradually decrease the heat to the lowest setting cover and let simmer for three hours (the mixture should not boil). Stir occasionally.
      // After the time has passed remove the bay leaf and add the milk, heat thoroughly for a couple of minutes. Serve over cooked pasta. Enjoy!
      {
        ingredients: [
          Ingredients.CARROTS,
          Ingredients.CELERY,
          Ingredients.ONION_WHITE,
        ],
        description: "Snij wortelen, selder en ajuin fijn.",
      },
      {
        ingredients: [
          Ingredients.OLIVE_OIL,
          Ingredients.CARROTS,
          Ingredients.CELERY,
          Ingredients.ONION_WHITE,
        ],
        description:
          // In a medium to large heavy pot add the olive oil and chopped vegetables, cook covered on low heat (stirring occasionally) until onion is transparent.
          "In een grote pot op een laag vuur voeg je olijfolie en de gesneden groenten toe, zweet de groeten tot de ui doorzichtig is",
      },
      {
        ingredients: [Ingredients.GROUND_BEEF, Ingredients.GROUND_PIG],
        description:
          "Zet het vuur hoger en voeg het gehakt toe (mag ook gemengd gehakt zijn). Roer regelmatig tot het gehakt kleur krijgt en een beetje bruint",
      },
      {
        ingredients: [Ingredients.GROUND_BEEF, Ingredients.GROUND_PIG],
        description:
          "Zet het vuur hoger en voeg het gehakt toe (mag ook gemengd gehakt zijn). Roer regelmatig tot het gehakt kleur krijgt en een beetje bruint",
        optional: true,
      },
      {
        ingredients: [Ingredients.RED_WINE],
        description: "Voeg de rode wijn toe en kook tot de alcohol is verdampt",
      },
      {
        ingredients: [
          Ingredients.SALT,
          Ingredients.BLACK_PEPPER,
          Ingredients.TOMATO_PUREE,
        ],
        description:
          "Verlaag de temperatuur terug en voeg het zout, peper, de tomaten puree toe. Kook voor 2 minuten.",
      },
      {
        ingredients: [
          Ingredients.SALT,
          Ingredients.BLACK_PEPPER,
          Ingredients.TOMATO_PUREE,
        ],
        description:
          "Verlaag de temperatuur terug en voeg het zout, peper, de tomaten puree toe. Kook voor 2 minuten.",
      },
      {
        ingredients: [Ingredients.PASSATA, Ingredients.BAY_LEAF],
        description:
          "Voeg de passata en de laurier toe en laat de bolognese voor 3 uur sudderen. (NIET KOKEN!) Roer regelmatig.",
      },
      {
        optional: true,
        ingredients: [Ingredients.MILK, Ingredients.BAY_LEAF],
        description:
          "Verwijder de laurier en voeg de melk toe. Laat nog even goed doorkoken en serveer met pasta.",
      },
    ],
  },
  {
    language: Languages.NL,
    title:
      "Quinoa bowl with poached egg, bacon, avocado, cherry tomatoes and arugola",
    image: "",
    timings: {
      total: 30,
      active: 10,
    },
    labels: ["zomer", "hoofdgerecht", "light"],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.TOMATOES_CHERRY,
          amount: 10,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.SMOKED_BACON,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
        },
        {
          name: Ingredients.EGGS,
          amount: 2,
          metric: Metrics.PIECES,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.QUINOA,
          amount: 160,
          metric: Metrics.GRAM,
          departments: [Departments.GRAINS_BEANS_RICE],
        },
        {
          name: Ingredients.ARUGOLA,
          amount: 30,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.AVOCADO,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          amount: 4,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.RED_WINE_VINIGAR,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.LEMONS,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
      ],
    },
    steps: [
      {
        description: "verwarm de oven voor op 180°C",
      },
      {
        ingredients: [Ingredients.QUINOA],
        description: "Start met het koken van water voor de quinoa",
      },
      {
        ingredients: [Ingredients.TOMATOES_CHERRY],
        description:
          "In een grote ovenschaal voeg de volledige kerstomaten toe met wat olijfolie",
      },
      {
        ingredients: [Ingredients.SMOKED_BACON],
        description:
          "Schuif de tomaten aan de kant (of neem een andere schaal, de tomaten moeten in 1 laag blijven liggen) en voeg de spekjes toe",
      },
      {
        description:
          "Zet de ovenschaal uit de vorige stap voor 20 minuten in de oven",
      },
      {
        ingredients: [Ingredients.QUINOA],
        description:
          "Terwijl de de ovenschaal in de voorverwarmde oven staat, voeg je de quinoa toe aan het kokende water",
      },
      {
        ingredients: [
          Ingredients.OLIVE_OIL,
          Ingredients.RED_WINE_VINIGAR,
          Ingredients.LEMONS,
        ],
        description:
          "Maak een dressing voor wanneer de quinoa klaar is. Voeg 3 eenheden olijfolie toe aan 1 eenheid azijn en citroensap. Je hebt ongeveer 1 eetlepel per persoon nodig (of naar smaak)",
      },
      {
        ingredients: [Ingredients.ARUGOLA, Ingredients.AVOCADO],
        description:
          "Snij de avocado in blokjes of reepjes om te dresseren en was de rucola (indien nodig)",
      },
      {
        description:
          "Wanneer de quinoa klaar is (normaal ±10 minuten), mix je de dressing erdoor en dresseer je op de gewenste borden. De quinoa koelt een beetje af, maar dat is ok!",
      },
      {
        ingredients: [Ingredients.EGGS],
        description:
          "In dezelfde pot als de quinoa kan je nu opnieuw water koken om de eieren te pocheren (voor gebruiksgemak). Let wel op dat je best op een gasvuur/inductie kookt, anders kan dit weleens te lang duren om alles samen klaar te krijgen.",
      },
      {
        description:
          "(Optioneel): Indien gewenst kan je afwerken met peper en zout. En zwarte en witte sesam zaadjes. En feta/parmesaan.",
      },
    ],
  },
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
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.MOZERELLA,
          amount: 2,
          metric: Metrics.BALLS,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.BASIL_FRESH,
          amount: 2,
          metric: Metrics.BRANCHES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.BALSAMIC_SIROP,
          departments: [Departments.OTHER],
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
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.SMOKED_SALMON,
          amount: 40,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
        },
        {
          name: Ingredients.EGGS,
          amount: 4,
          metric: Metrics.AMOUNT,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.CHIVE,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.OTHER],
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
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.GARLIC,
          amount: 4,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CHILI_RED,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.BAY_LEAF,
          amount: 1,
          metric: Metrics.LEAVES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.THYME,
          amount: 1,
          metric: Metrics.BRANCHES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.TOMATO_PUREE,
          amount: 35,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.WINE_WHITE,
          amount: 0.5,
          metric: Metrics.DECILITER,
          departments: [Departments.BEER_WINE_LIQUOR],
        },
        {
          name: Ingredients.TOMATO_PIECES,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.PASSATA,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.PAPRIKA_RED,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.COURGETTE,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.EGG_PLANT,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.MUSHROOMS,
          amount: 125,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.SPINACH_FRESH,
          amount: 150,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CHEESE_PARMASAN,
          amount: 75,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.RICOTTA,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.PASTA_LASAGNA_LEAVES,
          amount: 9,
          metric: Metrics.AMOUNT,
          departments: [Departments.PASTA_SAUCE],
        },
        {
          name: Ingredients.HERBS_PROVENCAL,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.MOZERELLA,
          amount: 1,
          metric: Metrics.BALLS,
          departments: [Departments.DAIRY_AND_EGGS],
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
        ingredients: [Ingredients.BAY_LEAF, Ingredients.THYME],
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
        ingredients: [Ingredients.PASSATA, Ingredients.TOMATO_PIECES],
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
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.PASTA_ORZO,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.PASTA_SAUCE],
        },
        {
          name: Ingredients.TOMATOES_CHERRY,
          amount: 400,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.BOUILLON_VEGGIES,
          amount: 400,
          metric: Metrics.MILLILITER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.BAY_LEAF,
          amount: 2,
          metric: Metrics.LEAVES,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Ingredients.OLIVE_OIL],
        },
        {
          name: Ingredients.BASIL_FRESH,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
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
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.EGG_PLANT,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.PAPRIKA_RED,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.ONION_RED,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.GARLIC,
          amount: 2,
          metric: Metrics.CLOVES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.SEA_SALT,
          amount: 2,
          metric: Metrics.TEASPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.BASIL_FRESH,
          amount: 25,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.TOMATO_PIECES,
          amount: 800,
          metric: Metrics.GRAM,
          departments: [Departments.OTHER],
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
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.BREAD,
          departments: [Departments.BAKERY],
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
        ingredients: [Ingredients.PASSATA],
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
  {
    language: Languages.NL,
    title: "Fruit tiramisu",
    image: "",
    timings: {
      total: 25,
      active: 25,
    },
    labels: [Labels.ITALIAN, Labels.DESSERT],
    food: {
      servings: 4,
      ingredients: [
        {
          name: Ingredients.MIXED_RED_FRUIT,
          amount: 300,
          metric: Metrics.GRAM,
          departments: [Departments.FROZEN],
        },
        {
          name: Ingredients.MASCARPONE,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.COTTAGE_CHEESE,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.POWDERED_SUGAR,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.BAKING_COOKING],
        },
        {
          name: Ingredients.LIME,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.VANILLA_PODS,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.BAKING_COOKING],
        },
        {
          name: Ingredients.BISCUITS_CRUMBLED,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.BAKING_COOKING],
        },
      ],
    },
    steps: [
      {
        ingredients: [Ingredients.MIXED_RED_FRUIT],
        description:
          "Doe het (rood) fruit in een kookpot op een zacht vuur. Laat met een deksel op zacht sudderen voor ongeveer ±12 minuten. Roer af en toe.",
      },
      {
        ingredients: [
          Ingredients.MASCARPONE,
          Ingredients.COTTAGE_CHEESE,
          Ingredients.LIME,
        ],
        description:
          "Meng de platte kaas en de mascarpone + voeg de zeste van de limoen (biologische) limoen toe",
      },
      {
        ingredients: [Ingredients.VANILLA_PODS],
        description:
          "Snijd de zaden uit het vanillestokje en meng ze onder de massa in de vorige stap",
      },
      {
        ingredients: [Ingredients.MIXED_RED_FRUIT],
        description:
          "Haal het fruit uit stap 1 van het vuur en verdeel gelijk over de potjes",
      },
      {
        ingredients: [Ingredients.BISCUITS_CRUMBLED],
        description: "Verkruimel de koekjes",
      },
      {
        description:
          "Doe een laagje van de platte kaas & mascarpone massa in de kommetjes en werk af met de verkruimelde koekjes",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Gevulde puntparpirka's met quinoa",
    image: "",
    timings: {
      total: 20,
      active: 30,
    },
    labels: [Labels.ITALIAN, Labels.DINNER, Labels.LUNCH, Labels.SUMMER],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.VEGETABLE_STOCK,
          amount: 400,
          metric: Metrics.MILLILITER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.QUINOA,
          amount: 150,
          metric: Metrics.GRAM,
          departments: [Departments.GRAINS_BEANS_RICE],
        },
        {
          name: Ingredients.SWEET_PEPPER,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.SWEET_PEPPER,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.PINE_NUTS,
          amount: 60,
          metric: Metrics.GRAM,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.LEMONS,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.FETA,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.PANKO,
          amount: 4,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.ARUGOLA,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.TOMATOES_SEMI_SUNDRIED,
          amount: 50,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.GARLIC,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
      ],
    },
    steps: [
      {
        description: "Verwarm de oven voor op 200 °C",
      },
      {
        ingredients: [Ingredients.QUINOA, Ingredients.VEGETABLE_STOCK],
        description:
          "Doe de quinoa in een pot en doe de dubbele hoeveelheid groentenbouillon toe",
      },
      {
        description:
          "Breng aan de kook en verlaag het vuur (volg instructies op verpakking voor de duur)",
      },
      {
        ingredients: [Ingredients.SWEET_PEPPER],
        description:
          "Snijd de zoete puntpaprika in twee (langs de lange kant) en verwijder de zaadjes",
      },
      {
        ingredients: [Ingredients.OLIVE_OIL],
        description:
          "Wrijf ze in met een beetje olijfolie en doe ze voor 10 minuten in de oven (beetgaar)",
      },
      {
        ingredients: [Ingredients.FLAT_PARSLEY],
        description:
          "Spoel de peterselie. Verwijder de harde stelen en snij fijn.",
      },
      {
        description:
          "Wanneer de paprika's 10 minuten in de oven hebben gezeten, haal je ze eruit en zet je de gril op",
      },
      {
        ingredients: [
          Ingredients.FLAT_PARSLEY,
          Ingredients.GARLIC,
          Ingredients.LEMONS,
          Ingredients.PINE_NUTS,
          Ingredients.BLACK_PEPPER,
        ],
        description:
          "Meng peterselie, knoflook, citroensap, pijnboompitten, gemalen peper",
      },
      {
        ingredients: [Ingredients.FETA],
        description: "Brokkel de feta in de kom en meng opnieuw",
      },
      {
        ingredients: [Ingredients.PANKO],
        description:
          "Vul de paprika's met de mengeling en bestrooi ze met panko en een paar druppels olijfolie",
      },
      {
        description:
          "Laat 10 minuten grillen en kijk regelmatig (panko verbrandt sneller dan paneermeel)",
      },
      {
        ingredients: [Ingredients.ARUGOLA, Ingredients.TOMATOES_SEMI_SUNDRIED],
        description:
          "Haal uit de oven en laat even afkoelen, maak een snelle rucola salade met zongedroogde tomaten voor erbij",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Wortelsoep met linzen en indiaase kruiden",
    image: "",
    timings: {
      total: 50,
      active: 30,
    },
    labels: [Labels.INDIAN, Labels.DINNER, Labels.LUNCH, Labels.SUMMER],
    food: {
      servings: 6,
      ingredients: [
        {
          name: Ingredients.VEGETABLE_STOCK,
          amount: 40,
          metric: Metrics.DECILITER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.ONION_WHITE,
          amount: 3,
          metric: Metrics.DECILITER,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.BELL_PEPPER_RED,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CARROTS,
          amount: 1,
          metric: Metrics.KILO_GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.LENTILS,
          amount: 150,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.GINGER,
          amount: 5,
          metric: Metrics.CENTIMETER,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CURCUMA,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.CUMIN,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.GARAM_MASALA,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.CHILI_FLAKES,
          amount: 0.5,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.BAY_LEAF,
          amount: 5,
          metric: Metrics.LEAVES,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.THYME,
          amount: 2,
          metric: Metrics.BRANCHES,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.COCONUT_CREAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.NAAN_BREAD,
          departments: [Departments.BAKERY],
        },
        {
          name: Ingredients.GARLIC,
          amount: 2,
          metric: Metrics.CLOVES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.OTHER],
        },
      ],
    },
    steps: [
      {
        ingredients: [Ingredients.ONION_WHITE],
        description: "Pel de uien en snijd ze in grote stukken",
      },
      {
        description: "Stoof de uien aan op een laag vuur",
      },
      {
        ingredients: [Ingredients.GARLIC],
        description: "Pel de knoflook, snijd in stukken en laat meestoven",
      },
      {
        ingredients: [Ingredients.BELL_PEPPER_RED],
        description:
          "Snijd de paprika's in grove stukken en verwijder de zaden.",
      },
      {
        description: "Zet vuur zachter en voeg de paprika's toe",
      },
      {
        ingredients: [Ingredients.CARROTS],
        description: "Schil de wortelen en snij in grote stukken",
      },
      {
        description: "Zet het vuur terug hoger",
      },
      {
        ingredients: [Ingredients.CARROTS, Ingredients.LENTILS],
        description: "Voeg de wortelen en linzen toe",
      },
      {
        ingredients: [Ingredients.GINGER],
        description:
          "Schil de gember en snijd hem in stukken. Voeg toe aan de groenten",
      },
      {
        ingredients: [
          Ingredients.CURCUMA,
          Ingredients.CUMIN,
          Ingredients.GARAM_MASALA,
          Ingredients.CHILI_FLAKES,
          Ingredients.BAY_LEAF,
          Ingredients.THYME,
        ],
        description:
          "Kruid de groenten met kurkuma, komijnpoeder, garam masala, chilivlokken, de laurier en de tijm",
      },
      {
        description: "Meng alles en laat nog even verder stoven",
      },
      {
        ingredients: [Ingredients.VEGETABLE_STOCK],
        description:
          "Voeg het water met bouillon (of de verse bouillon) toe en breng aan de kook.",
      },
      {
        description: "Zet het vuur lager en laat ongeveer 30 minuten sudderen",
      },
      {
        description: "Verwijder laurier en thijm",
      },
      {
        description: "Mix alles tot een gladde massa",
      },
      {
        ingredients: [
          Ingredients.SEA_SALT,
          Ingredients.BLACK_PEPPER,
          Ingredients.CHILI_FLAKES,
        ],
        description: "Proef en kruid bij indien nodig",
      },
      {
        description:
          "Schep alles in grote kommen en giet er een scheutje kokosroom bij",
      },
      {
        ingredients: [Ingredients.NAAN_BREAD],
        description: "Serveer met het naanbrood",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Granola poeder",
    image: "",
    timings: {
      total: 25,
      active: 10,
    },
    labels: [Labels.BREAKFAST],
    food: {
      servings: 32,
      ingredients: [
        {
          name: Ingredients.OATMEAL,
          amount: 1,
          metric: Metrics.KILO_GRAM,
          departments: [Departments.GRAINS_BEANS_RICE],
        },
        {
          name: Ingredients.MIXED_UNSALTED_NUTS,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.MIXED_DRIED_FRUITS,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.MIXED_SEEDS,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.CACAO_POWDER,
          amount: 3,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.ORANGES,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
      ],
    },
    steps: [
      {
        description: "Voorverwarmde oven van 180 °C",
      },
      {
        ingredients: [
          Ingredients.OATMEAL,
          Ingredients.MIXED_UNSALTED_NUTS,
          Ingredients.MIXED_SEEDS,
        ],
        description:
          "Meng de noten, zaden en havermout in een ovenschaal of plaat",
      },
      {
        description:
          "Rooster voor ongeveer 15 - 20 min en schep ze halverwege eens om",
      },
      {
        ingredients: [Ingredients.MIXED_DRIED_FRUITS, Ingredients.CACAO_POWDER],
        description:
          "Roer de gedroogde vruchten erdoor samen et het cacao poeder",
      },
      {
        ingredients: [Ingredients.ORANGES],
        description:
          "Voeg de zeste van de sinaasappel erbij en meng alles tot een grof poeder in een blender",
      },
      {
        description:
          "Voeg alles samen in een glazen bokaal die luchtdicht kan worden gemaakt",
      },
      {
        title: "Snelle pannekoeken met dit poeder",
      },
      {
        ingredients: [
          Ingredients.BANANA,
          Ingredients.SELF_RAISING_WHOLE_WHEAT_FLOUR,
          Ingredients.EGGS,
        ],
        description:
          "2 volle eetlepels granolapoeder, 1 geprakte rijpe banaan, 1 volle eetlepel zelfzijzend volkoren bakmeel, 1 ei",
      },
      {
        title: "Snelle smoothie",
      },
      {
        ingredients: [Ingredients.BANANA, Ingredients.RASPBERRY],
        description:
          "50g granolapoeder, 200ml melk, 1 banaan, handvol diepvries frambozen",
      },
      {
        title: "Snelle havermoutpap",
      },
      {
        ingredients: [Ingredients.MILK],
        description: "50g granolapoeder, 200ml melk, vers fruit naar keuze",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Zoete aardappelsalade met rucola en tomaat",
    image: "",
    timings: {
      total: 70,
      active: 10,
    },
    labels: [Labels.LUNCH],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.SWEET_POTATO,
          amount: 600,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.TOMATOES,
          amount: 500,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.SPRING_ONION,
          amount: 4,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.ARUGOLA,
          amount: 50,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.FETA,
          amount: 40,
          metric: Metrics.GRAM,
          departments: [Departments.DAIRY_AND_EGGS],
        },
      ],
    },
    steps: [
      {
        description: "Voorverwarmde oven van 180 °C",
      },
      {
        ingredients: [Ingredients.SWEET_POTATO],
        description:
          "Was de zoete aardappels goed en leg ze in een braadslede voor 1 uur in de oven tot ze helemaal zacht zijn",
      },
      {
        ingredients: [Ingredients.TOMATOES, Ingredients.SPRING_ONION],
        description: "Snijd de tomaten en de lente ui in stukken",
      },
      {
        ingredients: [Ingredients.OLIVE_OIL, Ingredients.RED_WINE_VINIGAR],
        description:
          "Meng onder de tomaten en lente ui een eetlepel olijfolie en een scheutje rode wijnazijn",
      },
      {
        ingredients: [Ingredients.BLACK_PEPPER, Ingredients.SEA_SALT],
        description: "Kruid met peper en zout",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Kip met bruine rijst in een curry saus",
    image: "",
    timings: {
      total: 50,
      active: 40,
    },
    labels: [Labels.DINNER, Labels.INDIAN],
    food: {
      servings: 1,
      ingredients: [
        {
          name: Ingredients.CARROTS,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.COURGETTE,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.RED_AND_YELLOW_BELL_PEPPER,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.APPLE,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CHICKEN_BREAST,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
        },
        {
          name: Ingredients.BROWN_RICE,
          amount: 80,
          metric: Metrics.GRAM,
          departments: [Departments.GRAINS_BEANS_RICE],
        },
        {
          name: Ingredients.SHALLOT,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.COCONUT_MILK,
          amount: 1,
          metric: Metrics.DECILITER,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.CHICKEN_STOCK,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.COCONUT_FAT,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.CHICKEN_HERBS,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.NUTMEG,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.CURRY_POWDER,
          departments: [Departments.OTHER],
        },
      ],
    },
    steps: [
      {
        ingredients: [Ingredients.SHALLOT],
        description: "Versnipper de sjalotten",
      },
      {
        ingredients: [Ingredients.COCONUT_FAT],
        description:
          "1 eetlepel per persoon voor de sjalotten te stoven tot ze glazig worden",
      },
      {
        ingredients: [Ingredients.APPLE],
        description:
          "Versnipper de geschilde appel en voeg ze toe aan de pan. Laat ze even meestoven",
      },
      {
        ingredients: [Ingredients.CURRY_POWDER],
        description: "Voeg de curry poeder toe en roer goed om",
      },
      {
        ingredients: [Ingredients.CHICKEN_STOCK],
        description: "Voeg de kippenbouillon erbij",
      },
      {
        ingredients: [Ingredients.COCONUT_MILK],
        description:
          "Voeg de kokosmelk bij de saus en laat inkoken op een zacht vurutje. (minstens 20 minuten)",
      },
      {
        description:
          "Optioneel: Mix nu de volledige saus als deze heeft gekookt",
      },
      {
        ingredients: [Ingredients.BROWN_RICE],
        description:
          "Kook de bruine rijst volgens de handleiding (20 minuten, start nu) (indien gebruik rijst van 10 minuten, start na het snijden van alle groenten",
      },
      {
        ingredients: [
          Ingredients.CARROTS,
          Ingredients.COURGETTE,
          Ingredients.RED_AND_YELLOW_BELL_PEPPER,
        ],
        description:
          "Snij alle groenten in reepjes en voeg ze bij in de wok of pan",
      },
      {
        ingredients: [
          Ingredients.CHICKEN_BREAST,
          Ingredients.COCONUT_FAT,
          Ingredients.CHICKEN_HERBS,
        ],
        description:
          "Snij de kip in blokjes, kruid ze en bak ze in een wok of pan met vetstof",
      },
      {
        description:
          "Voeg 3el water toe per persoon en laat 10 minuutjes garen",
      },
      {
        description: "Dresseer de rijst met de saus erover en geniet",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Plattekaastaart met aardbeien",
    image: "",
    timings: {
      total: 60 * 4,
      active: 15,
    },
    labels: [Labels.DESSERT, Labels.SUMMER],
    food: {
      servings: 6,
      ingredients: [
        {
          name: Ingredients.STRAWBERRIES,
          amount: 400,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.BUTTER,
          amount: 50,
          metric: Metrics.GRAM,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.COTTAGE_CHEESE,
          amount: 500,
          metric: Metrics.GRAM,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.WIPPED_CREAM,
          amount: 250,
          metric: Metrics.MILLILITER,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.SEMOLINA_SUGAR,
          amount: 6,
          metric: Metrics.TABLESPOON,
          departments: [Departments.BAKING_COOKING],
        },
        {
          name: Ingredients.VANILLA_SUGAR,
          amount: 80,
          metric: Metrics.GRAM,
          departments: [Departments.BAKING_COOKING],
        },
        {
          name: Ingredients.GELATINE,
          amount: 12,
          metric: Metrics.GRAM,
          departments: [Departments.BAKING_COOKING],
        },
        {
          name: Ingredients.LEMONS,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.ORANGES,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.PETIT_BEURRE_BISCUITS,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.OTHER],
        },
      ],
    },
    steps: [
      {
        ingredients: [Ingredients.PETIT_BEURRE_BISCUITS],
        description: "Verkruimel de petit beurres",
      },
      {
        ingredients: [Ingredients.PETIT_BEURRE_BISCUITS, Ingredients.BUTTER],
        description: "Smelt de boter en meng de kruimels erdoor.",
      },
      {
        description:
          "Bedek hiermee de bodem van een springvorm en druk goed aan. Zet in de koelkast",
      },
      {
        ingredients: [
          Ingredients.WIPPED_CREAM,
          Ingredients.SEMOLINA_SUGAR,
          Ingredients.VANILLA_SUGAR,
        ],
        description:
          "Klop de slagroom samen met de suiker en vanillesuiker op.",
      },
      {
        ingredients: [Ingredients.COTTAGE_CHEESE],
        description: "Meng hieronder de platte kaas",
      },
      {
        ingredients: [Ingredients.ORANGES],
        description:
          "Was de sinaasappel goed en rasp de schil. En roer de schilletjes door de vorige stap",
      },

      {
        ingredients: [Ingredients.GELATINE],
        description: "Week de gelatine in koud water",
      },
      {
        ingredients: [Ingredients.LEMONS, Ingredients.ORANGES],
        description:
          "Pers de citroenen en geraspte appelsienen. Warm het op in de microgolf",
      },
      {
        ingredients: [Ingredients.GELATINE],
        description:
          "Neem de geweekte gelatine en los ze op in het opgewarmde sap van de citroenen en appelsienen",
      },
      {
        description: "Roer dit mengsel door het plattekaasmengsel",
      },
      {
        ingredients: [Ingredients.STRAWBERRIES],
        description:
          "Spoel de aardbeien en snij ze in stukjes (verwijder zeker ook de groene stukjes) Meng door het plattekaasmengsel",
      },
      {
        description:
          "Verdeel het volledige plattekaasmengsel nu over de gekoelde springvorm met de verkruimelde koekjes in",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Poke bowl zalm, mango, avocado, kerstomaten, wortel, sla",
    image: "",
    timings: {
      total: 20,
      active: 20,
    },
    labels: [Labels.DINNER, Labels.SUMMER],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.ICE_BERG_LETTUCE,
          amount: 25,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.MANGO,
          amount: 1,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CARROTS,
          amount: 1,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.TOMATOES_CHERRY,
          amount: 10,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.AVOCADO,
          amount: 1,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.SALMON,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
        },
        {
          name: Ingredients.SUSHI_RICE,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.GRAINS_BEANS_RICE],
        },
        {
          name: Ingredients.SOY_SAUCE,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.RICE_VINEGAR,
          amount: 1,
          metric: Metrics.TEASPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.SESAME_SEEDS,
          amount: 2,
          metric: Metrics.TEASPOON,
          departments: [Departments.OTHER],
          optional: true,
        },
        {
          name: Ingredients.ROASTED_ONIONS,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
          optional: true,
        },
      ],
    },
    steps: [
      {
        description:
          "Je kan een dubbele hoeveleheid maken en morgen nog eens van deze maaltijd genieten met minder werk door een dubbele portie klaar te maken.",
      },
      {
        description: "Voeg zelf andere dingen toe die je lekker vindt",
      },
      {
        ingredients: [Ingredients.SUSHI_RICE],
        description:
          "Doe de rijst in een kookpot (met deksel) met ongeveer 140% de hoeveelheid in water en laat koken",
      },
      {
        ingredients: [
          Ingredients.CARROTS,
          Ingredients.ICE_BERG_LETTUCE,
          Ingredients.MANGO,
          Ingredients.AVOCADO,
          Ingredients.TOMATOES_CHERRY,
          Ingredients.EDAMMAME,
        ],
        description:
          "Versnij alle groenten op de gewenste manier en bewaar ze in kommetjes",
      },
      {
        ingredients: [Ingredients.ICE_BERG_LETTUCE, Ingredients.SUSHI_RICE],
        description:
          "Vorm de basis van de poke bowl door de helft te vullen met sla en de andere helft met rijst",
      },
      {
        ingredients: [Ingredients.SALMON],
        description: "Bak de zalm in een beetje vet",
      },
      {
        ingredients: [Ingredients.SOY_SAUCE, Ingredients.RICE_VINEGAR],
        description:
          "Meng in een kommetje de sojasaus en de rijstazijn (met eventueel chilivlokken naar smaak) en verdeel over de rijst",
      },
      {
        ingredients: [Ingredients.ROASTED_ONIONS, Ingredients.SESAME_SEEDS],
        description:
          "Dresseer alle mixins en werk af met toppings naar keuze (optioneel)",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Pasta broccoli, olijven en zongedroogde tomaten",
    image: "",
    timings: {
      total: 35,
      active: 10,
    },
    labels: [Labels.LUNCH, Labels.SUMMER],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.BROCCOLI,
          amount: 1,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OLIVES_BLACK,
          amount: 75,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.TOMATOES_SEMI_SUNDRIED,
          amount: 75,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.PENNE,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.PASTA_SAUCE],
        },
        {
          name: Ingredients.BASIL_FRESH,
          amount: 30,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.LEMONS_BIO,
          amount: 1,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.OTHER],
        },
      ],
    },
    steps: [
      {
        description: "Verwarm de oven voor op 200°C",
      },
      {
        ingredients: [
          Ingredients.BROCCOLI,
          Ingredients.OLIVES_BLACK,
          Ingredients.TOMATOES_SEMI_SUNDRIED,
          Ingredients.OLIVE_OIL,
        ],
        description:
          "Leg de broccoliroosjes, olijven, tomaten, olie in een ovenschaal. Bestrooi met zeezout en schep alles goed om.",
      },
      { description: "Zet water op met zout voor de pasta" },
      {
        ingredients: [Ingredients.PENNE],
        description:
          "Wanneer het water kookt, voeg je de pasta toe volgens de verpakking om al dente te zijn. Zet een kleine hoeveelheid pastawater opzij, giet af en zet opzij.",
      },
      {
        description:
          "Haal het geheel uit de oven en bestrooi met de pijnboompitten. Zet nog 10 minuten terug.",
      },
      {
        description:
          "Haal de ovenschaal uit de oven en meng met de pasta, citroenzeste, citroensap, wat olijfolie en het pastawater.",
      },
      {
        description:
          "Voeg wat basilicum toe en bestrooi met versgemalen zwarte peper en wat extra zout naar smaak",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Shakshuka uit de oven",
    image: "",
    timings: {
      total: 60,
      active: 15,
    },
    labels: [Labels.BREAKFAST, Labels.DINNER, Labels.LUNCH, Labels.SUMMER],
    food: {
      servings: 4,
      ingredients: [
        {
          name: Ingredients.ONION_RED,
          amount: 1,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.PAPRIKA_RED,
          amount: 2,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.PAPRIKA_YELLOW,
          amount: 2,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.TOMATOES,
          amount: 300,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CHILI_RED,
          amount: 2,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.GARLIC,
          amount: 2,
          metric: Metrics.CLOVES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.SEA_SALT,
          amount: 1,
          metric: Metrics.TEASPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.CUMIN,
          amount: 1,
          metric: Metrics.TEASPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.PAPRIKA_POWDER,
          amount: 1,
          metric: Metrics.TEASPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.TOMATO_PIECES,
          amount: 400,
          metric: Metrics.GRAM,
          departments: [Departments.PASTA_SAUCE],
        },
        {
          name: Ingredients.EGGS,
          amount: 4,
          metric: Metrics.PIECES,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.BREAD,
          departments: [Departments.BAKERY],
        },
      ],
    },
    steps: [
      {
        description:
          "Dit gerecht kun je opdienen met elk soort brood (Probeer zelf eens naan brood te maken!)",
      },
      {
        description: "Verwarm de oven voor op 200°C",
      },
      {
        ingredients: [
          Ingredients.TOMATOES,
          Ingredients.PAPRIKA_RED,
          Ingredients.PAPRIKA_YELLOW,
          Ingredients.TOMATOES,
          Ingredients.CHILI_RED,
          Ingredients.GARLIC,
        ],
        description:
          "Versnij de groeten in grove stukken en doe ze in een braadslee",
      },
      {
        ingredients: [
          Ingredients.SEA_SALT,
          Ingredients.OLIVE_OIL,
          Ingredients.CUMIN,
          Ingredients.PAPRIKA_POWDER,
        ],
        description: "Meng onder de groenten het zout, de kruiden en olijfolie",
      },
      {
        description: "Zet de braadslee met de groenten voor 30 min in de oven",
      },
      {
        description:
          "Verlaag de temperatuur naar 180 °C, haal de braadslee uit de oven, meng alles nog eens goed onder elkaar",
      },
      {
        ingredients: [Ingredients.EGGS],
        description:
          "Maak kuiltjes en verdeel de eieren in de kuiltjes over de braadslee",
      },
      {
        description: "Zet alles nog eens in de oven voor ±10 minuten en geniet",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Mediteraanse courgette met olijven en feta",
    image: "",
    timings: {
      total: 45,
      active: 10,
    },
    labels: [Labels.DINNER, Labels.SUMMER],
    food: {
      servings: 4,
      ingredients: [
        {
          name: Ingredients.COURGETTE,
          amount: 6,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.FETA,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.TOMATOES_SEMI_SUNDRIED,
          amount: 140,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.OLIVES_BLACK,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.PANKO,
          amount: 40,
          metric: Metrics.GRAM,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.COUSCOUS,
          amount: 400,
          metric: Metrics.GRAM,
          departments: [Departments.GRAINS_BEANS_RICE],
        },
        {
          name: Ingredients.LEMON_JUICE,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.OTHER],
        },
      ],
    },
    steps: [
      {
        description: "Verwarm de oven voor op 200°C",
      },
      {
        ingredients: [Ingredients.COURGETTE],
        description:
          "Snij de courgettes in plakjes van ± 1cm en verdeel over een bakplaat met bakpapier.",
      },
      {
        description:
          "Indien er olie bij de feta/tomaten/olijven zit moet je geen extra olietoevoegen aan de courgette om ze mooi te laten bakken. Probeer er dan voor te zorgen dat de courgette bedekt is met wat van die olie.",
      },
      {
        ingredients: [
          Ingredients.FETA,
          Ingredients.TOMATOES_SEMI_SUNDRIED,
          Ingredients.OLIVES_BLACK,
          Ingredients.PANKO,
          Ingredients.BLACK_PEPPER,
        ],
        description:
          "Verdeel de feta, tomaten, olijven en panko over de bakplaat",
      },
      {
        description: "Kook water voor de couscous in de waterkoker",
      },
      {
        ingredients: [Ingredients.COUSCOUS],
        description:
          "In de laatste 10 minuten van de oventijd start je met de bereiding van de couscous. Giet de droge couscous in een kom en bedek met dezelfde hoeveelheid water. Laat 5 min wellen vooraleer je er wat boter (& citroensap) doorroert met een vork",
      },
      {
        description:
          "Voor nog meer smaak kan je wat bouillonpoeder toevoegen aan de couscous op hetzelfde moment dat je het kokende water toevoegd.",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Bordje gerookte zalm en komkommer",
    image: "",
    timings: {
      total: 15,
      active: 15,
    },
    labels: [Labels.LUNCH, Labels.SUMMER],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.CUCUMBER,
          amount: 1,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.DILLE,
          amount: 6,
          metric: Metrics.BRANCHES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.SMOKED_SALMON,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
        },
        {
          name: Ingredients.AVOCADO,
          amount: 1,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.RED_WINE_VINIGAR,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.HUTTEKASE,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
      ],
    },
    steps: [
      {
        ingredients: [Ingredients.CUCUMBER, Ingredients.RED_WINE_VINIGAR],
        description:
          "Snij de komkommer met de dunschiller in plkakken en meng ze in een kom met een snufje zeezout, wijnazijn om een snelle pikkel te maken",
      },
      {
        ingredients: [Ingredients.DILLE],
        description: "Pluk de dille en meng het grootste deel erdoor",
      },
      {
        ingredients: [Ingredients.SALMON],
        description: "Verdeel de gerookte zalm over de borden",
      },
      {
        ingredients: [Ingredients.AVOCADO],
        description:
          "Snij de avocado door twee, verwijder de pit en voorzie een halve avocade op ieder bord",
      },
      {
        ingredients: [Ingredients.CUCUMBER],
        description:
          "Dresseer de lichtgepkelde komkommer op de borden en verdeel het overblijvende vocht over de avocado's",
      },
      {
        ingredients: [Ingredients.HUTTEKASE],
        description:
          "Schep 2 eetlepels huttekase of creme fraiche per persoon op de zalm ",
      },
      {
        description:
          "Maal er wat zwarte peper naar smaak over en giet 1 theelepel olijfolie erover per bord",
      },
      {
        ingredients: [Ingredients.DILLE],
        description: "Garneer met wat overblijvende dille",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Mason Jar Salad - Mediterraans",
    image: "",
    timings: {
      total: 10,
      active: 10,
    },
    labels: [Labels.LUNCH, Labels.SUMMER],
    food: {
      servings: 4,
      ingredients: [
        {
          name: Ingredients.ARUGOLA,
          amount: 4,
          metric: Metrics.CUPS,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.TOMATOES_CHERRY,
          amount: 2,
          metric: Metrics.CUPS,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CUCUMBER,
          amount: 2,
          metric: Metrics.CUPS,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.QUINOA,
          amount: 2,
          metric: Metrics.CUPS,
          departments: [Departments.GRAINS_BEANS_RICE],
        },
        {
          name: Ingredients.CHICKPEAS,
          amount: 2,
          metric: Metrics.CUPS,
          departments: [Departments.GRAINS_BEANS_RICE],
        },
        {
          name: Ingredients.ONION_RED,
          amount: 1,
          metric: Metrics.CUPS,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.FLAT_PARSLEY,
          amount: 1,
          metric: Metrics.CUPS,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          amount: 0.25,
          metric: Metrics.CUPS,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.LEMON_JUICE,
          amount: 3,
          metric: Metrics.TABLESPOON,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.RED_WINE_VINIGAR,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.GARLIC,
          amount: 3,
          metric: Metrics.CLOVES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          amount: 0.25,
          metric: Metrics.TEASPOON,
          departments: [Departments.OTHER],
        },
      ],
    },
    steps: [
      {
        ingredients: [
          Ingredients.OLIVE_OIL,
          Ingredients.RED_WINE_VINIGAR,
          Ingredients.LEMON_JUICE,
          Ingredients.GARLIC,
          Ingredients.CUMIN,
          Ingredients.BLACK_PEPPER,
        ],
        description:
          "In een kleine kom meng je alle ingredienten voor de dressing en verdeel je ze over de mason jars",
      },
      {
        ingredients: [
          Ingredients.CHICKPEAS,
          Ingredients.ONION_RED,
          Ingredients.FLAT_PARSLEY,
        ],
        description:
          "Voeg al deze ingredienten samen toe aan de mason jars en geef en schud ze even door elkaar",
      },
      {
        ingredients: [
          Ingredients.TOMATOES_CHERRY,
          Ingredients.CUCUMBER,
          Ingredients.QUINOA,
          Ingredients.ARUGOLA,
        ],
        description:
          "Daarna voeg je in lagen deze ingredienten toe in deze volgorde",
      },
      {
        description: "Deze salade blijft 3-4 dagen goed in de frigo.",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Avocado spek en boontjes",
    image: "",
    timings: {
      total: 15,
      active: 15,
    },
    labels: [Labels.LUNCH, Labels.SUMMER],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.AVOCADO,
          amount: 1,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.SLUMBER_PEAS,
          amount: 300,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.LAMBS_LETUCE,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.SMOKED_BACON,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
        },
      ],
    },
    steps: [
      {
        description:
          "Zet een pot met water op om de sluimererwten te koken en een pan voor het spek",
      },
      {
        ingredients: [Ingredients.SMOKED_BACON],
        description: "Bak het spek krokant in de pan",
      },
      {
        ingredients: [Ingredients.SLUMBER_PEAS],
        description:
          "Kook de sluimererwten kort in het water met wat zout en olijfolie",
      },
      {
        ingredients: [Ingredients.LAMBS_LETUCE],
        description:
          "Meng de gewassen veldsla met wat olijfolie en kruid met peper en zout en verdeel over de borden",
      },
      {
        ingredients: [Ingredients.SMOKED_BACON, Ingredients.SLUMBER_PEAS],
        description:
          "Haal de sluimererwten uit het water en het krokante spek van het vuur en verdeel over de borden",
      },
      {
        ingredients: [Ingredients.AVOCADO],
        description: "Snij de avocado in blokjes en verdeel over de borden",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Bananencake",
    image: "",
    timings: {
      total: 30,
      active: 10,
    },
    labels: [Labels.BREAKFAST, Labels.LUNCH, Labels.SUMMER],
    food: {
      servings: 4,
      ingredients: [
        {
          name: Ingredients.BANANA,
          amount: 2,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OATMEAL,
          amount: 2,
          metric: Metrics.CUPS,
          departments: [Departments.GRAINS_BEANS_RICE],
        },
        {
          name: Ingredients.ALMOND_FLOUR,
          amount: 1,
          metric: Metrics.CUPS,
          departments: [Departments.BAKERY],
        },
        {
          name: Ingredients.COCONUT_MILK,
          amount: 2,
          metric: Metrics.CUPS,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.HONEY,
          amount: 3,
          metric: Metrics.TABLESPOON,
          departments: [Departments.BAKERY],
          optional: true,
        },
      ],
    },
    steps: [
      {
        description: "Verwarm de oven voor op 180°C",
      },
      {
        ingredients: [Ingredients.BANANA],
        description: "Snij de banaan in schijfjes",
      },
      {
        ingredients: [
          Ingredients.OATMEAL,
          Ingredients.ALMOND_FLOUR,
          Ingredients.COCONUT_MILK,
        ],
        description:
          "Meng de havermout met het amandelmeel, de kokosmelk en de schijfjes van de helft van het aantal bananen",
      },
      {
        ingredients: [Ingredients.BANANA],
        description: "Leg de andere helft van de banenen bovenop de cake",
      },
      {
        description: "Zet 20 minuten in een voorverwarmde oven van 180°C",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Drielagenpuree met gehakt",
    image: "",
    timings: {
      total: 40,
      active: 10,
    },
    labels: [Labels.DINNER, Labels.WINTER],
    food: {
      servings: 4,
      ingredients: [
        {
          name: Ingredients.POTATOES,
          amount: 400,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.BROCCOLI,
          amount: 2,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CARROTS,
          amount: 400,
          metric: Metrics.GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.ONION_WHITE,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.GROUND_BEEF,
          amount: 3,
          metric: Metrics.TABLESPOON,
          departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
        },
        {
          name: Ingredients.CREAM,
          amount: 3,
          metric: Metrics.DECILITER,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.BUTTER,
          amount: 150,
          metric: Metrics.GRAM,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.BREADCRUMBS,
          amount: 4,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
      ],
    },
    steps: [
      {
        description:
          "Je kan dit recept ook op voorhand maken en in een oven van 180 opwarmen",
      },
      {
        ingredients: [Ingredients.ONION_WHITE],
        description: "Snipper de ui fijn",
      },
      {
        ingredients: [Ingredients.GROUND_BEEF, Ingredients.ONION_WHITE],
        description:
          "Bak het gehakt samen met de gesnipperde ajuin. Kruid met peper en zout",
      },
      {
        ingredients: [
          Ingredients.BROCCOLI,
          Ingredients.POTATOES,
          Ingredients.CARROTS,
        ],
        description:
          "Reinig de groenten en snij ze in ongeveer gelijke stukken (hoe kleiner, hoe sneller gaar)",
      },
      {
        description:
          "Kook de verschillende groenten afzonderlijk gaar en pureer ze apart in de blender met wat room en boter tot je een smeuige puree bekomt. Kruid met peper en zout",
      },
      {
        description:
          "Leg in een ovenschotel eerst een laag wortelpuree, daarna het gehakt, daarboven op de broccoli en tot slot de aardappelpuree",
      },
      {
        description:
          "Wil je dit meteen eten: doe er paneermeel op en zet hem onder een hete gril",
      },
      {
        description:
          "Voor later? Zet in de frigo (max 2 dagen). Doe de paneermeel er op net voor je ze in de oven zet en warm op 30 minuten in een voorverwarmde oven",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Gehaktballen uit de oven met mozzarella en rode wijn",
    image: "",
    timings: {
      total: 110,
      active: 20,
    },
    labels: [Labels.DINNER, Labels.WINTER],
    food: {
      servings: 2,
      ingredients: [
        {
          name: Ingredients.LEEK,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.CARROTS,
          amount: 2,
          metric: Metrics.PIECES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.ONION_WHITE,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.GARLIC,
          amount: 1,
          metric: Metrics.CLOVES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.GROUND_BEEF,
          amount: 500,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT_FISH_AND_ALTERNATIVES],
        },
        {
          name: Ingredients.RED_WINE,
          amount: 1,
          metric: Metrics.CUPS,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.CINNAMON,
          amount: 1,
          metric: Metrics.TEASPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.PAPRIKA_POWDER,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.TOMATO_PIECES,
          amount: 400,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.PASSATA,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.CANNED_FOOD],
        },
        {
          name: Ingredients.BOUILLON_MEAT,
          amount: 100,
          metric: Metrics.MILLILITER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.ROSEMARY,
          amount: 1,
          metric: Metrics.BRANCHES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.BAY_LEAF,
          amount: 2,
          metric: Metrics.LEAVES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.MOZERELLA,
          amount: 1,
          metric: Metrics.BALLS,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.BASIL_FRESH,
          amount: 5,
          metric: Metrics.LEAVES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
          optional: true,
        },
      ],
    },
    steps: [
      {
        description: "Verwarm de oven op 150°C",
      },
      {
        ingredients: [
          Ingredients.LEEK,
          Ingredients.CARROTS,
          Ingredients.ONION_WHITE,
        ],
        description:
          "Snipper de ui fijn, was de wortels en prei en snij ze fijn",
      },
      {
        ingredients: [Ingredients.GROUND_BEEF],
        description:
          "Rol het gehakt in balletjes en bak ze krokant in een pan. Wanneer ze kleur hebben kan je naar de volgende stap gaan",
      },
      {
        ingredients: [
          Ingredients.LEEK,
          Ingredients.CARROTS,
          Ingredients.ONION_WHITE,
          Ingredients.CINNAMON,
          Ingredients.SALT,
          Ingredients.BLACK_PEPPER,
          Ingredients.PAPRIKA_POWDER,
        ],
        description:
          "Voeg de groenten toe en verlaag het vuur. Kruid met peper, zout, kaneel en paprikapoeder",
      },
      {
        ingredients: [Ingredients.GARLIC],
        description: "Voeg de fijngesneden look toe",
      },
      {
        ingredients: [Ingredients.RED_WINE],
        description: "Giet de rode wijn erbij en laat tot de helft inkoken",
      },
      {
        ingredients: [
          Ingredients.TOMATO_PIECES,
          Ingredients.BOUILLON_MEAT,
          Ingredients.PASSATA,
          Ingredients.BAY_LEAF,
          Ingredients.ROSEMARY,
        ],
        description:
          "Voeg wanneer de wijn is ingekookt, de bouillon, de tomatenblokjes, de passata en de kruiden toe",
      },
      {
        description:
          "Zet de pot voor 90 minuten in de oven met aluminiumfolie ",
      },
      {
        ingredients: [Ingredients.MOZERELLA],
        description:
          "Verhoog de temperatuur naar 200°C en verwijder de aluminiumfolie. Scheur de mozerella in stukjes en voeg toe aan de oven",
      },
      {
        description: "Werk af met wat basilicum blaadjes",
      },
    ],
  },
  {
    language: Languages.NL,
    title: "Ovenfrites met oregano en feta",
    image: "",
    timings: {
      total: 80,
      active: 20,
    },
    labels: [Labels.DINNER, Labels.WINTER, Labels.SUMMER, Labels.LUNCH],
    food: {
      servings: 6,
      ingredients: [
        {
          name: Ingredients.POTATOES_FLOURY,
          amount: 2,
          metric: Metrics.KILO_GRAM,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.SUNFLOUR_OIL,
          amount: 90,
          metric: Metrics.MILLILITER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.OLIVE_OIL,
          amount: 60,
          metric: Metrics.MILLILITER,
          departments: [Departments.OTHER],
        },
        {
          name: Ingredients.GARLIC,
          amount: 6,
          metric: Metrics.CLOVES,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.OREGANO,
          amount: 2,
          metric: Metrics.TEASPOON,
          departments: [Departments.FRESH_VEGETABLES_AND_FRUITS],
        },
        {
          name: Ingredients.FETA,
          amount: 150,
          metric: Metrics.GRAM,
          departments: [Departments.DAIRY_AND_EGGS],
        },
        {
          name: Ingredients.SEA_SALT,
          departments: [Departments.OTHER],
        },
      ],
    },
    steps: [
      {
        description: "Verhit de oven voor op 220°C",
      },
      {
        ingredients: [Ingredients.POTATOES_FLOURY],
        description:
          "Kook de aardappelen in schil voor 8 minuten. Giet ze af en laat 5 minuten rusten",
      },
      {
        ingredients: [
          Ingredients.POTATOES_FLOURY,
          Ingredients.SEA_SALT,
          Ingredients.SUNFLOUR_OIL,
        ],
        description:
          "Snij in frieten, doe in een grote kom en meng voorzichtig met de zonnebloemolie en het zout",
      },
      {
        description:
          "Bak ze voor ±45 minuten en schud halverwege op tot de de frieten goudbruin zijn.",
      },
      {
        ingredients: [Ingredients.GARLIC],
        description:
          "Verhit 5 minuten voor het einde de olijfolie met de knoflook in een kleine pan op een gemiddeld vuur. Bak de plakjes knoflook tot ze goudbruin zien. (±3 minuten)",
      },
      {
        description:
          "Giet de olie over de frieten en zet ze terug in de oven voor 4 minuten.",
      },
      {
        description: "Haal ze eruit en strooi er de feta en oregano over",
      },
    ],
  },
];
