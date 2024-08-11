courses = [
  {
    id: 1,
    title: "Deep learning",
    price: "$10",
    img: "./assets/images/dl-1.JPEG",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "deep-learning",
  },
  {
    id: 1,
    title: "Deep Learning",
    price: "$32",
    img: "./assets/images/dl-2.JPEG",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "deep-learning",
  },
  {
    id: 1,
    title: "Deep Learning",
    price: "$32",
    img: "./assets/images/dl-2.JPEG",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "project-b",
  },
  {
    id: 1,
    title: "Deep Learning",
    price: "$1",
    img: "./assets/images/dl-3.jpg",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "deep-learning",
  },
  {
    id: 1,
    title: "Deep Learning",
    price: "$14",
    img: "./assets/images/dl-4.jpg",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "deep-learning",
  },
  {
    id: 1,
    title: "Machine Learning",
    price: "$11",
    img: "./assets/images/ml-2.jpg",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "machine-learning",
  },
  {
    id: 1,
    title: "Machine Learning",
    price: "$11",
    img: "./assets/images/ml-1.JPEG",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "machine-learning",
  },
  {
    id: 1,
    title: "Machine Learning",
    price: "$11",
    img: "./assets/images/ml-3.JPEG",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "machine-learning",
  },
  {
    id: 1,
    title: "Deep Learning",
    price: "$113",
    img: "./assets/images/dl-5.jpg",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "deep-learning",
  },

  {
    id: 1,
    title: "Python",
    price: "$11",
    img: "./assets/images/python-1.jpg",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "Python",
  },
  {
    id: 1,
    title: "Python",
    price: "$11",
    img: "./assets/images/python-2.jpg",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "Python",
  },
  {
    id: 1,
    title: "Python",
    price: "$9",
    img: "./assets/images/python-3.jpg",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "Python",
  },
  {
    id: 1,
    title: "Python",
    price: "$16",
    img: "./assets/images/python-4.JPEG",
    description:
      "loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Id veritatis aut dolorum eveniet ipsam dolore laboriosam vel.",
    category: "Python",
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");
// load all items
window.addEventListener("DOMContentLoaded", function () {
  showCourses(courses);
  showButtons();
});

function showCourses(courseList) {
  let displayCourses = courseList.map(function (item) {
    return `<article class="course">
          <img
            src=${item.img}
            alt=${item.title}
            class="course-img"
          />
          <div class="course-info">
            <header class="header">
              <h5>${item.title}</h5>
              <span class="price">${item.price}</span>
            </header>
            <p class="course-text">
            ${item.description}
            </p>
          </div>
        </article>`;
  });
  // join all data as a single string, we are getting a large array here.
  // console.log(displayCourses);
  displayCourses = displayCourses.join("");
  sectionCenter.innerHTML = displayCourses;
}

function showButtons() {
  categories = courses.reduce(
    function (accumulator, currentItem) {
      if (!accumulator.includes(currentItem.category)) {
        accumulator.push(currentItem.category);
      }
      console.log(accumulator);
      return accumulator;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" data-id=${category} class="btn filter-btn">${category}</button>`;
    })
    .join("");
  console.log(categoryBtns);
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const courseCategory = courses.filter(function (courseList) {
        if (courseList.category === category) {
          return courseList;
        }
      });
      console.log(category, courseCategory);
      if (category === "all") {
        showCourses(courses);
      } else {
        showCourses(courseCategory);
      }
    });
  });
}
