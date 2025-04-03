document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchBar").addEventListener("keyup", function () {
        let input = this.value.toLowerCase().trim();
        let containers = document.querySelectorAll(".container");

        containers.forEach(container => {
            let titleElement = container.querySelector(".title");
            if (titleElement) {
                let titleText = titleElement.textContent.toLowerCase();
                if (titleText.includes(input)) {
                    container.style.display = "grid";  // Show if match
                } else {
                    container.style.display = "none";   // Hide if no match
                }
            }
        });
    });
});