const cards = document.querySelector('.cards');
const addButton = document.querySelector('.addButton');
const showDialog = document.querySelector('.show-add-dialog');
const closeButton = document.querySelector('.close');
const dialog = document.querySelector('dialog');
const inputs = document.querySelectorAll('input');
const errorMessage = document.querySelector('#error');



const myLibrary = [];

// function Book(title, author, pages, isRead){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
// }

class Book {
    #title;
    #author;
    #pages;
    #isRead;

    constructor(title, author, pages, isRead){
        this.#title = title;
        this.#author = author;
        this.#pages = pages;
        this.#isRead = isRead;
    }

    get title(){
        return this.#title;
    }

    get author(){
        return this.#author;
    }

    get pages(){
        return this.#pages;
    }

    get isRead(){
        return this.#isRead;
    }
}

function addBookToLibrary(title, author, pages, isRead){
    const book = new Book(title, author, pages, isRead);

    myLibrary.push(book);
}

function displayBookInfo(){
    while(cards.firstChild){
        cards.removeChild(cards.firstChild);
    }
    for(i = 0; i < myLibrary.length; i++){
        const index = i;
        const titleLabel = document.createElement('p')
        titleLabel.textContent = 'Title: ';
        const authorLabel = document.createElement('p');
        authorLabel.textContent = 'Author: ';
        const pageLabel = document.createElement('p');
        pageLabel.textContent = 'Pages: ';
        const readLabel = document.createElement('p');
        readLabel.textContent = 'Read Status';

        const card = document.createElement('div');
        card.className = 'card';

        

        const title = document.createElement('p');
        title.textContent = myLibrary[i].title;

        const author = document.createElement('p');
        author.textContent = myLibrary[i].author;

        const pages = document.createElement('p');
        pages.textContent = myLibrary[i].pages;

        const readStatus = document.createElement('p');
        readStatus.textContent = myLibrary[i].isRead ? 'Read' : "Not Read";

        const isReadButton = document.createElement('button');
        isReadButton.innerHTML = myLibrary[i].isRead ? "Not Read" : 'Read'; 
        isReadButton.className = 'read';

        isReadButton.addEventListener('click', ()=>{
            isReadButton.innerHTML = isReadButton.innerHTML == 'Read' ? "Not Read" : 'Read';
            myLibrary[index].isRead = isReadButton.innerHTML == 'Read' ? true : false;
            readStatus.textContent = myLibrary[index].isRead ? "Not Read" : 'Read';
        });



        const removeButton = document.createElement('button');
        removeButton.addEventListener('click', ()=>{
            myLibrary.splice(index, 1);
            displayBookInfo();
        });

        removeButton.innerHTML = "Remove Book";
        
        card.appendChild(titleLabel);
        card.appendChild(title);
        card.appendChild(authorLabel);
        card.appendChild(author);
        card.appendChild(pageLabel);
        card.appendChild(pages);
        card.appendChild(readLabel);
        card.appendChild(readStatus);
        card.appendChild(isReadButton);
        card.appendChild(removeButton);
        cards.appendChild(card);

    }
}

closeButton.addEventListener('click', ()=>{
    inputs.forEach((input)=>{
        input.value = '';
    })
    dialog.close();
});

showDialog.addEventListener('click', ()=>{
    dialog.showModal();
});

addButton.addEventListener('click', ()=>{
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const isRead = document.querySelector('#read').checked;
    
    if(!title.checkValidity() || !author.checkValidity() || !pages.checkValidity()){
        errorMessage.innerHTML = "Please fill the fields";
    }

    else {
        errorMessage.innerHTML = "";
        addBookToLibrary(title.value, author.value, pages.value, isRead);
        inputs.forEach((input)=>{
            input.value = '';
        })
        dialog.close();
        displayBookInfo();
    }

        
});