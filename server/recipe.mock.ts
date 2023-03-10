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
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.CARROTS,
          amount: 2,
          metric: Metrics.STALK,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.ONION_WHITE,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.GROUND_BEEF,
          amount: 300,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT],
        },
        {
          name: Ingredients.GROUND_PIG,
          amount: 300,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT],
        },
        {
          name: Ingredients.TOMATO_PUREE,
          amount: 140,
          metric: Metrics.GRAM,
          departments: [Departments.PRESERVED],
        },
        {
          name: Ingredients.PASSATA,
          amount: 500,
          metric: Metrics.MILLILITER,
          departments: [Departments.PRESERVED],
        },
        {
          name: Ingredients.BAY_LEAF,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.RED_WINE,
          amount: 150,
          metric: Metrics.MILLILITER,
          departments: [Departments.WINE],
          optional: true,
        },
        {
          name: Ingredients.MILK,
          amount: 80,
          metric: Metrics.MILLILITER,
          departments: [Departments.MILK],
          optional: true,
        },
        {
          name: Ingredients.PASTA_TAGLIATELLE,
          amount: 600,
          metric: Metrics.GRAM,
          departments: [Departments.PASTA_RICE_GRAINS],
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
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.SMOKED_BACON,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT],
        },
        {
          name: Ingredients.EGGS,
          amount: 2,
          metric: Metrics.PIECES,
          departments: [Departments.EGGS],
        },
        {
          name: Ingredients.QUINOA,
          amount: 160,
          metric: Metrics.GRAM,
          departments: [Departments.PASTA_RICE_GRAINS],
        },
        {
          name: Ingredients.ARUGOLA,
          amount: 30,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.AVOCADO,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          amount: 4,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OILS],
        },
        {
          name: Ingredients.RED_WINE_VINIGAR,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.OILS],
        },
        {
          name: Ingredients.LEMONS,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.VEGETABLES_FRUITS],
        },
      ],
    },
    steps: [
      {
        description: "verwarm de oven voor op 180??C",
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
          "Wanneer de quinoa klaar is (normaal ??10 minuten), mix je de dressing erdoor en dresseer je op de gewenste borden. De quinoa koelt een beetje af, maar dat is ok!",
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
          name: Ingredients.BAY_LEAF,
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
          name: Ingredients.PASSATA,
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
          departments: [Departments.PASTA_RICE_GRAINS],
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
          "Schil de rode paprika???s met een dunschiller. Verdeel de vruchten in kwarten en snij het steeltje en de bleke vliesjes aan de binnenzijde weg.",
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
        description: "Verwarm de oven voor op 180??C.",
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
          "Strooi er een beetje Proven??aalse kruiden, een beetje grof zout en wat peper van de molen bovenop.",
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
          "Plaats de lasagne in de voorverwarmde oven van 180??C. Laat ze ongeveer 30 tot 40 minuten garen. Let wel: de exacte gaartijd is afhankelijk van de dikte van je lasagne. Gebruik een prikvork om te controleren of de lasagnevellen gaar (en dus zacht) zijn.",
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
          departments: [Departments.PASTA_RICE_GRAINS],
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
          name: Ingredients.BAY_LEAF,
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
        description: "Verwarm de oven voor op 200 ??C",
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
        description: "Verwarm de oven voor op 200 ??C",
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
          "Verhoog de temperatuur van de oven naar 220 ??C en zet nog eens 30 minuten in de oven.",
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
          departments: [Departments.FREEZER],
        },
        {
          name: Ingredients.MASCARPONE,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.MILK],
        },
        {
          name: Ingredients.COTTAGE_CHEESE,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.MILK],
        },
        {
          name: Ingredients.POWDERED_SUGAR,
          amount: 2,
          metric: Metrics.TABLESPOON,
          departments: [Departments.SUGAR],
        },
        {
          name: Ingredients.LIME,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.VANILLA_PODS,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.BISCUITS_CRUMBLED,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.BISCUITS],
        },
      ],
    },
    steps: [
      {
        ingredients: [Ingredients.MIXED_RED_FRUIT],
        description:
          "Doe het (rood) fruit in een kookpot op een zacht vuur. Laat met een deksel op zacht sudderen voor ongeveer ??12 minuten. Roer af en toe.",
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
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.QUINOA,
          amount: 150,
          metric: Metrics.GRAM,
          departments: [Departments.PASTA_RICE_GRAINS],
        },
        {
          name: Ingredients.SWEET_PEPPER,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.SWEET_PEPPER,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.PINE_NUTS,
          amount: 60,
          metric: Metrics.GRAM,
          departments: [Departments.PASTA_RICE_GRAINS],
        },
        {
          name: Ingredients.LEMONS,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.FETA,
          amount: 200,
          metric: Metrics.GRAM,
          departments: [Departments.CHEESE],
        },
        {
          name: Ingredients.PANKO,
          amount: 4,
          metric: Metrics.TABLESPOON,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.ARUGOLA,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.SUN_DRIED_TOMATOES,
          amount: 50,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.OLIVE_OIL,
          departments: [Departments.OILS],
        },
        {
          name: Ingredients.BLACK_PEPPER,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.GARLIC,
          departments: [Departments.VEGETABLES_FRUITS],
        },
      ],
    },
    steps: [
      {
        description: "Verwarm de oven voor op 200 ??C",
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
        ingredients: [Ingredients.ARUGOLA, Ingredients.SUN_DRIED_TOMATOES],
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
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.ONION_WHITE,
          amount: 3,
          metric: Metrics.DECILITER,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.BELL_PEPPER_RED,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.CARROTS,
          amount: 1,
          metric: Metrics.KILO_GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.LENTILS,
          amount: 150,
          metric: Metrics.GRAM,
          departments: [Departments.PRESERVED],
        },
        {
          name: Ingredients.GINGER,
          amount: 5,
          metric: Metrics.CENTIMETER,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.CURCUMA,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.CUMIN,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.GARAM_MASALA,
          amount: 1,
          metric: Metrics.TABLESPOON,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.CHILI_FLAKES,
          amount: 0.5,
          metric: Metrics.TABLESPOON,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.BAY_LEAF,
          amount: 5,
          metric: Metrics.LEAVES,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.THYME,
          amount: 2,
          metric: Metrics.BRANCHES,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.COCONUT_CREAM,
          departments: [Departments.PRESERVED],
        },
        {
          name: Ingredients.NAAN_BREAD,
          departments: [Departments.BREAD],
        },
        {
          name: Ingredients.GARLIC,
          amount: 2,
          metric: Metrics.CLOVES,
          departments: [Departments.VEGETABLES_FRUITS],
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
          departments: [Departments.NUTS],
        },
        {
          name: Ingredients.MIXED_UNSALTED_NUTS,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.NUTS],
        },
        {
          name: Ingredients.MIXED_DRIED_FRUITS,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.NUTS],
        },
        {
          name: Ingredients.MIXED_SEEDS,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.NUTS],
        },
        {
          name: Ingredients.CACAO_POWDER,
          amount: 3,
          metric: Metrics.TABLESPOON,
          departments: [Departments.NUTS],
        },
        {
          name: Ingredients.ORANGES,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
      ],
    },
    steps: [
      {
        description: "Voorverwarmde oven van 180 ??C",
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
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.TOMATOES,
          amount: 500,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.SPRING_ONION,
          amount: 4,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.ARUGOLA,
          amount: 50,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.FETA,
          amount: 40,
          metric: Metrics.GRAM,
          departments: [Departments.CHEESE],
        },
      ],
    },
    steps: [
      {
        description: "Voorverwarmde oven van 180 ??C",
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
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.COURGETTE,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.RED_AND_YELLOW_BELL_PEPPER,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.APPLE,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.CHICKEN_BREAST,
          amount: 100,
          metric: Metrics.GRAM,
          departments: [Departments.MEAT],
        },
        {
          name: Ingredients.BROWN_RICE,
          amount: 80,
          metric: Metrics.GRAM,
          departments: [Departments.PASTA_RICE_GRAINS],
        },
        {
          name: Ingredients.SHALLOT,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.COCONUT_MILK,
          amount: 1,
          metric: Metrics.DECILITER,
          departments: [Departments.MILK],
        },
        {
          name: Ingredients.CHICKEN_STOCK,
          amount: 0.5,
          metric: Metrics.AMOUNT,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.COCONUT_FAT,
          departments: [Departments.OILS],
        },
        {
          name: Ingredients.CHICKEN_HERBS,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.NUTMEG,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.CURRY_POWDER,
          departments: [Departments.HERBS],
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
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.BUTTER,
          amount: 50,
          metric: Metrics.GRAM,
          departments: [Departments.MILK],
        },
        {
          name: Ingredients.COTTAGE_CHEESE,
          amount: 500,
          metric: Metrics.GRAM,
          departments: [Departments.MILK],
        },
        {
          name: Ingredients.WIPPED_CREAM,
          amount: 250,
          metric: Metrics.MILLILITER,
          departments: [Departments.MILK],
        },
        {
          name: Ingredients.SEMOLINA_SUGAR,
          amount: 6,
          metric: Metrics.TABLESPOON,
          departments: [Departments.HERBS],
        },
        {
          name: Ingredients.VANILLA_SUGAR,
          amount: 80,
          metric: Metrics.GRAM,
          departments: [Departments.SUGAR],
        },
        {
          name: Ingredients.GELATINE,
          amount: 12,
          metric: Metrics.GRAM,
          departments: [Departments.BISCUITS],
        },
        {
          name: Ingredients.LEMONS,
          amount: 2,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.ORANGES,
          amount: 1,
          metric: Metrics.AMOUNT,
          departments: [Departments.VEGETABLES_FRUITS],
        },
        {
          name: Ingredients.PETIT_BEURRE_BISCUITS,
          amount: 250,
          metric: Metrics.GRAM,
          departments: [Departments.BISCUITS],
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
];
