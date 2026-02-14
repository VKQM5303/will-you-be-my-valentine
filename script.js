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

// prepare audio (NOT autoplay)
const loveAudio = new Audio("love.mp3");
loveAudio.loop = true;
let audioUnlocked = false;

function startMusic() {
    if (!audioUnlocked) {
        loveAudio.play().catch(() => {});
        audioUnlocked = true;
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
    window.location.href = "yes_page.html";
}
