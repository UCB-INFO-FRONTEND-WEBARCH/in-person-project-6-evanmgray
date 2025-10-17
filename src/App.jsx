// Week 8: Migrating Your Interactive Portfolio to React
// This starter file guides you through migrating your Week 7 vanilla JavaScript portfolio to React

import "./App.css";

function App() {
  // ============================================
  // PART 1: EVENT HANDLER FUNCTIONS
  // ============================================
  // TODO: Move your Week 7 event handler functions here
  // In Week 7, you had functions like:
  // - handleNavClick (for smooth scroll)
  // - filterProjects (for project filtering)
  // - handleFormSubmit (for form validation)
  //
  // HINT: These will be regular JavaScript functions defined inside App component
  // Example from Week 7:
  //   const filterProjects = (category) => {
  //     // Your filtering logic here
  //   }

  // TODO: Add smooth scroll handler
  // Replace: navLinks.forEach(link => link.addEventListener('click', ...))
  // With: const handleNavClick = (e) => { ... }

  // TODO: Add filter handler
  // Replace: filterButtons.forEach(button => button.addEventListener('click', ...))
  // With: const handleFilterClick = (category) => { ... }

  // TODO: Add form validation functions
  // You'll need: isValidEmail, showError, clearError, showSuccess
  // These can stay mostly the same!

  // TODO: Add form submit handler
  // Replace: contactForm.addEventListener('submit', ...)
  // With: const handleFormSubmit = (e) => { ... }

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
      {
        /* TODO: Add your navigation here */
        <nav id="navbar">
          <div className="nav-brand">
            <span>Evan Gray</span>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      }
      {/* HINT: Replace <a href="#home" className="nav-link"> with <a href="#home" className="nav-link"> */}
      {/* HINT: Replace onclick with onClick={handleNavClick} */}

      {
        /* TODO: Add your hero section here */
        <section id="home" className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Evan Gray</h1>
            <p className="hero-subtitle">Businessman</p>
            <p className="hero-tagline">
              Making incredible slides by day, incredible parties by night
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
      }

      {
        /* TODO: Add your about section here */
        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>I'm Evan and I create shareholder value.</p>
                <div className="about-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>Berkeley, CA</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">✉️</span>
                    <a href="mailto:evan_gray@berkeley.edu">
                      evan_gray@berkeley.edu
                    </a>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📱</span>
                    <span>(702) 419-9668</span>
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
      }

      {
        /* TODO: Add your skills section here */
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
                  <div className="skill-progress"></div>
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
                    style={{ "--skill-level": "90%" }}
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
      }

      {
        /* TODO: Add your projects section here */
        <section id="projects" className="section">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="filter-buttons">
              <button className="filter-btn active" data-filter="all">
                All Projects
              </button>
              <button className="filter-btn" data-filter="frontend">
                Frontend
              </button>
              <button className="filter-btn" data-filter="fullstack">
                Full-Stack
              </button>
              <button className="filter-btn" data-filter="design">
                Design
              </button>
              <button className="filter-btn" data-filter="webapp">
                Web App
              </button>
            </div>

            <div className="projects-grid">
              <div className="project-card featured" data-category="fullstack">
                <div className="project-image">
                  <img
                    src="https://images.pexels.com/photos/1563399/pexels-photo-1563399.jpeg"
                    alt="E-Commerce Platform"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="project-link">
                        <span>🔗</span> Live Demo
                      </a>
                      <a href="#" className="project-link">
                        <span>💻</span> Code
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
                    src="https://images.pexels.com/photos/1563301/pexels-photo-1563301.jpeg"
                    alt="Weather Dashboard"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="project-link">
                        <span>🔗</span> Live Demo
                      </a>
                      <a href="#" className="project-link">
                        <span>💻</span> Code
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
                    src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg"
                    alt="Task Management App"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="project-link">
                        <span>🔗</span> Live Demo
                      </a>
                      <a href="#" className="project-link">
                        <span>💻</span> Code
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
                    src="https://images.pexels.com/photos/1563311/pexels-photo-1563311.jpeg"
                    alt="Portfolio Website"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="project-link">
                        <span>🔗</span> Live Demo
                      </a>
                      <a href="#" className="project-link">
                        <span>💻</span> Code
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
      }
      {/* HINT: For filter buttons, use onClick={() => handleFilterClick('category')} */}

      {
        /* TODO: Add your contact form here */
        <section id="contact" className="section section-alt">
          <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <p>
                I'm always interested in hearing about new opportunities and
                projects. Feel free to reach out!
              </p>
              <form id="contact-form" className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label for="name">Name *</label>
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div className="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required />
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
      }
      {/* HINT: Form will use onSubmit={handleFormSubmit} */}
      {/* HINT: Inputs will use onChange for real-time validation */}

      {
        /* TODO: Add your footer here */
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <p>&copy; 2025 Evan Gray. All rights reserved.</p>
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
                <a href="#" className="social-link">
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </footer>
      }
    </div>
  );
}

export default App;
