const subjects = {
  name: "Artificial Intelligence",
  field: "Cognitive Science",
  subject: ["Machine learning", "Mathematics", "Deep learning"],
  subfields: {
    vision: "Computer vision",
    language: "Natural language processing",
  },
};

// from this object, i want these properties
function get({ name, field, subject }) {
  console.log(name, field, subject);
}

get(subjects);
