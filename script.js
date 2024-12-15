const main = document.querySelector('.main');
const addButton = document.querySelector('.addButton');

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
        const isRead = document.createElement('button');
        isRead.innerHTML = myLibrary[i].isRead ? "Not Read" : 'Read'; 
        isRead.className = 'read';
        card.className = 'card';

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(isRead);
        main.appendChild(card);

        console.log(myLibrary[i].title);
    }
}

addButton.addEventListener('click', ()=>{
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#read').checked;
    console.log(isRead);

    addBookToLibrary(title, author, pages, isRead);
    displayBookInfo();
});