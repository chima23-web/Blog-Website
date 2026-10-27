const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
const exploreArticlesButton = document.getElementById("explore-articles");
const articlesHero = document.getElementById("articles-hero");

if (exploreArticlesButton && articlesHero) {
    exploreArticlesButton.addEventListener("click", function() {
        articlesHero.scrollIntoView({
            behavior: "smooth"
        });
    });
}
const subscribeButton =
document.getElementById("subscribe-articles");
if (subscribeButton) {
subscribeButton.addEventListener("click", function() {
    window.location.href = "subscribe.html";
});
}
const subscribeForm =
document.getElementById("subscribe-form");
const subscribeMessage =
document.getElementById("subscribe-message");
if (subscribeForm && subscribeMessage) {
subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for subscribing to MindfulBlog");
    subscribeForm.reset();
});
}
const contactForm = 
document.getElementById("contact-form");
const formMessage =
document.getElementById("form-message");
if (contactForm && formMessage) {
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formMessage.textContent = "Your message has been received,and we've got you covered!";
    contactForm.reset();
});
}
const button =
document.getElementById("view-all-articles");

if (button) {
    button.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
const exploreWebDevelopmentButton =
document.getElementById("explore-web-development");
const featuredSection =
document.getElementById("featured-web-development");
if (exploreWebDevelopmentButton && featuredSection) {
exploreWebDevelopmentButton.addEventListener("click", function() {
    featuredSection.scrollIntoView({
        behavior: "smooth"
    });
});
}
