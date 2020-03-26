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

export const progress = {
  designTactics: {
    firstTitle: "Ontwerp",
    secondTitle: "technieken",
    intro: "Onderstaande technieken hebben we gebruikt om te ontwerpen.",
    bgColor: "black",
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
  },
  research: {
    firstTitle: "Onderzoek",
    secondTitle: "& research",
    intro: "Onderstaande technieken hebben we gebruikt om te ontwerpen.",
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
  },
  designCriteria: {
    firstTitle: "Ontwerp",
    secondTitle: "Criteria",
    intro: "Onderstaande technieken hebben we gebruikt om te ontwerpen.",
    bgColor: "red",
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
