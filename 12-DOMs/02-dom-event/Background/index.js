function changeBackgroundColor() {
  // get all the h1 elements in the document
  const head_1 = document.getElementsByTagName("h1");
  // get all the h2 elments in the document
  const heading = document.getElementsByTagName("h2");

  // now, get all the p elements in the document
  const paragraphs = document.getElementsByTagName("p");

  // get the second paragraph from the list
  const secondParagraph = paragraphs[0];
  // get the first heading from the list
  const heads = heading[0];
  // get the first heading from the list
  const head = head_1[0];
  // set the inline style
  secondParagraph.style.background = "gray";
  heads.style.background = "red";
  head.style.background = "green";
}
