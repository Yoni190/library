const main = document.querySelector('.main');
const addButton = document.querySelector('.addButton');
const showDialog = document.querySelector('.show-add-dialog');
const closeButton = document.querySelector('.close');
const dialog = document.querySelector('dialog');
const inputs = document.querySelectorAll('input');

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
    while(main.firstChild){
        main.removeChild(main.firstChild);
    }
    for(i = 0; i < myLibrary.length; i++){
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

        const index = i;

        const removeButton = document.createElement('button');
        removeButton.addEventListener('click', ()=>{
            myLibrary.splice(index, 1);
            displayBookInfo();
        });

        removeButton.innerHTML = "Remove Book";
        

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(isRead);
        card.appendChild(removeButton);
        main.appendChild(card);

        console.log(myLibrary);
    }
}

closeButton.addEventListener('click', ()=>{
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