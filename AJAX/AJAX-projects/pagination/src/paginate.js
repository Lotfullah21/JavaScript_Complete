const paginate = (following) => {
  console.log(following);
  const itemsPerPage = 2;
  const numberOfPages = Math.ceil(following.length / itemsPerPage);
  console.log("number of pages", numberOfPages);
  //  create array of arrays, number of pages means how many array do you want, here we want to move dynamically, so that is based on our needs
  const people = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return following.slice(start, start + itemsPerPage);
  });
  console.log("new array", people);
  console.log("Following", following);
  return people;
};

export default paginate;
