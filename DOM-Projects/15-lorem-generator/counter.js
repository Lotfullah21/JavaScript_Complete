const paragraph = [
	`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet illum
  dolor tempore. Debitis iste repudiandae praesentium laboriosam natus!
  Molestiae tempore corporis dicta culpa blanditiis`,
	`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora
  nisi autem. Ratione, cumque maiores architecto laborum eius id eaque? Vitae
  quia soluta, alias maiores ullam, iusto mollitia expedita delectus eaque
  veniam quaerat sapiente reiciendis officiis provident pariatur! Quo, optio?`,
	`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat
  vitae, cum, ea nemo autem rerum perspiciatis animi praesentium voluptatibus
  reiciendis impedit? In accusantium rem consequatur repudiandae officia facere
  eius sunt similique culpa labore dolore officiis distinctio, sapiente non,
  ducimus a est unde consequuntur architecto recusandae, expedita dolor
  voluptate. Enim consectetur dicta impedit inventore officiis accusamus
  molestiae aliquid dolore quas.`,
	`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias, enim
  non sunt, sed unde dolorum nisi autem facere consectetur ratione consequatur
  dolore! Tempore libero nihil similique cumque molestias labore fugit quisquam,
  quidem vel repellendus eligendi ratione, blanditiis aut minus?`,
	`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias, enim
  non sunt, sed unde dolorum nisi autem facere consectetur ratione consequatur
  dolore! Tempore libero nihil similique cumque molestias labore fugit quisquam,
  quidem vel repellendus eligendi ratione, blanditiis aut minus?`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const lorem = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const random = Math.floor(Math.random() * paragraph.length);
	// to convert to an integer
	const value = parseInt(amount.value);
	// If the amount entered is not a value or <0 or >10, generate one randome paragraph.
	if (isNaN(value) || value <= 0 || value > 10) {
		lorem.innerHTML = `<p>${paragraph[random]}</p>`;
	} else {
		// Create a new array without modifying the original paragra
		let newParagraph = paragraph.slice(0, value);
		newParagraph
			.map(function (singleParagraph) {
				return `<p>${singleParagraph}</p>`;
			})
			.join("");
		lorem.innerHTML = newParagraph;
	}
});
