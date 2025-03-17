document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    let mailtoLink = `mailto:enfantlerich@gmail.com?subject=Message%20de%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0A${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
});
