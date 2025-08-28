// Corrected script.js
document.addEventListener('DOMContentLoaded', () => {
    const chapters = document.querySelectorAll('.story-section');
    const continueButtons = document.querySelectorAll('.continue-btn');
    const backButton = document.querySelector('.back-button');
    const menuItems = document.querySelectorAll('.menu-dropdown a');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.menu-dropdown');
    const header = document.querySelector('.header');

    // Initial state
    showChapter(1);
    updateBackButton();

    function showChapter(chapterNum) {
        chapters.forEach(chapter => {
            if (parseInt(chapter.id.split('-')[1]) === chapterNum) {
                chapter.classList.add('active-chapter');
            } else {
                chapter.classList.remove('active-chapter');
            }
        });
    }

    function updateUrl(chapterNum) {
        history.pushState({
            chapter: chapterNum
        }, `Chapter ${chapterNum}`, `?chapter=${chapterNum}`);
    }

    function updateBackButton() {
        if (history.length > 1) {
            backButton.classList.remove('hidden');
        } else {
            backButton.classList.add('hidden');
        }
    }

    // Event Listeners
    header.addEventListener('click', (event) => {
        if (!event.target.closest('.hamburger-menu')) {
            showChapter(1);
            updateUrl(1);
            updateBackButton();
        }
    });

    // The corrected event listener for the hamburger menu
    hamburgerMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const chapterNum = parseInt(item.dataset.chapter);
            showChapter(chapterNum);
            updateUrl(chapterNum);
            updateBackButton();
            dropdownMenu.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });

    continueButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nextChapterNum = parseInt(button.dataset.nextChapter);
            if (nextChapterNum) {
                showChapter(nextChapterNum);
                updateUrl(nextChapterNum);
                updateBackButton();
            } else {
                alert("Thank you for taking this journey. Share this vision and help us build the Zero Cost Society.");
            }
        });
    });

    backButton.addEventListener('click', () => {
        history.back();
    });

    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.chapter) {
            showChapter(event.state.chapter);
        } else {
            showChapter(1);
        }
        updateBackButton();
    });
});
