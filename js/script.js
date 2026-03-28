

const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


const modeToggleBtn = document.getElementById('modeToggle');
const body = document.body;


const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    modeToggleBtn.textContent = 'Light Mode';
} else {
    modeToggleBtn.textContent = 'Dark Mode';
}

modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        modeToggleBtn.textContent = 'Light Mode';
    } else {
        localStorage.setItem('mode', 'light');
        modeToggleBtn.textContent = 'Dark Mode';
    }
});

setTimeout(() => {
    console.log('Welcome to Kero Fashion!');
}, 500);

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            clearErrors();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            let isValid = true;
            if (name === '') {
                showError('nameError', 'Please enter your name');
                markInvalid('name');
                isValid = false;
            } else if (name.length < 2) {
                showError('nameError', 'Name must be at least 2 characters');
                markInvalid('name');
                isValid = false;
            }
            if (email === '') {
                showError('emailError', 'Please enter your email');
                markInvalid('email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Please enter a valid email address (e.g., name@example.com)');
                markInvalid('email');
                isValid = false;
            }
            if (subject === '') {
                showError('subjectError', 'Please enter a subject');
                markInvalid('subject');
                isValid = false;
            } else if (subject.length < 3) {
                showError('subjectError', 'Subject must be at least 3 characters');
                markInvalid('subject');
                isValid = false;
            }
            if (message === '') {
                showError('messageError', 'Please enter your message');
                markInvalid('message');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters');
                markInvalid('message');
                isValid = false;
            }
            if (isValid) {
                alert('Message sent successfully! I will get back to you soon.');
                contactForm.reset();
            }
        });
    }
});
function showError(elementId, message) {
    const errorSpan = document.getElementById(elementId);
    if (errorSpan) {
        errorSpan.textContent = message;
    }
}
function markInvalid(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        input.classList.add('error');
    }
}
function clearErrors() {
    const errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(span => span.textContent = '');
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => input.classList.remove('error'));
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    return emailRegex.test(email);
}