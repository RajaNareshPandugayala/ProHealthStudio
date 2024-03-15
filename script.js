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

// document.addEventListener("DOMContentLoaded", () => {
//     const photos = document.querySelectorAll(".galeria_images img");
//     const photoButtons = document.querySelectorAll(".galeria_images_buttons .photos_button");
//     let currentPhotoIndex = 0;

//     const changePhoto = (index) => {
//         photos.forEach(photo => photo.style.display = "none");
//         photos[index].style.display = "block";
//         updateButtonStyles(index);
//     };

//     const updateButtonStyles = (index) => {
//         photoButtons.forEach(button => button.style.backgroundColor = "lightgray");
//         photoButtons[index].style.backgroundColor = "#5F9BCE";
//     };

//     const autoChangePhoto = () => {
//         setInterval(() => changePhoto(currentPhotoIndex = (currentPhotoIndex + 1) % photos.length), 3000);
//     };

//     const handlePhotoButtonClick = (index) => () => {
//         currentPhotoIndex = index;
//         changePhoto(currentPhotoIndex);
//     };

//     autoChangePhoto();

//     photoButtons.forEach((button, index) => button.addEventListener("click", handlePhotoButtonClick(index)));

//     changePhoto(currentPhotoIndex);
// });




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

    const handleMouseClick = (event) => {
        const mouseX = event.clientX;
        const windowWidth = window.innerWidth;

        // Check if the clicked element has the .galeria class
        if (event.target.closest('.galeria')) {
            if (mouseX < windowWidth / 2) {
                // Clicked on the left side, go to the previous image
                currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
            } else {
                // Clicked on the right side, go to the next image
                currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
            }

            changePhoto(currentPhotoIndex);
        }
    };

    autoChangePhoto();

    photoButtons.forEach((button, index) => button.addEventListener("click", handlePhotoButtonClick(index)));
    document.addEventListener("click", handleMouseClick);

    changePhoto(currentPhotoIndex);
});




/************************ code for photos end**************************** */








/************************ code for header Menu hide (different mobile views) start**************************** */

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menubtn");
    const closeButton = document.getElementById("closebtn");
    const menuLists = document.querySelectorAll(".header_main-menu_ul");

    menuLists.forEach(function (menuList) {
        menuList.style.display = "none";
    });


    // Add event listener to document body for clicks
    document.body.addEventListener("click", function (event) {
        const target = event.target;
        // Check if the click target is not inside the menu or menu button
        if (!target.closest('.header_main-menu') && !target.closest('#menubtn')) {
            // Close the menu
            closeButton.click();
        }
    });




    menuButton.addEventListener("click", function () {
        const screenWidth = window.innerWidth;
        let targetMenu;
        if (screenWidth < 800) {
            targetMenu = document.querySelector('.header_main-menu_ul04');
        } else if (screenWidth < 1000) {
            targetMenu = document.querySelector('.header_main-menu_ul03');
        } else if (screenWidth < 1100) {
            targetMenu = document.querySelector('.header_main-menu_ul02');
        } else {
            targetMenu = document.querySelector('.header_main-menu_ul01');
        }
        targetMenu.style.display = "inline-block";
        menuButton.style.display = "none";
        closeButton.style.display = "inline-block";
    });

    closeButton.addEventListener("click", function () {
        const screenWidth = window.innerWidth;
        let targetMenu;
        if (screenWidth < 800) {
            targetMenu = document.querySelector('.header_main-menu_ul04');
        } else if (screenWidth < 1000) {
            targetMenu = document.querySelector('.header_main-menu_ul03');
        } else if (screenWidth < 1100) {
            targetMenu = document.querySelector('.header_main-menu_ul02');
        } else {
            targetMenu = document.querySelector('.header_main-menu_ul01');
        }
        targetMenu.style.display = "none";
        menuButton.style.display = "inline-block";
        closeButton.style.display = "none";
    });

    // Function to handle visibility based on screen width
    function handleVisibility() {
        // Get the width of the screen
        const screenWidth = window.innerWidth;

        // Hide all menu lists by default
        menuLists.forEach(function (menuList) {
            menuList.style.display = "none";
        });

        // Hide all buttons by default
        menuButton.style.display = "inline-block";
        closeButton.style.display = "none";

        // Conditionally show menu list and buttons based on screen width
        if (screenWidth < 800) {
            document.querySelector('.header_main-menu_ul04').style.display = 'none';
        } else if (screenWidth < 1000) {
            document.querySelector('.header_main-menu_ul03').style.display = 'none';
        } else if (screenWidth < 1100) {
            document.querySelector('.header_main-menu_ul02').style.display = 'none';
        } else {
            document.querySelector('.header_main-menu_ul01').style.display = 'none';
        }

    }


    // Function to close the menu when Esc key is pressed
    function closeMenuOnEsc(event) {
        if (event.key === "Escape") {
            closeButton.click(); // Simulate a click on the close button
        }
    }

    // Add event listener for keydown event on the document
    document.addEventListener("keydown", closeMenuOnEsc);



    document.addEventListener("unload", function () {
        document.removeEventListener("keydown", closeMenuOnEsc);
    });



    // Call the function initially
    handleVisibility();

    // Add event listener for window resize event
    window.addEventListener('resize', function () {
        // Call the function whenever the window is resized
        handleVisibility();
    });


    // Add event listener to each menu item to close menu on click
    document.querySelectorAll('.header_main-menu_ul-li-a').forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            closeButton.click();
        });
    });

});





function handleVisibility() {
    // Get the width of the screen
    const screenWidth = window.innerWidth;

    // Get references to the elements
    const headerRightSide01 = document.querySelector('.header_rightside01');
    const headerRightSide02 = document.querySelector('.header_rightside02');
    const headerRightSide03 = document.querySelector('.header_rightside03');
    const headerRightSide04 = document.querySelector('.header_rightside04');

    const headerRightSides = document.querySelectorAll('.header_rightside');


    // Hide all menu lists by default
    headerRightSides.forEach(function (headerRightSide) {
        headerRightSide.style.display = "none";
    });


    // Condition 2: hide .header_rightside01 and show .header_rightside02 if screen width is less than 1100px
    if (screenWidth < 800) {
        // Hide all menu lists by default
        headerRightSides.forEach(function (headerRightSide) {
            headerRightSides.style.display = "none";
        });
        headerRightSide04.style.display = 'flex';

    } else if (screenWidth < 1000) {
        // Hide all menu lists by default
        headerRightSides.forEach(function (headerRightSide) {
            headerRightSide.style.display = "none";
        });
        headerRightSide03.style.display = 'flex';

    } else if (screenWidth < 1100) {
        // Hide all menu lists by default
        headerRightSides.forEach(function (headerRightSide) {
            headerRightSide.style.display = "none";
        });
        headerRightSide02.style.display = 'flex';

    } else {
        // Hide all menu lists by default
        headerRightSides.forEach(function (headerRightSide) {
            headerRightSide.style.display = "none";
        });
        headerRightSide01.style.display = 'flex';
    }
}

// Call the function initially
handleVisibility();

window.addEventListener('resize', function () {
    // Call the function whenever the window is resized
    handleVisibility();
});

/************************ code for header Menu hide (different mobile views) end**************************** */
