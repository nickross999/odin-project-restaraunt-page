import splashImage from "C:/Users/Nick/repos/odin-project-restaurant-page/src/images/home-images/img-guidance-cafe-01@1.5x.webp"  

const Home = (function () {
    const contentDiv = document.querySelector("#content");

    const buildContent = () => {
        contentDiv.className = "home-mode"; //set home mode

        const aboutDiv = document.createElement("div");
        aboutDiv.setAttribute("id", "about-display");
        contentDiv.appendChild(aboutDiv);
        const aboutTitle = document.createElement("h1");
        aboutTitle.textContent = "About";
        aboutDiv.appendChild(aboutTitle);

        const aboutText = document.createElement("p");
        aboutText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        aboutDiv.appendChild(aboutText);

        const splashImageElement = document.createElement("img");
        splashImageElement.src = splashImage;
        aboutDiv.appendChild(splashImageElement);
    };

    return { buildContent };
})();

export { Home };