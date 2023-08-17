class SignupModal {
    // Constructor
    constructor() {
        this.body = document.querySelector("body");
        this.signupModal = document.querySelector("#authentication-modal");
        this.openSignupModal = document.querySelector(
            '[data-modal-toggle="authentication-modal"]'
        );
        this.closeSignupModal = document.querySelector(
            '[data-modal-hide="authentication-modal"]'
        );
        this.events();
    }

    // Events
    events() {
        // listen for open click
        this.openSignupModal.addEventListener("click", () =>
            this.openTheModal()
        );
        // listen for close click
        this.closeSignupModal.addEventListener("click", () =>
            this.closeTheModal()
        );
    }

    // Methods
    openTheModal() {
        this.signupModal.classList.add("flex");
        this.signupModal.classList.remove("hidden");
        this.signupModal.setAttribute("aria-hidden", "false");
        this.body.classList.add("overflow-hidden");

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
        this.signupModal.classList.add("hidden");
        this.signupModal.classList.remove("flex");
        this.signupModal.setAttribute("aria-hidden", "true");
        this.body.classList.remove("overflow-hidden");
        this.body.removeChild(document.querySelector("[modal-backdrop]"));
    }
}

export default SignupModal;
