/************************ code for language start************************** */

document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('languageButton');

    // Function to change the language and store it in localStorage
    function changeLanguage(languageCode) {
        try {
            localStorage.setItem('preferredLanguage', languageCode); // Store language preference
            location.reload(); // Refresh the page to apply the changes
        } catch (error) {
            console.error('Error changing language:', error);
        }
    }

    // Event listener for the language button
    languageButton.addEventListener('click', function () {
        // Check the current language and toggle it
        const currentLanguage = localStorage.getItem('preferredLanguage') || navigator.language || navigator.userLanguage;
        const isEnglish = currentLanguage.toLowerCase().startsWith('en');
        // languageButton.textContent = isEnglish ? "Spanish" : "English";
        changeLanguage(isEnglish ? 'es' : 'en'); // Set the language accordingly
    });

    // // Set initial text content of the button based on the user's language
    // const currentLanguage = localStorage.getItem('preferredLanguage') || navigator.language || navigator.userLanguage;
    // const isEnglish = currentLanguage.toLowerCase().startsWith('en');
    // languageButton.textContent = isEnglish ? "Spanish" : "English";
});

/************************ code for language end************************** */







/************************ code for comments start************************** */

document.addEventListener("DOMContentLoaded", function () {
    const comments = document.querySelectorAll('.testimonios_comments');
    const leftArrow = document.querySelector('.testimonios_comments_left_arrow_button');
    const rightArrow = document.querySelector('.testimonios_comments_right_arrow_button');
    let index = 0;

    function showComment() {
        comments.forEach((comment, i) => {
            comment.style.display = i === index ? 'block' : 'none';
        });
    }

    function changeComment(direction) {
        index = (index + direction + comments.length) % comments.length;
        showComment();
    }

    showComment();

    rightArrow.addEventListener('click', () => changeComment(1));
    leftArrow.addEventListener('click', () => changeComment(-1));

    setInterval(() => changeComment(1), 5000);
});

/************************ code for comments end************************** */








/************************ code for photos start**************************** */

document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".galeria_images img");
    const photoButtons = document.querySelectorAll(".galeria_images_buttons .photos_button");
    let currentPhotoIndex = 0;

    const changePhoto = (index) => {
        photos.forEach(photo => photo.style.display = "none");
        photos[index].style.display = "block";
        updateButtonStyles(index);
    };

    const updateButtonStyles = (index) => {
        photoButtons.forEach(button => button.style.backgroundColor = "lightgray");
        photoButtons[index].style.backgroundColor = "#5F9BCE";
    };

    const autoChangePhoto = () => {
        setInterval(() => changePhoto(currentPhotoIndex = (currentPhotoIndex + 1) % photos.length), 3000);
    };

    const handlePhotoButtonClick = (index) => () => {
        currentPhotoIndex = index;
        changePhoto(currentPhotoIndex);
    };

    autoChangePhoto();

    photoButtons.forEach((button, index) => button.addEventListener("click", handlePhotoButtonClick(index)));

    changePhoto(currentPhotoIndex);
});


/************************ code for photos end**************************** */
