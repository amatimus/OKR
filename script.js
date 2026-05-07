//Функція «Діалог з користувачем» (Калькулятор розстрочки)
function calculateInstallment() {
    let priceInput = prompt("Введіть вартість товару для розрахунку розстрочки (грн):", "5000");
    let price = parseInt(priceInput);
    if (isNaN(price) || price <= 0) {
        alert("Помилка: введено некоректну вартість.");
    } else {
        let monthsInput = prompt("На скільки місяців бажаєте розбити платіж? (від 2 до 12)", "3");
        let months = parseInt(monthsInput);

        if (isNaN(months) || months < 2 || months > 12) {
            alert("Будь ласка, вкажіть коректну кількість місяців (від 2 до 12).");
            return;
        }

        let monthlyPayment = (price / months).toFixed(2);
        let schedule = `Графік платежів для суми ${price} грн:\n`;

        for (let i = 1; i <= months; i++) {
            schedule += `Місяць ${i}: ${monthlyPayment} грн\n`;
        }

        alert(schedule + "\nЗверніться до менеджера для швидкого оформлення!");
    }
}
function showDeveloperInfo(lastName, firstName, position = 'Студент') {
    alert(`Команда ТехноЧарт:\nРозробник інтерфейсу: ${firstName} ${lastName}\nПосада: ${position}\n\nДякуємо за використання нашого сайту!`);
}
function comparePrices() {
    let price1 = parseFloat(document.getElementById("price1").value);
    let price2 = parseFloat(document.getElementById("price2").value);

    if (isNaN(price1) || isNaN(price2)) {
        alert("Будь ласка, введіть коректні числа!");
        return;
    }

    if (price1 > price2) {
        alert(`Перший товар дорожчий (на ${price1 - price2} грн). Його ціна: ${price1} грн.`);
    } else if (price2 > price1) {
        alert(`Другий товар дорожчий (на ${price2 - price1} грн). Його ціна: ${price2} грн.`);
    } else {
        alert(`Ціни обох товарів однакові: ${price1} грн.`);
    }
}

function activatePromoMode() {
    let originalBg = document.body.style.backgroundColor;
    let originalColor = document.body.style.color;

    document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
    document.body.style.backgroundColor = "#162530";
    document.body.style.color = "#00cac3";

    alert("Режим 'Чорна п'ятниця' активовано!");

    setTimeout(() => {
        document.body.style.backgroundColor = originalBg;
        document.body.style.color = originalColor;
    }, 30000);
}

function goToPralki() {
    window.location.href = "pralka.html";
}

function updatePromoDOM() {
    let banner = document.getElementById("main-promo-banner");
    let priceElems = document.querySelectorAll(".promo-price");

    if (!banner || priceElems.length === 0) return;

    console.log("Оригінальний код банера до змін (outerHTML):", banner.outerHTML);


    let promoBadge = document.getElementById("promo-badge");
    if (promoBadge) {
        promoBadge.textContent = "СУПЕР АКЦІЯ!";
    }

    let textNodeEl = document.getElementById("promo-text-node");
    if (textNodeEl && textNodeEl.firstChild) {
        textNodeEl.firstChild.nodeValue = " Тільки сьогодні! ";
        setTimeout(() => {
            textNodeEl.firstChild.data += "Поспішайте! ";
        }, 1000);
    }


    banner.innerHTML += "<span style='margin-left:10px; color:#02adca; font-weight:bold;'>Залишилось: 2 год</span>";


    let noteDiv = document.createElement("div");
    noteDiv.style.fontSize = "0.8em";
    noteDiv.style.marginTop = "5px";
    let noteText = document.createTextNode("*Пропозиція діє лише для зареєстрованих користувачів.");
    noteDiv.appendChild(noteText);

    banner.append(noteDiv);

    let icon = document.createElement("span");
    icon.textContent = "🔥 ";
    banner.prepend(icon);

    let separator = document.createElement("hr");
    banner.after(separator);

    let disclaimer = document.createElement("p");
    disclaimer.textContent = "Увага: ціни змінено за допомогою JavaScript.";
    disclaimer.style.color = "#777";
    disclaimer.style.fontSize = "0.85em";
    banner.after(disclaimer);

    let oldPrice = priceElems[0];
    let newPrice = document.createElement("b");
    newPrice.style.color = "#02adca";
    newPrice.style.fontSize = "1.2em";
    newPrice.textContent = "1 500 грн";
    if (oldPrice) {
        oldPrice.replaceWith(newPrice);
    }

    setTimeout(() => {
        banner.remove();
        disclaimer.remove();
        separator.remove();
        console.log("DOM-вузли видалено (node.remove).");
    }, 10000);
}


function highlightImage(imgElement) {
    imgElement.style.transform = "scale(1.1)";
    imgElement.style.border = "3px solid #00cac3";
}


window.addEventListener("DOMContentLoaded", () => {
    let xiaomiImg = document.getElementById("xiaomi-img");
    if (xiaomiImg) {
        xiaomiImg.onmouseleave = function () {
            this.style.transform = "scale(1)";
            this.style.border = "2px solid #02adca";
        };
    }

    let buyBtn = document.getElementById("buy-btn");
    if (buyBtn) {

        buyBtn.addEventListener("click", function () {
            this.style.backgroundColor = "#00cac3";
            this.textContent = "Товар у кошику!";
        });

        buyBtn.addEventListener("click", function () {
            alert("Товар успішно додано до кошика!");
        });
    }

    let discountBanner = document.getElementById("discount-banner");
    if (discountBanner) {
        let discountHandler = {
            handleEvent(event) {

                alert(`Ви отримали промокод: TECHNO-10!\nСпрацювало на елементі: ${event.currentTarget.tagName}`);
                // Зміна стилю
                event.currentTarget.style.backgroundColor = "#27404f";
                event.currentTarget.textContent = "Промокод активовано (TECHNO-10)";
                event.currentTarget.style.cursor = "default";

                event.currentTarget.removeEventListener("click", this);
            }
        };

        discountBanner.addEventListener("click", discountHandler);
    }

    let orderSteps = document.getElementById("order-steps");
    if (orderSteps) {
        orderSteps.onclick = function (event) {
            let target = event.target;
            if (target.tagName !== "LI") return;

            if (target.style.backgroundColor === "rgb(2, 173, 202)" || target.style.backgroundColor === "#02adca") {
                target.style.backgroundColor = "";
                target.style.color = "";
            } else {
                target.style.backgroundColor = "#02adca";
                target.style.color = "white";
            }
        };
    }

    let filterMenu = document.getElementById("filter-menu");
    if (filterMenu) {
        class FilterActions {
            showAll() { alert("Фільтр: Показано всі товари"); }
            showDiscount() { alert("Фільтр: Показано тільки акційні пропозиції"); }
            sortByPrice() { alert("Сортування: Від дешевих до дорогих"); }
        }
        let filterObj = new FilterActions();

        filterMenu.addEventListener("click", function (event) {
            let action = event.target.dataset.action;
            if (action && typeof filterObj[action] === "function") {
                filterObj[action]();
            }
        });
    }

    document.addEventListener("click", function (event) {
        let toggleId = event.target.dataset.toggleId;
        if (!toggleId) return;

        let targetElem = document.getElementById(toggleId);
        if (targetElem) {
            if (targetElem.style.display === "none") {
                targetElem.style.display = "block";
            } else {
                targetElem.style.display = "none";
            }
        }
    });
});
