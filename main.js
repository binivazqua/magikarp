/* =========== HEADER AND NAV =============== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

const openShopping = document.querySelector(".openShopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");


openShopping.addEventListener("click", () => {
    body.classList.remove("active")
})
closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        id: 1,
        name: "PRODUCT 1",
        images: "images/baymax.png",
        price: 2000,
    },
    {
        id: 2,
        name: "PRODUCT 2",
        images: "images/baymax.png",
        price: 2000,
    },
    {
        id: 3,
        name: "PRODUCT 3",
        images: "images/baymax.png",
        price: 2000,
    },
    {
        id: 4,
        name: "PRODUCT 4",
        images: "images/baymax.png",
        price: 2000,
    },
    {
        id: 5,
        name: "PRODUCT 5",
        images: "images/baymax.png",
        price: 2000,
    },
    {
        id: 6,
        name: "PRODUCT 6",
        images: "images/baymax.png",
        price: 2000,
    }
]

let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "img/${value.images}">
            <div class ="title">${value.name}</div>
            <div class "price">${value.price.toLocaleString()}</div>
            <button onclick = "addToCard(${key})"> Add To Card </
            button>
        `
        list.appendChild(newDiv)
    })
}

initApp()

/* Menu is shown */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ====== menu on mobile ======= */
/* quitar el menu cuando le das click */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    /* cuando click en cada elemento, quitar la class de show menu*/
    navMenu.classList.remove('show-menu')

}

navLink.forEach(n => n.addEventListener('click', linkAction))