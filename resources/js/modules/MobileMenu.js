class MobileMenu {
    // Constructor
    constructor() {
        this.menuIcon = document.querySelector(
            '[data-collapse-toggle="navbar-default"]'
        );
        this.menuContent = document.querySelector("#navbar-default");
        this.events();
    }

    // Events
    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    // Methods
    toggleTheMenu() {
        this.menuContent.classList.toggle("hidden");
        this.menuIcon.setAttribute(
            "aria-expanded",
            this.menuIcon.getAttribute("aria-expanded") === "true"
                ? "false"
                : "true"
        );
    }
}

export default MobileMenu;
