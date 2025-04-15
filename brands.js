
// атрибут li onclick="showBrandName(this)"
function showBrandName(element) {
    const brand = element.textContent.split("-")[0].trim();
    alert(`Ви обрали бренд: ${brand}`);
}

// призначення обробника
const appleCell = document.querySelector("td:first-child");
appleCell.onclick = function () {
    alert("Це детальна інформація про Apple.");
};

// addEventListener
const samsungRow = document.querySelectorAll("tbody tr")[1];

function showSamsungAlert() {
    alert("Samsung — один із провідних виробників Android-смартфонів.");
}
function logSamsungInfo() {
    console.log("Samsung: інженерна точність і стиль.");
}

samsungRow.addEventListener("click", showSamsungAlert);
samsungRow.addEventListener("click", logSamsungInfo);

// handleEvent
const xiaomiRow = document.querySelectorAll("tbody tr")[2];

const xiaomiHandler = {
    handleEvent(event) {
        const brand = event.currentTarget.querySelector("td").textContent;
        alert(`Ви клікнули по бренду ${brand}. Надійний та доступний вибір!`);
    }
};

xiaomiRow.addEventListener("click", xiaomiHandler);

// removeEventListener
setTimeout(() => {
    samsungRow.removeEventListener("click", logSamsungInfo);
    console.log("Обробник логування Samsung видалено через 10 секунд.");
}, 10000);


// підсвічування елементів списку
const brandList = document.querySelector(".content ul");

brandList.onclick = function (event) {
    const clickedLi = event.target.closest("li");
    if (clickedLi && brandList.contains(clickedLi)) {
        [...brandList.children].forEach(li => li.style.background = "");
        clickedLi.style.background = "#fff7cc";
    }
};


//  меню
const menu = document.querySelector(".menu");
const table = document.querySelector(".complex-table");

menu.onclick = function (event) {
    const action = event.target.dataset.action;

    if (action === "highlight") {
        table.style.boxShadow = "0 0 10px green";
        alert("Таблицю підсвічено для зручності перегляду!");
    } else if (action === "reset") {
        table.style.boxShadow = "";
        alert("Підсвічування таблиці скинуто.");
    }
};


// поведінка через data-behavior
document.addEventListener("click", function (event) {
    const behavior = event.target.dataset.behavior;

    if (behavior === "alertBrand") {
        alert("Ця кнопка демонструє поведінку: бренди — це більше, ніж просто назви!");
    }
});
