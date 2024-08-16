const addSubjects = (subjects) => {
  const techSubjects = subjects
    .map((subject) => {
      const { name, year } = subject;
      return `<h3>${name}<h3><span>${year}<span>`;
    })
    .join("");
  return techSubjects;
};

export default addSubjects;
