const main = document.querySelector('.main');

const bookTest = {title: "The Hobbit", author: "JRR Tolkien", pages: 295};

const myLibrary = [bookTest];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead){
    const book = new Book(title, author, pages, isRead);

    myLibrary.push(book);
}

function displayBookInfo(){
    for(i = 0; i < myLibrary.length; i++){
        const card = document.createElement('div');
        const title = document.createElement('p');
        title.textContent = myLibrary[i].title;
        const author = document.createElement('p');
        author.textContent = myLibrary[i].author;
        const pages = document.createElement('p');
        pages.textContent = myLibrary[i].pages;
        card.className = 'card';

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        main.appendChild(card);

        console.log(myLibrary[i].title);
    }
}
displayBookInfo();