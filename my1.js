document.addEventListener("DOMContentLoaded", function() {
const myLibrary = [];

function Book(title,author,pages,check) {
  // the constructor...
  this.author=author;
  this.title=title;
  this.pages=pages;
  this.check=check;

}
let add_book=document.getElementById("123");
add_book.addEventListener("click",function(){
    window.location.href='index.html';
    
});});
function addBookToLibrary()
{
  // do stuff here
    let title=document.getElementById("titles");
    let author=document.getElementById("authors");
    let pages=document.getElementById("pages");
    let check=document.querySelector('input[id="radio_yes"]:checked');
    let books=new Book(title,author,pages,check);
    myLibrary.push(books);
    if(check==true)
    {
        let table=document.querySelector('table');
        let table_child=document.createElement('tr');
        table.appendChild(table_child);

        let table_child_element1=document.createElement('td');
        table_child_element1.textContent=title.value;
        table_child.appendChild(table_child_element1);

        let table_child_element2=document.createElement('td');
        table_child_element2.textContent=author.value;
        table_child.appendChild(table_child_element2);

        let table_child_element3=document.createElement('td');
        table_child_element3.textContent=pages.value;
        table_child.appendChild(table_child_element3);

        let table_child_element4=document.createElement('td');
        table_child_element4.textContent="Read";
        table_child.appendChild(table_child_element4);

        let table_child_element5=document.createElement('button');
        table_child_element5.textContent="delete";
        table_child.appendChild(table_child_element5);
    }
    else
    {
        let table=document.querySelector('table');
        let table_child=document.createElement('tr');
        table.appendChild(table_child);

        let table_child_element1=document.createElement('td');
        table_child_element1.textContent=title.value;
        table_child.appendChild(table_child_element1);

        let table_child_element2=document.createElement('td');
        table_child_element2.textContent=author.value;
        table_child.appendChild(table_child_element2);

        let table_child_element3=document.createElement('td');
        table_child_element3.textContent=pages.value;
        table_child.appendChild(table_child_element3);

        let table_child_element4=document.createElement('td');
        table_child_element4.textContent="Not Read";
        table_child.appendChild(table_child_element4);
        
        let table_child_element5=document.createElement('button');
        table_child_element5.textContent="delete";
        table_child.appendChild(table_child_element5);

    }

}
});