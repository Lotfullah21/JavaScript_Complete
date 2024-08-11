// aliasing
const subjects = {
  name: "Artificial Intelligence",
  field: "Cognitive Science",
  subject: ["Machine learning", "Mathematics", "Deep learning"],
  subfields: {
    vision: "Computer vision",
    language: "Natural language processing",
  },
};

const {
  name: Artificial,
  field: area,
  subject: subjectsName,
  subfields: { vision, language: NLP },
  HELLO,
} = subjects;
console.log(Artificial, area, subjectsName, HELLO, vision, NLP);

// const subjects = {
//   name: "Artificial Intelligence",
//   field: "Cognitive Science",
//   subject: ["Machine learning", "Mathematics", "Deep learning"],
// };

// const name = subjects.name;
// const area = subjects.field;
// const subject = subjects.subject;

// console.log(name, area, subject);

// accesssing through destructuring
/*
const subjects = {
  name: "Artificial Intelligence",
  field: "Cognitive Science",
  subject: ["Machine learning", "Mathematics", "Deep learning"],
  subfields: {
    vision: "Computer vision",
    language: "Natural language processing",
  },
};

const { name, field, subject } = subjects;
console.log(name, field, subject);
*/
