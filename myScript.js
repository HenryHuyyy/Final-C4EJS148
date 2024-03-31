imagesArray = new Array(6);
imagesArray[0] = new Image();
imagesArray[0].src = new "assets/bau.png";
imagesArray[1] = new Image();
imagesArray[1].src = new "assets/ca.png";
imagesArray[2] = new Image();
imagesArray[2].src = new "assets/cua.png";
imagesArray[3] = new Image();
imagesArray[3].src = new "assets/ga.png";
imagesArray[4] = new Image();
imagesArray[4].src = new "assets/huou.png";
imagesArray[5] = new Image();
imagesArray[5].src = new "assets/tom.png";

function displayImage() {
    var num = Math.floor(Math.random());
    document.getElementById(imagesArray[num]);
}

/* Define a function to increment when click any image*/
const startButton = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");
const countLabel = document.getElementById("countLabel");

let count = 0;
let x = 3;
x.MAX_VALUE;

startButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

/* Khai báo chương trình để Random ngẫu nhiên hình ảnh mỗi ô với tần suất 100 lần/ô */
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');

    // Function to select a random image from a box
    function selectRandomImage(box) {
        const images = box.querySelectorAll('img');
        const randomIndex = Math.floor(Math.random() * images.length);
        
        images.forEach((image, index) => {
            if (index === randomIndex) {
                image.classList.add('selected');
            } else {
                image.classList.remove('selected');
            }
        });
    }

    // Repeat the selection process 100 times for each box
    boxes.forEach(box => {
        for (let i = 0; i < 100; i++) {
            selectRandomImage(box);
        }
    });
});
