document.addEventListener("DOMContentLoaded", function() {     
   
    const myLibrary = [];
    class onSubmit 
    {
        constructor() 
        {
        }
        books(title, author,noofpages,readStatus)
        {
            return {title,author,noofpages,readStatus};
        }
        action_on_submit(event) 
        {

          event.preventDefault();
          console.log();
          let title= document.getElementById("titles").value;
          let author = document.getElementById("authors").value;
          let noofpages = document.getElementById("pages").value;
          let check_yes = document.querySelector('input[id="radio_yes"]:checked');
          let tables = document.getElementById('table1');
          let readStatus = "Pending";
          let tableRow = document.createElement('tr');
          // Corrected: Pass myLibrary as a parameter.
          
          if (check_yes !== null && check_yes.value === 'yes') {
            readStatus = "Read";
            document.getElementById("radio_yes").checked = false;
            document.getElementById("radio_no").checked = false;
          }
          
          tableRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${noofpages}</td>
            <td>${readStatus}</td>
            <td><button class="change-button">Change</button></td>
            <td><button class="delete-button">Delete</button></td>
            `;

          
          
          let book = this.books(title, author,noofpages,readStatus);
          myLibrary.push(book);
          let table_event_func = new onChangeButton(readStatus, tableRow, myLibrary,tables);
          console.log(tableRow.querySelector('.change-button'));
          tableRow.querySelector('.change-button').addEventListener('click', ()=>{
            table_event_func.on_change_button1();
          });
          tableRow.querySelector('.delete-button').addEventListener('click', ()=>{
            table_event_func.on_delete_button();
          });
          tables.appendChild(tableRow);
          
          
        }
        
        
        
    }
class onChangeButton {
  constructor(readStatus, tableRow, myLibrary,tables) { // Pass myLibrary as a parameter
    this.readStatus = readStatus;
    this.tableRow = tableRow;
    this.myLibrary = myLibrary; // Assign myLibrary as a property
    this.tables=tables;
  }

  on_change_button1() {
    if (this.readStatus === "Read") {
      this.readStatus = "Pending";
    } else {
      this.readStatus = "Read";
    }
    this.tableRow.querySelector('td:nth-child(4)').textContent = this.readStatus;
  }

  on_delete_button() {
    let k = 0;
    let tables = document.getElementById('table1');
    for (let x in this.myLibrary) {
      if (this.myLibrary[x].author == this.tableRow.querySelector('td:nth-child(5)').textContent) {
        this.myLibrary.splice(k, 1);
      }
      k++;
    }
    
    tables.removeChild(this.tableRow);
  }
}
    let submit_button = document.getElementById('1');
    let onSubmit1=new onSubmit();
    onSubmit1.action_on_submit=onSubmit1.action_on_submit.bind(onSubmit1);
    submit_button.addEventListener('click', onSubmit1.action_on_submit);

});