const messages = [
    "Chắc chưa dị?",
    "THIỆT là chấc hong??",
    "A DU SURE?",
    "Cô pé à...",
    "Tôi nói em suy nghĩ lại!",
    "Em nói hong tui buồn lắm ó...",
    "Buồn lắm á nha...",
    "Nghĩ quẩn lun đó...",
    "Oke fine, tui hong thèm...",
    "Xạo chó á, nói có dùm cái điiiii! ❤️"
];

let messageIndex = 0;

// background music control
const audio = document.getElementById("bg-music");
let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        audio.play().catch(() => {});
        musicStarted = true;
    }
}

function handleNoClick() {
    startMusic();

    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(
        window.getComputedStyle(yesButton).fontSize
    );
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    startMusic();

    document.getElementById("main-screen").style.display = "none";
    document.getElementById("yes-screen").style.display = "flex";
}
