function smoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function formValidation() {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

        var email = document.querySelector('input[type="email"]').value;
        var feedback = document.querySelector('.feedback');

        if (feedback) {
            feedback.remove();
        }

        if (!email) {
            document.querySelector('form').insertAdjacentHTML('beforeend', '<p class="feedback" style="color: red;">Please enter your email.</p>');
        } else if (!validateEmail(email)) {
            document.querySelector('form').insertAdjacentHTML('beforeend', '<p class="feedback" style="color: red;">Please enter a valid email.</p>');
        } else {
            document.querySelector('form').insertAdjacentHTML('beforeend', '<p class="feedback" style="color: green;">Thank you for subscribing!</p>');
            var successMessage = document.createElement('p');
            successMessage.textContent = 'Form submitted successfully!';
            document.body.appendChild(successMessage);
            clearForm();
        }
        setTimeout(clearFeedback, 3000);
    });
}

function clearFeedback() {
    var feedback = document.querySelector('.feedback');

    if (feedback) {
        feedback.remove();
    }
}

function clearForm() {
    document.querySelector('input[type="email"]').value = '';
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

smoothScrolling();
formValidation();