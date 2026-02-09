// Nav Background
var nav = document.getElementById("navBar");

window.addEventListener("scroll", function() {
  if (window.scrollY > 100) { 
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// Up Button
const upBtn = document.getElementById("upBtn");
window.onscroll = function() {
    if (window.scrollY > 400) { 
        upBtn.classList.add("show");
    } else {
        upBtn.classList.remove("show");
    }
};

upBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Images Filter
function filterSelection(category) {
  let items = document.getElementsByClassName("filter-item");
  if (category === "all") category = "";

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("show");
    if (items[i].className.indexOf(category) > -1) {
      items[i].classList.add("show");
    }
  }

  let btns = document.querySelectorAll(".buttons .btn");
  btns.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.${category || "all"}-btn`).classList.add("active");
}

window.onload = function() {
  filterSelection("all");
};

// Search Icon
var lightBoxContainer = document.getElementById('lightBoxContainer');
var lightBoxItem = document.getElementById('lightBoxItem');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var closeBtn = document.getElementById('closeBtn');

var searchIcons = Array.from(document.querySelectorAll('.right-icons .search'));
var items = Array.from(document.querySelectorAll('.filter-item')); 
var currentIndex = 0;

function showLightBox(index) {
  let parent = items[index];
  let imgSrc = parent.querySelector('img').getAttribute('src');
  let title = parent.querySelector('h4').innerText;

  lightBoxItem.innerHTML = `
    <img src="${imgSrc}" class="lightbox-img">
    <div class="lightbox-text">
      <h4>${title}</h4>
    </div>
  `;

  lightBoxContainer.style.display = 'flex';
  currentIndex = index;
}

searchIcons.forEach((icon, i) => {
  icon.addEventListener('click', () => {
    showLightBox(i);
  });
});

prevBtn.onclick = function() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showLightBox(currentIndex);
};

nextBtn.onclick = function() {
  currentIndex = (currentIndex + 1) % items.length;
  showLightBox(currentIndex);
};

closeBtn.onclick = function() {
  lightBoxContainer.style.display = 'none';
};

document.addEventListener("keydown", function(e) {
  if (lightBoxContainer.style.display === "flex") {
    if (e.key === "ArrowRight") {
      nextBtn.click();
    } else if (e.key === "ArrowLeft") {
      prevBtn.click();
    } else if (e.key === "Escape") {
      closeBtn.click();
    }
  }
});
