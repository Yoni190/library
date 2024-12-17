const cards = document.querySelector('.cards');
const addButton = document.querySelector('.addButton');
const showDialog = document.querySelector('.show-add-dialog');
const closeButton = document.querySelector('.close');
const dialog = document.querySelector('dialog');
const inputs = document.querySelectorAll('input');

const titleLabel = document.createElement('p')
titleLabel.textContent = 'Title: ';
const authorLabel = document.createElement('p');
authorLabel.textContent = 'Author: ';
const pageLabel = document.createElement('p');
pageLabel.textContent = 'Pages: ';

const myLibrary = [];

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
    while(cards.firstChild){
        cards.removeChild(cards.firstChild);
    }
    for(i = 0; i < myLibrary.length; i++){
        const index = i;

        const card = document.createElement('div');
        card.className = 'card';

        

        const title = document.createElement('p');
        title.textContent = myLibrary[i].title;

        const author = document.createElement('p');
        author.textContent = myLibrary[i].author;

        const pages = document.createElement('p');
        pages.textContent = myLibrary[i].pages;

        const isRead = document.createElement('button');
        isRead.innerHTML = myLibrary[i].isRead ? "Not Read" : 'Read'; 
        isRead.className = 'read';

        isRead.addEventListener('click', ()=>{
            isRead.innerHTML = isRead.innerHTML == 'Read' ? "Not Read" : 'Read';
            myLibrary[index].isRead = isRead.innerHTML;
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
        card.appendChild(isRead);
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
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#read').checked;
    console.log(isRead);

    addBookToLibrary(title, author, pages, isRead);
    inputs.forEach((input)=>{
        input.value = '';
    })
    dialog.close();
    displayBookInfo();
});