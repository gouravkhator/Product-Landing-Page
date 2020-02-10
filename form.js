//form
//regex in this taken from : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
        document.body.style.backgroundColor = 'rgb(165, 241, 165)';
        return true;
    }
    else {
        document.body.style.backgroundColor = 'rgb(248, 126, 126)';
        return false;
    }
}

function validateUser(username) {
    if (username.length < 6) {
        document.body.style.backgroundColor = 'rgb(248, 126, 126)';
        return false;
    }
    else {
        document.body.style.backgroundColor = 'rgb(165, 241, 165)';
        return true;
    }
}
const downArrow = document.querySelectorAll('.fa-arrow-down');
downArrow.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const field = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextElement = parent.nextElementSibling;

        function correctInput() {
            parent.classList.add('inactive');
            parent.classList.remove('active');
            nextElement.classList.add('active');
            nextElement.classList.remove('inactive');
        }
        if (field.id === 'username' && validateUser(field.value)) {
            //username
            correctInput();
        }
        else if (field.id === 'email' && validateEmail(field.value)) {
            //email
            correctInput();
        }
        else if (field.id === 'password' && validateUser(field.value)) {
            //password
            correctInput();
            setTimeout(() => {
                window.location.replace('index.html');

            }, 2000);
        }
        else {
            //rotate the parent as at least one stage the parent didn't validate correctly
            if (parent.style.animation) {
                parent.style.animation = ''
            }
            else {
                parent.style.animation = 'rotateField 0.5s ease'
            }
        }
        parent.addEventListener('animationend', () => {
            parent.style.animation = ''
        }); //animation end is needed to track if animation is still on ,if its not on then only the next iteration will go .
    });
});