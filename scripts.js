// Create snowfall effect
function createSnowflakes() {
  const body = document.body;
  const numberOfSnowflakes = 50;

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.textContent = "❆";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = Math.random() * 0.8 + 0.2;
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;

    // Add initial position for smooth animation
    snowflake.style.top = `-${Math.random() * 100}vh`;
    body.appendChild(snowflake);
  }
}

function addSectionImages() {
  // Introduction section
  const introSection = document.getElementById("introduction");
  wrapSectionContent(
    introSection,
    "/images/landscape.png",
    "Winter solstice sunset landscape"
  );

  // Science section
  const scienceSection = document.getElementById("science");
  wrapSectionContent(
    scienceSection,
    "/images/axial.png",
    "Earth's axial tilt diagram"
  );

  // Add images to hemisphere articles
  const northernHemisphere = document.getElementById("northern-hemisphere");
  wrapHemisphereContent(
    northernHemisphere,
    "/images/northern.png",
    "Snowy winter landscape"
  );

  const southernHemisphere = document.getElementById("southern-hemisphere");
  wrapHemisphereContent(
    southernHemisphere,
    "/images/southern.png",
    "Summer solstice celebration"
  );

  // Add images to celebration articles
  const celebrations = {
    newgrange: "/images/ireland.png",
    intiraymi: "/images/peru.png",
    modranicht: "/images/anglo.png",
    koliada: "/images/koliada.png",
  };

  Object.entries(celebrations).forEach(([id, imgSrc]) => {
    const article = document.getElementById(id);
    wrapCelebrationContent(
      article,
      imgSrc,
      `${article.querySelector("h3").textContent} celebration`
    );
  });

  // Traditions section
  const traditionsSection = document.getElementById("traditions");
  wrapSectionContent(
    traditionsSection,
    "/images/decorations.png",
    "Traditional winter solstice decorations",
    true
  );

  // Conclusion section
  const conclusionSection = document.getElementById("conclusion");
  const conclusionImage = document.createElement("img");
  conclusionImage.src = "/images/solstice.png";
  conclusionImage.alt = "Winter solstice celebration";
  conclusionImage.className = "solstice-image";
  conclusionSection.insertBefore(
    conclusionImage,
    conclusionSection.querySelector("p")
  );
}

// Helper function to wrap section content
function wrapSectionContent(section, imageSrc, imageAlt, beforeList = false) {
  const wrapper = document.createElement("div");
  wrapper.className = "content-wrapper";

  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = imageAlt;
  image.className = "section-image";

  const textContent = document.createElement("div");
  textContent.className = "text-content";

  // Move all paragraphs to text content
  const contentElements = beforeList
    ? Array.from(section.querySelectorAll("p, ul"))
    : Array.from(section.querySelectorAll("p"));

  contentElements.forEach((el) => textContent.appendChild(el));

  wrapper.appendChild(image);
  wrapper.appendChild(textContent);

  // Insert after the h2
  section.querySelector("h2").after(wrapper);
}

// Helper function to wrap article content
function wrapHemisphereContent(article, imageSrc, imageAlt) {
  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = imageAlt;
  image.className = "hemisphere-image";

  const textContent = document.createElement("div");
  textContent.className = "text-content";

  // Move heading and paragraph to text content
  const heading = article.querySelector("h3");
  const paragraph = article.querySelector("p");

  textContent.appendChild(heading);
  textContent.appendChild(paragraph);

  // Clear article and add new structure
  article.textContent = "";
  article.appendChild(image);
  article.appendChild(textContent);
}

function wrapCelebrationContent(article, imageSrc, imageAlt) {
  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = imageAlt;
  image.className = "celebration-image";

  const textContent = document.createElement("div");
  textContent.className = "text-content";

  // Move heading and paragraph to text content
  const heading = article.querySelector("h3");
  const paragraph = article.querySelector("p");

  const indicator = document.createElement("span");
  indicator.textContent = "✨ Click to learn more";
  indicator.className = "indicator";
  indicator.style.display = "block";
  indicator.style.fontSize = "1.5rem";
  indicator.style.color = "#ffd700";
  indicator.style.marginTop = "1rem";

  textContent.appendChild(heading);
  textContent.appendChild(paragraph);
  textContent.appendChild(indicator);

  // Clear article and add new structure
  article.textContent = "";
  article.appendChild(image);
  article.appendChild(textContent);
}

function setupCelebrationClicks() {
  const celebrations = document.querySelectorAll(".celebration");

  celebrations.forEach((celebration) => {
    celebration.addEventListener("click", () => {
      const title = celebration.querySelector("h3").textContent;
      const content = celebration.querySelector("p").textContent;
      const image = celebration.querySelector("img").cloneNode(true);

      const modal = document.createElement("div");
      modal.className = "celebration-modal";
      modal.innerHTML = `
          <div class="modal-content">
            <h3>${title}</h3>
            <div class="modal-image-container"></div>
            <p>${content}</p>
            <button>Close</button>
          </div>
        `;

      modal.querySelector(".modal-image-container").appendChild(image);
      document.body.appendChild(modal);

      modal.querySelector("button").addEventListener("click", () => {
        modal.remove();
      });
    });
  });
}

// Intersection Observer for scroll animations
function setupScrollAnimations() {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

// Add celestial background elements
function createCelestialElements() {
  const header = document.getElementById("main-header");
  const stars = document.createElement("div");
  stars.className = "stars";

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    stars.appendChild(star);
  }

  header.appendChild(stars);
}

// Add smooth scrolling
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Initialize everything when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createSnowflakes();
  setupScrollAnimations();
  createCelestialElements();
  setupCelebrationClicks(); // Changed from enhanceCelebrations
  setupSmoothScrolling();
  addSectionImages();
});

// Add styles for images and modal
const styles = document.createElement("style");
styles.textContent = `
    .section-image {
      width: 100%;
      max-width: 450px;
      height: auto;
      border-radius: 15px;
      margin: 1rem 0;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease;
    }

    .section-image:hover {
      transform: scale(1.02);
    }

    .hemisphere-image {
      width: 100%;
      max-width: 450px;
      height: auto;
      border-radius: 10px;
      margin: 1rem 0;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .celebration-image {
      width: 100%;
      max-width: 400px;
      height: auto;
      border-radius: 10px;
      margin: 1rem 0;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease;
    }

    .traditions-image {
      width: 100%;
      max-width: 800px;
      height: auto;
      border-radius: 15px;
      margin: 1rem 0 2rem 0;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .modal-image-container {
      width: 100%;
      margin: 1rem 0;
      text-align: center;
    }

    .modal-image-container img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
  
    .celebration-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(13, 27, 42, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease;
    }
    
    .modal-content {
      background: linear-gradient(rgba(26, 35, 126, 0.95), rgba(13, 27, 42, 0.95));
      padding: 2rem;
      border-radius: 15px;
      max-width: 600px;
      margin: 2rem;
      position: relative;
      animation: slideIn 0.3s ease;
    }
    
    .modal-content button {
      background: #ffd700;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      margin-top: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .modal-content button:hover {
      background: #ffed4a;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideIn {
      from { transform: translateY(-50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  
    @media (max-width: 768px) {
      .section-image,
      .hemisphere-image,
      .celebration-image,
      .traditions-image {
        max-width: 100%;
      }
    }
  `;
document.head.appendChild(styles);
