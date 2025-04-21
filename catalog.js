// mouseover, mouseout та event.target, event.relatedTarget
document.querySelectorAll("li, .image-container img").forEach(elem => {
    elem.addEventListener("mouseover", (event) => {
        const target = event.target;

        // Підсвічуємо лише, якщо курсор увійшов ззовні
        if (!target.contains(event.relatedTarget)) {
            target.style.backgroundColor = "#fff3cd";
            target.style.cursor = "pointer";
            target.style.transition = "background-color 0.3s ease";
        }
    });

    elem.addEventListener("mouseout", (event) => {
        const from = event.target;
        const to = event.relatedTarget;

        // Повертаємо стиль, тільки якщо курсор вийшов повністю
        if (!from.contains(to)) {
            from.style.backgroundColor = "";
            from.style.cursor = "";
        }
    });
});




// Перетягування контейнера  //
let dragElement = null;
let offsetX = 0;
let offsetY = 0;
let currentX = 0;
let currentY = 0;

document.querySelectorAll(".image-container").forEach(container => {
    container.style.cursor = "grab";
    container.dataset.x = "0";
    container.dataset.y = "0";

    container.addEventListener("mousedown", (e) => {
        dragElement = container;

        // Отримуємо останню позицію
        currentX = parseFloat(dragElement.dataset.x);
        currentY = parseFloat(dragElement.dataset.y);

        offsetX = e.clientX;
        offsetY = e.clientY;

        dragElement.style.cursor = "grabbing";
        e.preventDefault();
    });
});

document.addEventListener("mousemove", (e) => {
    if (dragElement) {
        const dx = e.clientX - offsetX;
        const dy = e.clientY - offsetY;

        const newX = currentX + dx;
        const newY = currentY + dy;

        dragElement.style.transform = `translate(${newX}px, ${newY}px)`;

        // зберігаємо поточні координати для наступного переміщення
        dragElement.dataset.x = newX;
        dragElement.dataset.y = newY;
    }
});

document.addEventListener("mouseup", () => {
    if (dragElement) {
        dragElement.style.cursor = "grab";
        dragElement = null;
    }
});


