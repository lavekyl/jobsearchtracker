class LoginModal {
    // Constructor
    constructor() {
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
    }

    closeTheModal() {
        this.modal.classList.add("hidden");
        this.modal.classList.remove("flex");
        this.modal.setAttribute("aria-hidden", "true");
    }
}

export default LoginModal;
