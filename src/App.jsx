// Week 8: Migrating Your Interactive Portfolio to React
// This starter file guides you through migrating your Week 7 vanilla JavaScript portfolio to React

import "./App.css";
import { useEffect } from "react";

function App() {
  // ============================================
  // PART 1: EVENT HANDLER FUNCTIONS
  // ============================================
  // TODO: Move your Week 7 event handler functions here
  // In Week 7, you had functions like:
  // - handleNavClick (for smooth scroll)
  // - filterProjects (for project filtering)
  // - handleFormSubmit (for form validation)

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFilterClick = (e) => {
    const categoryFilter = e.currentTarget.getAttribute("data-filter");
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      const projectAttribute = card.getAttribute("data-category");
      if (categoryFilter === "all" || categoryFilter === projectAttribute) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Remove 'active' class from all buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add 'active' class to clicked button
    e.currentTarget.classList.add("active");
  };

  //////// ORIGINAL JS Validation FUNCTIONS ////////

  function showSuccess(input) {
    clearError(input);
    input.classList.add("success");
    input.classList.remove("error");
  }

  // Function to show error message
  function showError(input, message) {
    // Remove any existing error
    clearError(input);

    // 1. Create a span element for error message
    const errorElement = document.createElement("span");

    // 2. Set its textContent to the message
    errorElement.textContent = message;

    // 3. Add a class 'error-message' for styling
    errorElement.className = "error-message";

    // 4. Append it after the input field
    input.parentElement.appendChild(errorElement);

    // Add error class to input
    input.classList.add("error");
    input.classList.remove("success");
  }

  // Function to clear error message
  function clearError(input) {
    const error = input.parentElement.querySelector(".error-message");
    if (error) {
      error.remove();
    }
    input.classList.remove("error");
  }
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // Function to Clear Submission Message
  function clearSubmitMessage(input) {
    const existingSuccess = input.querySelector(".success-message");
    if (existingSuccess) {
      existingSuccess.remove();
    }
    const existingFailure = input.querySelector(".fail-message");
    if (existingFailure) {
      existingFailure.remove();
    }
  }

  // Function to show submit success
  function showSubmitSuccess(input) {
    // 0. Clear any existing success message
    clearSubmitMessage(input);
    // 1. Create a div element for success message
    const successElement = document.createElement("div");
    // 2. Set its textContent to the message
    successElement.textContent =
      "Thank you! Your message has been sent successfully.";
    // 3. Add a class 'success-message' for styling
    successElement.className = "success-message";
    // 4. Append it at the end
    input.appendChild(successElement);
  }

  // Function to show submit failure
  function showSubmitFailure(input) {
    // 0. Clear any existing failure message
    clearSubmitMessage(input);
    // 1. Create a div element for failure message
    const failureElement = document.createElement("div");
    // 2. Set its textContent to the message
    failureElement.textContent =
      "Oops! Something went wrong. Please try again.";
    // 3. Add a class 'fail-message' for styling
    failureElement.className = "fail-message";
    // 4. Append it at the end
    input.appendChild(failureElement);
  }
  //////// //////// //////// ////////

  //////// On Update Functions ////////

  const handleEmailInput = (e) => {
    const emailInput = e.target;
    if (!isValidEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email address");
    } else {
      showSuccess(emailInput);
    }
  };

  //Message Input Listener
  const handleMessageInput = (e) => {
    const messageInput = e.target;
    if (messageInput.value.length <= 10) {
      showError(messageInput, "Message must be at least 10 characters");
    } else {
      showSuccess(messageInput);
    }
  };

  //Name Input Listener
  const handleNameInput = (e) => {
    const nameInput = e.target;
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, "Name must be at least 2 characters");
    } else {
      showSuccess(nameInput);
    }
  };

  //////// //////// //////// ////////

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate all fields
    const existingError = e.target.querySelector(".error-message");
    if (existingError) {
      showSubmitFailure(e.target);
    } else {
      showSubmitSuccess(e.target);
      // Clear form after 2 seconds
      setTimeout(() => {
        e.target.reset();
        clearSubmitMessage(e.target);
        document.querySelectorAll(".success").forEach((input) => {
          input.classList.remove("success");
        });
      }, 3000);
    }
  };

  //////// Scrolling Highlighting and Animations ////////

  // useEffect puts the listeners once on page load
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const skillBars = document.querySelectorAll(".skill-progress");
    const skillsSection = document.querySelector("#skills");

    // Define Animation Function
    function animateSkills(show = true) {
      // Skills Bar Animation
      if (show) {
        console.log("Skills section is in view");
        skillBars.forEach((bar) => {
          bar.classList.add("animate");
        });
      } else {
        console.log("Other section is in view");
        skillBars.forEach((bar) => {
          bar.classList.remove("animate");
          void bar.offsetWidth; // forces reflow
        });
      }
    }
    // Define Observer for Scroll Highlight
    const navBarHighlightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const navLink = document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`
          );
          if (entry.isIntersecting) {
            navLink.classList.add("active");
          } else {
            navLink.classList.remove("active");
          }
        });
      },
      {
        root: null,
        rootMargin: "-49% 0px -49% 0px", //1% wide intersection of viewport
        threshold: [0, 1], //fire at beginning and end of intersection
      }
    );

    // Apply to each Section
    sections.forEach((section) => navBarHighlightObserver.observe(section));

    // Define Observer for Skill Bar Animation
    const skillBarObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          animateSkills(true);
        } else {
          animateSkills(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    // Apply to just skills
    skillBarObserver.observe(skillsSection);

    return () => {
      // Cleanup observers on unmount
      navBarHighlightObserver.disconnect();
      skillBarObserver.disconnect();
    };
  }, []);

  //////// //////// //////// ////////

  const handleMobileMenuToggle = () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");

    // Close menu when a nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });
  };

  const handleDarkModeToggle = () => {
    // Find the Toggle Element
    const themeToggle = document.querySelector(".theme-toggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark-theme");
      themeToggle.textContent = "☀️";
    }

    //Toggle Dark Mode for Body
    document.documentElement.classList.toggle("dark-theme");

    //Switch the Button
    if (document.documentElement.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  };

  // ============================================
  // PART 2: JSX RETURN STATEMENT
  // ============================================
  // TODO: Copy your Week 7 HTML structure here
  // Remember to convert HTML to JSX:
  // - class → className
  // - onclick → onClick
  // - onsubmit → onSubmit
  // - for → htmlFor
  // - All event attributes use camelCase
  //
  // IMPORTANT: Put EVERYTHING in this one return statement!
  // This week we're building a MONOLITHIC component (one big component)
  // Week 9 will teach you how to break this into smaller pieces

  return (
    <div className="portfolio">
      <nav id="navbar">
        <div className="nav-brand">
          <span>Alex Johnson</span>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#home" className="nav-link" onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={handleNavClick}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={handleNavClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={handleNavClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={handleNavClick}>
              Contact
            </a>
          </li>
          <li>
            <button className="theme-toggle" onClick={handleDarkModeToggle}>
              🌙
            </button>
          </li>
        </ul>

        <div className="nav-toggle" onClick={handleMobileMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Alex Johnson</h1>
          <p className="hero-subtitle">Frontend Developer & UI Designer</p>
          <p className="hero-tagline">
            Creating beautiful, responsive web experiences with modern
            technologies
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a passionate frontend developer with 3 years of experience
                creating engaging digital experiences. I specialize in React,
                modern CSS, and responsive design patterns that work beautifully
                across all devices.
              </p>
              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">✉️</span>
                  <a href="mailto:alex@example.com">alex@example.com</a>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📱</span>
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="about-availability">
              <h3>Currently Available For:</h3>
              <div className="availability-tags">
                <span className="tag tag-available">Freelance</span>
                <span className="tag tag-available">Full-Time</span>
                <span className="tag tag-available">Remote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">⚛️</span>
                <h3 className="skill-name">React</h3>
              </div>
              <div className="skill-category">Frontend Framework</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ "--skill-level": "90%" }}
                ></div>
              </div>
              <span className="skill-percentage">90%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🎨</span>
                <h3 className="skill-name">CSS3</h3>
              </div>
              <div className="skill-category">Styling</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ "--skill-level": "95%" }}
                ></div>
              </div>
              <span className="skill-percentage">95%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">📱</span>
                <h3 className="skill-name">Responsive Design</h3>
              </div>
              <div className="skill-category">Design</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ "--skill-level": "88%" }}
                ></div>
              </div>
              <span className="skill-percentage">88%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🚀</span>
                <h3 className="skill-name">JavaScript</h3>
              </div>
              <div className="skill-category">Programming</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ "--skill-level": "85%" }}
                ></div>
              </div>
              <span className="skill-percentage">85%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🎯</span>
                <h3 className="skill-name">Figma</h3>
              </div>
              <div className="skill-category">Design Tools</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ "--skill-level": "80%" }}
                ></div>
              </div>
              <span className="skill-percentage">80%</span>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🌐</span>
                <h3 className="skill-name">Node.js</h3>
              </div>
              <div className="skill-category">Backend</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ "--skill-level": "75%" }}
                ></div>
              </div>
              <span className="skill-percentage">75%</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2>Featured Projects</h2>

          <div className="filter-buttons">
            <button
              className="filter-btn active"
              data-filter="all"
              onClick={handleFilterClick}
            >
              All Projects
            </button>
            <button
              className="filter-btn"
              data-filter="frontend"
              onClick={handleFilterClick}
            >
              Frontend
            </button>
            <button
              className="filter-btn"
              data-filter="fullstack"
              onClick={handleFilterClick}
            >
              Full-Stack
            </button>
            <button
              className="filter-btn"
              data-filter="design"
              onClick={handleFilterClick}
            >
              Design
            </button>
            <button
              className="filter-btn"
              data-filter="webapp"
              onClick={handleFilterClick}
            >
              Web App
            </button>
          </div>

          <div className="projects-grid">
            <div className="project-card featured" data-category="fullstack">
              <div className="project-image">
                <img
                  src="https://images.pexels.com/photos/1563311/pexels-photo-1563311.jpeg"
                  alt="E-Commerce Platform"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href="#" className="project-link">
                      {" "}
                      <span>💻</span> Code{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">E-Commerce Platform</h3>
                  <span className="project-category">Full-Stack</span>
                </div>
                <p className="project-description">
                  A modern e-commerce platform built with React and Node.js,
                  featuring shopping cart, payment integration, and admin
                  dashboard.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">MongoDB</span>
                  <span className="project-tag">Stripe</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-category="frontend">
              <div className="project-image">
                <img
                  src="https://images.pexels.com/photos/1563381/pexels-photo-1563381.jpeg"
                  alt="Weather Dashboard"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href="#" className="project-link">
                      {" "}
                      <span>💻</span> Code{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Weather Dashboard</h3>
                  <span className="project-category">Frontend</span>
                </div>
                <p className="project-description">
                  Clean and intuitive weather dashboard with location search,
                  7-day forecast, and beautiful animations.
                </p>
                <div className="project-tags">
                  <span className="project-tag">JavaScript</span>
                  <span className="project-tag">CSS3</span>
                  <span className="project-tag">API</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-category="webapp">
              <div className="project-image">
                <img
                  src="https://images.pexels.com/photos/1563331/pexels-photo-1563331.jpeg"
                  alt="Task Management App"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href="#" className="project-link">
                      {" "}
                      <span>💻</span> Code{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Task Management App</h3>
                  <span className="project-category">Web App</span>
                </div>
                <p className="project-description">
                  Productivity app with drag-and-drop functionality, project
                  collaboration, and deadline tracking.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">TypeScript</span>
                  <span className="project-tag">Firebase</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-category="design">
              <div className="project-image">
                <img
                  src="https://images.pexels.com/photos/1563341/pexels-photo-1563341.jpeg"
                  alt="Portfolio Website"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href="#" className="project-link">
                      {" "}
                      <span>💻</span> Code{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Creative Portfolio</h3>
                  <span className="project-category">Design</span>
                </div>
                <p className="project-description">
                  Responsive portfolio website for a graphic designer with
                  interactive galleries and smooth animations.
                </p>
                <div className="project-tags">
                  <span className="project-tag">HTML5</span>
                  <span className="project-tag">CSS3</span>
                  <span className="project-tag">GSAP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>
              I'm always interested in hearing about new opportunities and
              projects. Feel free to reach out!
            </p>
            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleFormSubmit}
            >
              <div className="form-grid">
                <div className="form-group">
                  <label for="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={handleNameInput}
                  />
                </div>

                <div className="form-group">
                  <label for="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={handleEmailInput}
                  />
                </div>

                <div className="form-group form-group-full">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="subject" />
                </div>

                <div className="form-group form-group-full">
                  <label for="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    onChange={handleMessageInput}
                  ></textarea>
                </div>

                <div className="form-group form-group-full">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Alex Johnson. All rights reserved.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                GitHub
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
