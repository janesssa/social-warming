export const profiles = {
  cmgt: [
    {
      name: "Janessa Labeur",
      title: "Prototype",
      img: {
        src: "./profiles/janessa.png",
        width: "50px"
      }
    },
    {
      name: "Rachelle Bosman",
      title: "Design",
      img: {
        src: "./profiles/janessa.png",
        width: "50px"
      }
    }
  ],
  cmd: [
    {
      name: "Coen",
      title: "design",
      img: {
        src: "./profiles/janessa.png",
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
            src: "./img/mindmapping.png",
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
              src: "./img/forced1",
              alt: "eerste foto van forced perspective"
            },
            {
              src: "./img/forced2",
              alt: "tweede foto van forced perspective"
            }, 
            {
              src: "./img/forced3",
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
            src: "./img/COCD-box",
            alt: "foto van de COCD box"
          }
        }
      },
      {
        content: {
          title: "Sketchboarding",
          text: "Sketchboarding is een techniek die helpt bij het visualiseren van concepten. In plaats van tekst ga je je concept visueel maken. Met tekening laat je de flow zien van het concept. Dit zorgt ervoor dat het concept duidelijker. Wij hebben deze techniek gebruikt om onze concepten beter aan elkaar te kunnen presenteren. En op elkaars concepten te kunnen bouwen zodat we een definitieve sketch per concept konden maken.",
          img: {
            src: "./img/sketchboarding",
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
            src: "./img/icons/person.svg",
            alt: "icon van een persoon",
          },
          text: "Onze gebruikers zijn het de mensen die naar het festival gaan. Wij richten ons op de mensen die online gebruik maken van forms, accounts en andere services waar je je data bij weg geeft."
        }
      },
      {
        content: {
          title: "Stakeholders",
          icon: {
            src: "./img/icons/group.svg",
            alt: "icon van een groep",
          },
          text: "De stakeholders van dit project zijn : Provincie Zuid-holland, databrokers en nonprofits die strijden voor data regels",
        }
      },
      {
        content: {
          title: "Deskresearch",
          icon: {
            src: "./img/icons/search.svg",
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
          list: [
            "Het product moet interactie met de gebruiker mogelijk maken.",
            "Het product moet een combinatie zijn van fysiek en digitaal.", 
            "Het product moet 'ervaren' kunnen worden.", 
            "Mobiel. Het product zal gepresenteerd worden tijdens het Bevrijdingsfestival Rotterdam, om deze reden moet het product mobiel zijn. Een vaste installatie is niet gewenst.", 
            "Het product moet bewustwording creëren met betrekking tot het thema 'social cooling', en de impact van de door de gebruiker ingevoerde data weergeven.",
            "De waarde van data, en de route die de data aflegt moet weerspiegeld worden in het product.",
          ]
        }
      },
    ]
  },
  concepts: {
    firstTitle: "3",
    secondTitle: "Concepten",
    intro: "Onderstaande technieken hebben we gebruikt om te ontwerpen.",
    bgColor: "white",
    contentBlocks: [
      {
        content: {
          title: "Eerste taak",
          subtitle: "Optioneel?",
          text: "Dit is de eerste taak die uitgevoerd is. Top!"
        }
      },
      {
        content: {
          title: "Tweede taak",
          subtitle: "Optioneel?",
          text: "Dit is de tweede taak die uitgevoerd is. Top!"
        }
      }
    ]
  }
};
