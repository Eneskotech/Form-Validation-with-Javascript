            const myForm = document.querySelector('#my-form');

            const nameInput = document.querySelector('#name');

            const emailInput = document.querySelector('#email');

            const msg = document.querySelector('.msg');

            const userList = document.querySelector('#users');


            function onSubmit(e) {

                e.preventDefault();


                // Get the values from the inputs
                const name = nameInput.value;

                const email = emailInput.value;


                // Check if the inputs are empty
                if (name === '' || email === '') {

                    msg.innerHTML = 'Please enter your name and email';

                    msg.classList.add('error');

                    setTimeout(function () {

                        msg.innerHTML = '';

                    }, 3000);

                    return;
                }


                // Create a new list item
                const li = document.createElement('li');


                // Create text for the list item
                const text = document.createTextNode(
                    `${name} - ${email}`
                );


                // Put the text inside the li
                li.appendChild(text);


                // Put the li inside the ul
                userList.appendChild(li);


                // Clear the inputs
                nameInput.value = '';

                emailInput.value = '';


                // Show success message
                msg.innerHTML = 'User added successfully!';

                msg.classList.add('success');


                // Remove the message after 3 seconds
                setTimeout(function () {

                    msg.remove();

                }, 3000);

            }


            myForm.addEventListener('submit', onSubmit);