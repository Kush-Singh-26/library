const library = [{ title: "Harry Potter", author: "JK Rowling", pages: 500, read: "Not read" }];

const addBtn = document.querySelector(".addBtn");
const popup = document.querySelector(".popup");
const form = document.querySelector("form");
const close = document.querySelector(".close");
const container = document.querySelector(".book-container");
const submitBtn = document.querySelector(".submit");

addBtn.addEventListener('click', () => {
    popup.classList.remove("popup");
    popup.classList.add("popup-show");
    addBtn.classList.remove("addBtn");
    addBtn.classList.add("addBtn-hide");
    container.classList.add("container-hide");
});

close.addEventListener('click', () => {
    popup.classList.remove("popup-show");
    popup.classList.add("popup");
    addBtn.classList.remove("addBtn-hide");
    addBtn.classList.add("addBtn");
    container.classList.remove("container-hide");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
    form.reset();
    popup.classList.remove("popup-show");
    popup.classList.add("popup");
    addBtn.classList.remove("addBtn-hide");
    addBtn.classList.add("addBtn");
    container.classList.remove("container-hide");
});

function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    const author = form.elements["author"].value;
    const title = form.elements["title"].value;
    const pages = form.elements["pages"].value;
    const read = form.elements["read"].checked ? "Read" : "Not read";

    if (!author || !title || !pages) {
        alert("Please fill out all required fields.");
        return;
    }

    library.push(new Book(author, title, pages, read));
    makeCard();
}

function makeCard() {
    container.innerHTML = ''; 
    library.forEach((book, idx) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = idx;

        const tags = `
            <div class="card-upper">
                <h2>${book.title}</h2>
                <p>by <span class="author-name">${book.author}</span></p>
                <p>${book.pages} Pages</p>
                <p>Status: <span class="book-status">${book.read}</span></p>
            </div>
            <div class="card-buttons">
                <button class="delbook" data-id="${idx}">Remove</button>
                <button class="toggle-status" data-id="${idx}">${book.read === "Read" ? "Not Read" : "Read"}</button>
            </div>
        `;
        card.classList.add(book.read === "Not read" ? "border-notread" : "border-read");
        card.innerHTML = tags;
        container.appendChild(card);
    });

    document.querySelectorAll('.delbook').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = e.target.dataset.id;
            library.splice(idx, 1);
            makeCard();
        });
    });

    document.querySelectorAll('.toggle-status').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = e.target.dataset.id;
            library[idx].read = library[idx].read === "Read" ? "Not read" : "Read";
            makeCard();
        });
    });
}

makeCard();
