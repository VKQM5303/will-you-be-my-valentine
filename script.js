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

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}