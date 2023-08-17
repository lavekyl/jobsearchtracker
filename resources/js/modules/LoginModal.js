class LoginModal {
    // Constructor
    constructor() {
        this.body = document.querySelector("body");
        this.modal = document.querySelector("#authentication-modal");
        this.openModal = document.querySelector(
            '[data-modal-toggle="authentication-modal"]'
        );
        this.closeModal = document.querySelector(
            '[data-modal-hide="authentication-modal"]'
        );
        this.events();
    }

    // Events
    events() {
        // listen for open click
        this.openModal.addEventListener("click", () => this.openTheModal());
        // listen for close click
        this.closeModal.addEventListener("click", () => this.closeTheModal());
    }

    // Methods
    openTheModal() {
        this.modal.classList.add("flex");
        this.modal.classList.remove("hidden");
        this.modal.setAttribute("aria-hidden", "false");

        const backdrop = document.createElement("div");
        backdrop.setAttribute("modal-backdrop", "");
        backdrop.classList.add(
            "bg-gray-900",
            "bg-opacity-50",
            "dark:bg-opacity-80",
            "fixed",
            "inset-0",
            "z-40"
        );
        this.body.appendChild(backdrop);
    }

    closeTheModal() {
        this.modal.classList.add("hidden");
        this.modal.classList.remove("flex");
        this.modal.setAttribute("aria-hidden", "true");
        this.body.removeChild(document.querySelector("[modal-backdrop]"));
    }
}

export default LoginModal;
