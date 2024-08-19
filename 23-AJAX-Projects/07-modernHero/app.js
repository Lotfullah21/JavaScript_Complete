import subLinks from "./data/data.js";
import get from "./utils/getElement.js";

const toggleBtn = get(".toggle-btn");
const closeBtn = get(".close-btn");
const sidebarWrapper = get(".sidebar-wrapper");
const sidebar = get(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".btn-link")];
const subMenu = get(".submenu");
const nav = get(".navbar");
const hero = get(".hero");

toggleBtn.addEventListener("click", () => {
	sidebarWrapper.classList.add("show-sidebar");
	document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
	sidebarWrapper.classList.remove("show-sidebar");
	document.body.classList.remove("no-scroll");
});

// Submenu
document.addEventListener("DOMContentLoaded", () => {
	linkBtns.forEach((btn) => {
		btn.addEventListener("mouseover", (e) => {
			const text = e.currentTarget.textContent;
			const btnArea = e.currentTarget.getBoundingClientRect();
			const bottom = btnArea.bottom - 3;
			// left + right//2
			const center = (btnArea.right + btnArea.left) / 2;
			// Only if the nav name and page name in data.js are the same
			const tempPage = subLinks.find(({ page }) => {
				return page === text;
			});
			// if name matched, then create the boxes.
			if (tempPage) {
				const { page, links } = tempPage;
				subMenu.style.left = `${center}px`;
				subMenu.style.right = `${bottom}px`;
				subMenu.classList.add("show");
				subMenu.innerHTML = `<section>
				<h4>${page}</h4>
				<div class="submenu-center col-2">
				${links
					.map((link) => {
						return `<a href="${link.url}">
					<i class="${link.icon}"></i> ${link.label}
					</a>`;
					})
					.join("")}
				</div>
				</section>`;
			}
		});
	});
});

hero.addEventListener("mouseover", (e) => {
	subMenu.classList.remove("show");
});

nav.addEventListener("mouseover", (e) => {
	if (!e.target.classList.contains("btn-link")) {
		subMenu.classList.remove("show");
	}
});
