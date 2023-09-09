document.addEventListener("DOMContentLoaded", function() {
    const myLibrary = [];

    function Book(title, author, noofpages, read) {
        this.title = title;
        this.author = author;
        this.noofpages = noofpages;
        this.read = read;
    }

    let submit_button = document.getElementById('1');

    submit_button.addEventListener('click', function(event) {
        event.preventDefault();
        let ids=0;
        let title = document.getElementById("titles").value;
        let author = document.getElementById("authors").value;
        let pages = document.getElementById("pages").value;
        let check_yes = document.querySelector('input[id="radio_yes"]:checked');
        let tables = document.getElementById('table1');

        let readStatus = "Pending";
        
        if (check_yes !== null && check_yes.value === 'yes') {
            readStatus = "Read";
            document.getElementById("radio_yes").checked = false;
            document.getElementById("radio_no").checked = false;
        }

       

        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${pages}</td>
            <td>${readStatus}</td>
            <td><button class="change-button">Change</button></td>
            <td><button class="delete-button">Delete</button></td>
        `;
        tables.appendChild(tableRow);
        tableRow.querySelector('.change-button').addEventListener('click', function() {
            if (readStatus === "Read") {
                readStatus = "Pending";
            } else {
                readStatus = "Read";
            }
            tableRow.querySelector('td:nth-child(4)').textContent = readStatus;
        });
        
        tableRow.querySelector('.delete-button').addEventListener('click', function() {
            let k=0;
            for(let x in myLibrary)
            {
                if(myLibrary[x].author==tableRow.querySelector('td:nth-child(5)').textContent)
                {
                    myLibrary.splice(k,1);
                }
                k++;
            }
            tables.removeChild(tableRow);
            
        });
        let book = new Book(title, author, pages, readStatus,ids);
        myLibrary.push(book);
        

        // Clear the input fields
    });
});