// All filter buttons are hardcoded

courses = [
	{
		id: 1,
		title: "Deep Learning Fundamentals",
		duration: "3 months",
		img: "./assets/images/dl-1.JPEG",
		description:
			"An introduction to deep learning, covering neural networks, backpropagation, and common architectures such as CNNs and RNNs.",
		category: "ai", // Artificial Intelligence
	},
	{
		id: 2,
		title: "Advanced Deep Learning",
		duration: "6 months",
		img: "./assets/images/dl-2.JPEG",
		description:
			"This course dives deep into advanced topics like GANs, autoencoders, and deep reinforcement learning.",
		category: "ai", // Artificial Intelligence
	},
	{
		id: 3,
		title: "Deep Learning for Computer Vision",
		duration: "4 months",
		img: "./assets/images/dl-3.jpg",
		description:
			"Learn how to apply deep learning to solve computer vision problems such as image classification, object detection, and segmentation.",
		category: "ai", // Artificial Intelligence
	},
	{
		id: 4,
		title: "Machine Learning Basics",
		duration: "2 months",
		img: "./assets/images/ml-1.JPEG",
		description:
			"An introduction to the basics of machine learning, covering supervised and unsupervised learning techniques.",
		category: "ai", // Artificial Intelligence
	},
	{
		id: 5,
		title: "Machine Learning with Python",
		duration: "3 months",
		img: "./assets/images/ml-2.jpg",
		description:
			"Explore machine learning algorithms using Python, including scikit-learn, pandas, and NumPy libraries.",
		category: "python", // Python
	},
	{
		id: 6,
		title: "Natural Language Processing",
		duration: "5 months",
		img: "./assets/images/ml-3.JPEG",
		description:
			"This course covers NLP techniques, including text preprocessing, word embeddings, and sequence models.",
		category: "ai", // Artificial Intelligence
	},
	{
		id: 7,
		title: "Data Structures and Algorithms",
		duration: "4 months",
		img: "./assets/images/dl-4.jpg",
		description:
			"Learn the fundamentals of data structures and algorithms, including arrays, linked lists, trees, and sorting algorithms.",
		category: "web-dev", // JavaScript (general category for web development)
	},
	{
		id: 8,
		title: "Artificial Intelligence",
		duration: "6 months",
		img: "./assets/images/dl-5.jpg",
		description:
			"An overview of AI concepts, including search algorithms, knowledge representation, and machine reasoning.",
		category: "ai", // Artificial Intelligence
	},
	{
		id: 9,
		title: "Introduction to Robotics",
		duration: "5 months",
		img: "./assets/images/python-1.jpg",
		description:
			"Understand the basics of robotics, including kinematics, control systems, and robotic perception.",
		category: "ai", // Artificial Intelligence
	},
	{
		id: 10,
		title: "Reinforcement Learning",
		duration: "4 months",
		img: "./assets/images/python-2.jpg",
		description:
			"Learn the principles of reinforcement learning, covering value functions, policy gradients, and Q-learning.",
		category: "ai", // Artificial Intelligence
	},
	{
		id: 11,
		title: "Computer Networks",
		duration: "3 months",
		img: "./assets/images/python-3.jpg",
		description:
			"Explore the fundamentals of computer networking, including network protocols, routing, and data transmission.",
		category: "web-dev", // JavaScript (general category for web development)
	},
	{
		id: 12,
		title: "Operating Systems",
		duration: "4 months",
		img: "./assets/images/python-4.JPEG",
		description:
			"Study the core concepts of operating systems, such as process management, memory management, and file systems.",
		category: "web-dev", // JavaScript (general category for web development)
	},
	{
		id: 13,
		title: "Python for Data Science",
		duration: "3 months",
		img: "./assets/images/python-1.jpg",
		description:
			"Learn how to use Python for data science, covering data analysis, visualization, and machine learning techniques.",
		category: "python", // Python
	},
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
	displayCourses(courses);
	const categories = courses.reduce(
		function (acc, curr) {
			if (acc.includes(curr.category) == false) {
				acc.push(curr.category);
			}
			return acc;
		},
		["all"]
	);
	console.log(categories);
});

filterBtns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const categoryID = e.currentTarget.dataset.id;
		const courseCategory = courses.filter(function (course) {
			if (course.category == categoryID) {
				// Create a new array based on the given category.
				return course;
			}
		});
		if (categoryID == "all") {
			displayCourses(courses);
		} else {
			displayCourses(courseCategory);
		}
	});
});

function displayCourses(courses) {
	let courseCatalog = courses.map(function (course) {
		return `<article class="course">
        <img
            src=${course.img}
            alt=""
            class="img course-photo" />
        <div class="course-info">
            <header>
                <h5>${course.title}</h5>
                <span class="duration">${course.duration}</span>
            </header>
            <p class="course-text">
             ${course.description}
            </p>
        </div>
    </article>`;
	});
	// Join the whole articles into on giant string
	courseCatalog = courseCatalog.join("");
	sectionCenter.innerHTML = courseCatalog;
}
