
export const profiles = {
  cmgt: [
    {
      name: "Janessa Labeur",
      title: "Prototype",
      detailOne: "Web developer",
      detailTwo: "Detail numero twee",
      github: "https://github.com/janesssa",
      linkedIn: "https://www.linkedin.com/in/janessalabeur/",
      img: {
        src: "/img/profiles/janessa.png",
        alt: "Avatar van Janessa",
        width: "50px"
      }
    },

    {
      name: "Rachelle Bosman",
      title: "Design",
      detailOne: "Vind zichzelf er grappig",
      detailTwo: "Is niet grappig",
      github: "https://github.com/rachellebosman",
      linkedIn: "https://www.linkedin.com/in/rachelle-bosman-6094b91b/",
      img: {
        src: "/img/profiles/Rachelle.png",
        alt: "Avatar van Rachelle",       
        width: "50px"
      }
    },

    {
      name: "Zoë de Waard",
      title: "",
      detailOne: "Front-end developer",
      detailTwo: "lievelingskleur is geel",
      github: "https://github.com/Sweetpurple616",
      linkedIn: "https://nl.linkedin.com/in/zo%C3%AB-de-waard-973b22108",
      img: {
        src: "/img/profiles/Zoe.png",
        alt: "Avatar van Zoe",
        width: "50px"
      }
    }
  ],
  cmd: [
    {
      name: "Coen van Pelt",
      title: "",
      detailOne: "UX & UI design",
      detailTwo: "Wanna be kok",
      github: "https://github.com/coenvp",
      linkedIn: "https://nl.linkedin.com/in/coen-van-pelt",
      img: {
        src: "/img/profiles/Coen.png",
        alt: "Avatar van Coen",   
        width: "50px"
      }
    },
    {
      name: "Jonathan van Arkel",
      title: "",
      github: "https://github.com/Yonathanvanarkel",
      linkedIn: "https://nl.linkedin.com/in/jonathan-van-arkel-3a6b35157",
      detailOne: "Basketball mijn een ding",
      detailTwo: "Technie/Foodie",
      img: {
        src: "/img/profiles/Jonathan.png",
        alt: "Avatar van Jonathan",  
        width: "50px"
      }
    }
  ]
};

// Dit kan echt op 20 verschillende manieren worden gestyled. Ligt eraan hoeveel info we willen meegeven.
// Denk dat het wellicht handig is om naar Tuckman's model te kijken

// sectionTitle: {
//   title: string,
//   intro: string,
//   contentBlocks: [
//     {
//       content: {
//         title: string,
//         text: string
//       },
//       icon?: {
//         src: string,
//         alt: string,
//         width?: string,
//         height?: string,
//         className?: string
//       }
//     }
//   ]
// }

export const intro = {
  firstTitle: "Social",
  secondTitle: "Warming",
  text: "Op deze pagina staat vastgelegd hoe de groep social warming te werk gaat met de design challenge : ‘Maak een digitale toepassing over het thema social cooling voor Bevrijdingsdag 5 mei 2020.’. Op deze onepager staat ons creatief proces vastgelegd."
}

export const progress = {
  header: {
    firstTitle: "Social",
    secondTitle: "Warming",
    intro: "Op deze pagina staat vastgelegd hoe de groep social warming te werk gaat met de design challenge : ‘Maak een digitale toepassing over het thema social cooling voor Bevrijdingsdag 5 mei 2020.’. Op deze onepager staat ons creatief proces vastgelegd."    
  },
  designTactics: {
    firstTitle: "Ontwerp",
    secondTitle: "technieken",
    intro: "Dit is een overzicht van alle creatieve technieken die we hebben gebruikt om onze concepten te ontwikkelen.",
    bgColor: "black",
    contentBlocks: [
      {
        content: {
          title: "Mindmap",
          subtitle: "Optioneel?",
          text: "Mindmapping is een creatieve techniek die helpt bij het leggen van connecties bij een onderwerp. In de mindmap staat een onderwerp centraal. Dit onderwerp breed je uit met verschillende takken, deze takken zijn woorden die je associeert bij het onderwerp. Deze takken worden nu het onderwerp van de volgende vertakkingen. Zo heb je uiteindelijk een heel web met begrippen sommige hiervan hebben met het hoofdonderwerp te maken en sommige ook niet. Wij hebben deze methode gebruikt omdat het een overzicht van het onderwerp geeft en alle onderdelen hier erbij hoorden. En tijdens het maken van de mindmapping kom je er achter als groep waar je nog dieper op in moet gaan.",
          img: {
            src: "/img/mindmapping.png",
            alt: "foto van mindmap"
          }
        }
      },
      {
        content: {
          title: "Forced perspective",
          text: "Bij deze techniek ga je op zoek naar de onderliggende onderwerpen van een thema. Per thema schrijf je woorden op die bij je opkomen als je aan het thema denkt, zoveel mogelijk en zo snel mogelijk. Als dit voor alle thema’s is gedaan stem je per thema op de woorden die jij het best vindt. Zo eindige je per thema met een woord. Met deze woorden ga je concepten bedenken. Wij hebben als team deze techniek gebruikt omdat het ons werd aangeraden. En het forceert je om anders naar het onderwerp te kijken en je moet creatieve denken om deze woorden samen te brengen in een concept.",
          imgs: [
            {
              src: "/img/forced1.png",
              alt: "eerste foto van forced perspective"
            },
            {
              src: "/img/forced2.png",
              alt: "tweede foto van forced perspective"
            }, 
            {
              src: "/img/forced3.png",
              alt: "derde foto van forced perspective"
            }
          ]
        }
      },
      {
        content: {
          title: "3 x 3 x 3",
          text: "Een 3 x 3 x 3 is bedoeld om concepten te genereren, aan het einde van de sessie heb je per persoon 3 concepten. Per concept krijg je 3 minuten om deze te bedenken. Na 3 keer 3 minuten presenteer je de concepten en beoordeeld je deze.. Wij hebben deze techniek gebruikt omdat het je geforceerd om na te denken en concepent te maken. "
        }
      },
      {
        content: {
          title: "COCD box",
          text: "De COCD box wordt gebruikt voor het beoordelen van concepten. Je maakt een kruis en zet 4 waarden aan elke kant van de lijnen. Als de waarden op dezelfde lijn liggen zijn het tegenovergestelde van elkaar. Per concept beoordeeld je waar deze hoort binnen de box. En aan de hand hiervan kan je de waarden van een concept achterhalen. Hiermee kan je makkelijker de beslissing maken met welke concepten je verder wilt gaan. WIj hebben deze techniek gebruikt om de concepten van de 3 x 3 x 3 sessie te beoordelen.",
          img: {
            src: "/img/COCD-box.png",
            alt: "foto van de COCD box"
          }
        }
      },
      {
        content: {
          title: "Sketchboarding",
          text: "Sketchboarding is een techniek die helpt bij het visualiseren van concepten. In plaats van tekst ga je je concept visueel maken. Met tekening laat je de flow zien van het concept. Dit zorgt ervoor dat het concept duidelijker. Wij hebben deze techniek gebruikt om onze concepten beter aan elkaar te kunnen presenteren. En op elkaars concepten te kunnen bouwen zodat we een definitieve sketch per concept konden maken.",
          img: {
            src: "/img/sketchboarding.png",
            alt: "foto van de COCD box"
          }
        }
      },
    ]
  },
  research: {
    firstTitle: "Onderzoek",
    secondTitle: "& research",
    intro: "Onderstaande technieken hebben we gebruikt om te ontwerpen.",
    bgColor: "white",
    contentBlocks: [
      {
        content: {
          title: "Doelgroep",
          icon: {
            src: "/img/icons/person.svg",
            alt: "icon van een persoon",
          },
          text: "Onze gebruikers zijn het de mensen die naar het festival gaan. Wij richten ons op de mensen die online gebruik maken van forms, accounts en andere services waar je je data bij weg geeft."
        }
      },
      {
        content: {
          title: "Stakeholders",
          icon: {
            src: "/img/icons/group.svg",
            alt: "icon van een groep",
          },
          text: "De stakeholders van dit project zijn : Provincie Zuid-holland, databrokers en nonprofits die strijden voor data regels",
        }
      },
      {
        content: {
          title: "Deskresearch",
          icon: {
            src: "/img/icons/search.svg",
            alt: "icon van een vergrootglas",
          },
          text: "Aan de hand van de mindmapping hebben we deskresearch gedaan. We hebben de 5 takken van vrijheid zijn de 5 hoofdonderwerpen van onze deskresearch geworden. Met het deskresearch zijn we dieper op deze onderwerpen gekomen. En wat deze onderwerpen betekenen. De ondervindingen vanuit het onderzoek hebben we gedeeld met elkaar en aan de hand hiervan hebben we een overzicht met al onze insights gemaakt die we uit het deskresearch hebben gehaald. De insights die we hier uit hebben gehaald zijn :",
          list: ["De route die data aflegt is ontransparant", "De waarden van data is variable", "De gebruiker is niet bewust van de schade die data kan opleveren"]
        }
      }
    ]
  },
  designCriteria: {
    firstTitle: "Ontwerp",
    secondTitle: "Criteria",
    intro: "Aan de hand van deze insights en de debriefing van de opdracht hebben we ontwerp criteria's opgesteld",
    bgColor: "red",
    contentBlocks: [
      {
        content: {
          text: "Het product moet interactie met de gebruiker mogelijk maken.",
        }
      },
      {
        content: {
          text: "Het product moet een combinatie zijn van fysiek en digitaal.", 
        },
      },
      {
        content: {
          text: "Het product moet 'ervaren' kunnen worden.", 
        }
      },
      {
        content: {
          text: "Mobiel. Het product zal gepresenteerd worden tijdens het Bevrijdingsfestival Rotterdam, om deze reden moet het product mobiel zijn. Een vaste installatie is niet gewenst.", 
        },
      },
      {
        content: {
          text: "Het product moet bewustwording creëren met betrekking tot het thema 'social cooling', en de impact van de door de gebruiker ingevoerde data weergeven.",
        },
      },
      {
        content: {
          text: "De waarde van data, en de route die de data aflegt moet weerspiegeld worden in het product.",
        },
      },
    ]
  },
  concepts: {
    firstTitle: "Drie",
    secondTitle: "Concepten",
    intro: "Aan de hand van de insights hebben we een forced fitting sessie gedaan met als onderwerpen : route onbekend, verschillende en schaden. Met het team hebben we zoveel mogelijk woorden per onderwerp opgeschreven die hierbij passen. Per onderwerp hebben we gestemd over welke woorden wij het beste vonden. Tussenstop, jezelf zijn en repareren. Met deze woorden zijn hebben we een 3 x 3 x 3 sessie gaan doen. Deze concept ideeën hebben we beoordeeld met de COCD box hieruit kwamen een aantal concept richting die we interessant vonden : persona’s opstellen en waarde data visualiseren, experience, gebruik maken van zintuigen en waarde van je data laten zien doormiddel van iets krijgen/kopen. En hierbij zijn we concepten gaan sketchboarden. Deze concepten hebben we besproken en samen zijn we tot 3 verschillende concepten gekomen. ",
    bgColor: "white",
    contentBlocks: [
      {
        content: {
          title: "Concept 1.",
          subtitle: "Hartwaarde",
          text: "De gebruiker wordt aan een hartslag meter gekoppeld, deze hartslag wordt doormiddel van een led hartje aan de gebruiker getoond. Wij analyseren deze hartslag en trekken aannames hieruit. Deze aannames laten we in het led hartje zien. Daarna geven we uitleg over de aannames en hoe deze aannames door databroker bedrijven wordt vastgesteld en verkocht.",    
          img: {
            src: "/img/concept1.png",
            alt: "visualisatie van het concept hartwaarde"
          }
        },
        content: {
          text: "De gebruikt krijgt snel feedback. Het project is laagdrempelig, iedereen met een hartslag kan er gebruik van maken en het maakt een connecties die mensen vaak niet voorafbedenken",
        },
        content: {
          text: "De installatie laat zien hoe makkelijk we onschuldige informatie zoals onze hartslag weg geven en de gevolgen hiervan. Zo kunnen belangrijke aannames vanuit een hartslag kunnen genomen. Zoals heb je een lage hartslag dan ben je waarschijnlijk een sporter en bij onregelmatige heb je groter kans op hart defecten.",
        },
        content: {
          text: "De gebruikt krijgt snel feedback. Het project is laagdrempelig, iedereen met een hartslag kan er gebruik van maken en het maakt een connecties die mensen vaak niet voorafbedenken",
        },
        content: {
          text: "We willen dat mensen bewuster zijn over hoe persoonlijk en hoe gevoelige informatie je hartslag is. En bewust worden van hoe er aan jouw hartslag kan worden verdient.",
        }
      },
      {
        content: {
          title: "Concept 2.",
          subtitle: "Achter de schermen",
            text: "In een ‘onschuldig’ vooropgezet gesprek met één van onze teamgenoten worden bezoekers van het festival op sluikse manier ontdaan over hun persoonlijke data; een weerspiegeling van wat er momenteel gebeurt met persoonlijke data onder internet gebruikers.",
          img: {
            src: "/img/concept2.png",
            alt: "visualisatie van het concept hartwaarde"
          }
        },
        content: {
           text: "Achter de schermen worden de antwoorden van de correspondent omgezet in profielen. Vervolgens worden de correspondenten gevraagd plaats te nemen in een (bij voorkeur afgesloten) omgeving.",
        },
        content: {
          text: "De opgestelde profielen worden door middel van een projector weergeven op het lichaam van de niets vermoedende correspondent. De correspondent beseft dat het ‘onschuldige’ gesprek in werkelijkheid helemaal niet zo onschuldig was.",
        },
        content: {
          text: "Achteraf wordt door een hand out of one-pager uitgelegd dat dit scenario zich continue afspeelt op het internet, en wat de consequenties hiervan zouden kunnen zijn.",
        },
        content: {
          text: "Door de realistische weerspiegeling met het ‘proces’ welke plaatsvind op het internet wordt de correspondent actief geconfronteerd met de gevolgen van haar of zijn gebruik van het internet met betrekking tot data en haar of zijn privacy. Dit resulteert in bewustwording."
        },
      },
      {
        content: {
          title: "Concept 3.",
          subtitle: "Data for sale",
          text: "Tijdens het bevrijdingsfestival willen wij producten gaan verkopen met als valuta data. Het idee is om een vaste prijs te geven aan het product. De klanten zullen data weg moeten geven om het product te kunnen kopen. Ze zullen zelf moeten inschatten hoeveel hun data waard is. Wanneer ze dit gedaan hebben geven wij aan of ze boven of onder het bedrag zaten. Op deze manier willen we bewustwording brengen over het feit dat je data geld waard is. Ook komen we er achter welke data mensen liever niet weggeven en kunnen we het gesprek aangaan waarom sommige data erg makkelijk weggeven wordt. Het doel is om mensen te laten inzien hoe makkelijk ze geld weg geven en hoeveel bedrijven hier eigenlijk mee kunnen verdienen.",
          img: {
            src: "/img/concept3.png",
            alt: "visualisatie van het concept hartwaarde"
          }
        }
      }
    ]
  }
};
