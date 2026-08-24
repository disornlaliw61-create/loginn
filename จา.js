const fanBlades = document.getElementById('fanBlades');
const app = document.getElementById('app');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const errorMsg = document.getElementById('errorMsg');

let isRotating = false;
let currentRotation = 0; // ตัวแปรเก็บสะสมองศาการหมุน

function rotateAndSwitch() {
    if (isRotating) return;
    isRotating = true;

    // 1. หมุนย้อนกลับไปทางซ้าย -180 องศา
    currentRotation -= 180;
    fanBlades.style.transform = `rotate(${currentRotation}deg)`;

    // 2. หมุนสบัดไปทางขวา +720 องศา
    setTimeout(() => {
        currentRotation += 900; // (-180 + 900 = +720)
        fanBlades.style.transform = `rotate(${currentRotation}deg)`;
    }, 250);

    // 3. สลับหน้า และรีเซ็ตสถานะเพื่อให้กดหมุนใหม่ได้
    setTimeout(() => {
        app.classList.add('active-page-2');
        usernameInput.focus();
        isRotating = false; // ปลดล็อกให้สามารถกดหมุนในครั้งต่อไปได้
    }, 850);
}
