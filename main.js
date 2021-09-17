    // 1.Dom Selection 
    // 2.Event Listner
    // 3.Basic Validations 
    // 4.Creating Element
    // 5.Append 

    // Dom Selection
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const year = document.querySelector('#year');
    const email = document.querySelector('#email');
    const submit = document.querySelector('.custom-btn');
    const reset = document.querySelector('.reset-btn');
    const bookList = document.querySelector('#book-list');

    // Event Listner

    submit.addEventListener('click', function(e){
        e.preventDefault();
       
        if(title.value == '' && author.value == '' && year.value == '' && email.value == '')
        {
            alert("Please Write Submit");
        }
        else{
            const newRow = document.createElement('tr');

        


            const newTitle = document.createElement('th');
            newTitle.innerHTML = title.value;
            newRow.appendChild(newTitle);

            const newAuthor = document.createElement('th');
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor);

            const newYear = document.createElement('th');
            newYear.innerHTML = year.value;
            newRow.appendChild(newYear);

            const newEmail = document.createElement('th');
            newEmail.innerHTML = email.value;
            newRow.appendChild(newEmail);

            // Show Table 
            bookList.appendChild(newRow);


           

        }
    })

    function myFunction() {
        document.getElementById("myForm").reset();
      }
    // reset.addEventListener('click', resetAll);

    // function resetAll() {
    //     document.getElementById("myForm").reset();

    // }




