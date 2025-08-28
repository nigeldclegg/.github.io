* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: #000;
    color: white;
    min-height: 100vh;
    overflow-x: hidden;
}

.header {
    text-align: center;
    padding: 3rem 2rem 2rem;
    position: relative;
    cursor: pointer;
}

.hamburger-menu {
    position: absolute;
    top: 2rem;
    left: 2rem;
    cursor: pointer;
    z-index: 1000;
}

.hamburger-lines {
    width: 30px;
    height: 3px;
    background: #ff6b35;
    margin: 6px 0;
    border-radius: 2px;
    transition: 0.3s;
}

.hamburger-menu.active .hamburger-lines:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-menu.active .hamburger-lines:nth-child(2) {
    opacity: 0;
}

.hamburger-menu.active .hamburger-lines:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

.menu-dropdown {
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    background: #333;
    min-width: 250px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
}

.menu-dropdown.active {
    display: block;
}

.menu-dropdown a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    font-size: 0.9rem;
}

.menu-dropdown a:hover {
    background: #ff6b35;
}

.main-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
}

.subtitle {
    font-size: 1.5rem;
    color: #ff6b35;
    margin-bottom: 2rem;
    font-style: italic;
}

.story-section {
    max-width: 1000px;
    margin: 0 auto;
    padding: 3rem 2rem;
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    display: none;
}

.story-section.active-chapter {
    display: block;
    opacity: 1;
}

.story-text {
    font-size: 1.2rem;
    line-height: 1.8;
    text-align: left;
    margin-bottom: 3rem;
}

.story-text p {
    margin-bottom: 1.5rem;
}

.story-text h2 {
    color: #ff6b35;
    font-size: 2.5rem;
    text-align: center;
    margin: 3rem 0 2rem 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.story-text h3 {
    color: #ffaa80;
    font-size: 1.8rem;
    margin: 2rem 0 1rem 0;
}

.continue-btn {
    background: linear-gradient(45deg, #ff6b35, #ff8c42);
    color: white;
    border: none;
    padding: 2rem 3rem;
    font-size: 1.4rem;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
    transition: all 0.3s ease;
    margin: 2rem auto;
    display: block;
}

.continue-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(255, 107, 53, 0.5);
}

.hidden {
    display: none !important;
}

.tragic-text {
    color: #ff6666;
}

.hope-text {
    color: #66ff66;
}

.emphasis {
    color: #ff6b35;
    font-weight: bold;
}

.footer {
    text-align: center;
    padding: 2rem;
    border-top: 1px solid #333;
    margin-top: 3rem;
}

.back-button {
    background: linear-gradient(45deg, #666, #888);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
}

.back-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.contact-info {
    margin: 1rem 0;
    font-size: 1rem;
    color: #ccc;
}

.email-link {
    color: #ff6b35;
    text-decoration: none;
}

.email-link:hover {
    text-decoration: underline;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
    align-items: center;
}

.social-link {
    color: #ff6b35;
    font-size: 1.1rem;
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    border: 2px solid #ff6b35;
    border-radius: 5px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.social-link:hover {
    background: #ff6b35;
    color: white;
    transform: translateY(-2px);
}

.social-icon {
    width: 20px;
    height: 20px;
}

@media (max-width: 768px) {
    .main-title {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1.2rem;
    }

    .continue-btn {
        font-size: 1.2rem;
        padding: 1.5rem 2rem;
    }
}
