let readStatus = "Pending";

const myLibrary = [];

const books=function(title, author, pages, readStatus) { // Removed unused 'noofpages' parameter
  return { title, author, pages, readStatus };
}

class onSubmit {
  constructor(title, author, noofpages, read, myLibrary) {
    this.title123= "ram";
    this.author = author;
    this.noofpages = noofpages; // This parameter is defined but not used.
    this.read = read;
    this.myLibrary = myLibrary; // Corrected: Assign the passed myLibrary parameter.
  }
  
  action_on_submit(event) {
    event.preventDefault();
    console.log(this.title123);
    // let check_yes = document.querySelector('input[id="radio_yes"]:checked');
    // let tables = document.getElementById('table1');
    // let readStatus = "Pending";
    // let tableRow = document.createElement('tr');
    // let table_event_func = new onChangeButton(readStatus, tableRow, this.myLibrary); // Corrected: Pass myLibrary as a parameter.
    
    // if (check_yes !== null && check_yes.value === 'yes') {
    //   readStatus = "Read";
    //   document.getElementById("radio_yes").checked = false;
    //   document.getElementById("radio_no").checked = false;
    // }
    
    // tableRow.innerHTML = `
    //   <td>${titles}</td>
    //   <td>${author}</td>
    //   <td>${pages}</td>
    //   <td>${readStatus}</td>
    //   <td><button class="change-button">Change</button></td>
    //   <td><button class="delete-button">Delete</button></td>
    // `;
    
    // tables.appendChild(tableRow);
    
    // // tableRow.querySelector('.change-button').addEventListener('click', table_event_func.on_change_button1);
    // // tableRow.querySelector('.delete-button').addEventListener('click', table_event_func.on_delete_button);
    
    // let book = new books(this.title, this.author,this.noofpages,this.readStatus); // Use 'this' to access class method.
    // this.myLibrary.push(book);
  }
  
  
}


// class onChangeButton {
//   constructor(readStatus, tableRow, myLibrary) { // Pass myLibrary as a parameter
//     this.readStatus = readStatus;
//     this.tableRow = tableRow;
//     this.myLibrary = myLibrary; // Assign myLibrary as a property
//   }

//   on_change_button1() {
//     if (this.readStatus === "Read") {
//       this.readStatus = "Pending";
//     } else {
//       this.readStatus = "Read";
//     }
    
//     this.tableRow.querySelector('td:nth-child(4)').textContent = this.readStatus;
//   }

//   on_delete_button() {
//     let k = 0;
//     let tables = document.getElementById('table1');
//     for (let x in this.myLibrary) {
//       if (this.myLibrary[x].author == this.tableRow.querySelector('td:nth-child(5)').textContent) {
//         this.myLibrary.splice(k, 1);
//       }
//       k++;
//     }
    
//     tables.removeChild(this.tableRow);
//   }
// }
let title = document.getElementById("titles").value;
let author = document.getElementById("authors").value;
let pages = document.getElementById("pages").value;

let onSubmit1 = new onSubmit("ram", author, pages, readStatus, myLibrary);
let submit_button = document.getElementById('1');
// Corrected: Assign the bound function to action_on_submit
// onSubmit1.action_on_submit = onSubmit1.action_on_submit.bind(submit_button);



submit_button.addEventListener('click', onSubmit1.action_on_submit);

