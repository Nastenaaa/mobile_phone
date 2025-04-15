// 2 Діалог з користувачем
function dialogWithUser() {
    let repeat;
    do {
        let product = prompt("Який товар ви шукаєте?");
        if (product) {
            alert(`Ми постараємося знайти "${product}" у нашому каталозі!`);
        }
        repeat = confirm("Хочете спробувати ще?");
    } while (repeat);
}
dialogWithUser();

// 3 Інформація про розробника
function showDeveloperInfo(surname, name, position) {
    alert(`Розробник сторінки: ${surname} ${name}, посада: ${position}`);
}
showDeveloperInfo("Дригант", "Анастасія");

// 4 Порівняння рядків
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакової довжини.");
    }
}
compareStrings("телефон", "аксесуари");

// 5 Зміна фону на 30 секунд
document.body.style.background = "#f0e6ff";
setTimeout(() => {
    document.body.style.background = "";
}, 30000);

// 6 Перенаправлення через 10 секунд
//setTimeout(() => {
//    location.href = "index.html";
//}, 10000);

// 7 getElementById
const highlight = document.getElementById("highlighted-text");
highlight.style.fontWeight = "bold";

// 8 querySelectorAll
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(p => p.style.marginBottom = "15px");

// 9 innerHTML, outerHTML, textContent, nodeValue/data
console.log("innerHTML:", highlight.innerHTML);
console.log("outerHTML:", highlight.outerHTML);
console.log("textContent:", highlight.textContent);
if (highlight.firstChild) {
    console.log("nodeValue/data:", highlight.firstChild.nodeValue || highlight.firstChild.data);
}

// 10 Вставка, створення, видалення 
const newParagraph = document.createElement("p");
const textNode = document.createTextNode("Ми постійно оновлюємо наш асортимент, щоб задовольнити потреби кожного клієнта.");
newParagraph.appendChild(textNode);
document.body.append(newParagraph);

const newHeading = document.createElement("h4");
newHeading.textContent = "Що нового?";
document.body.prepend(newHeading);

const afterNav = document.createElement("p");
afterNav.textContent = "Додано новий розділ з преміальними аксесуарами.";
document.querySelector("nav").after(afterNav);

const replaceText = document.createElement("p");
replaceText.textContent = "Кожен товар проходить перевірку якості перед потраплянням на вітрину.";
const oldText = document.getElementById("highlighted-text");
if (oldText) {
    oldText.replaceWith(replaceText);
}

setTimeout(() => {
    newParagraph.remove();
}, 15000);

