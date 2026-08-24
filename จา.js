let isRotatedRight = false;

// ข้อมูลสำหรับตรวจสอบล็อกอิน (สามารถกำหนดตามที่ต้องการได้)
const VALID_USERNAME = "kay";
const VALID_PASSWORD = "27012008";
const TARGET_URL = "https://disornlaliw61-create.github.io/menu/"; // เว็บไซต์เป้าหมายที่จะเปลี่ยนหน้าไป

document.addEventListener('DOMContentLoaded', () => {
    const gearBtn = document.getElementById('gear-btn');
    const gearIcon = document.querySelector('.gear-icon');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');

    // คลิกฟันเฟือง -> หมุนสลับไปทางซ้าย/ขวา แล้วเปลี่ยนหน้าไปรูปที่ 2
    gearBtn.addEventListener('click', () => {
        if (!isRotatedRight) {
            gearIcon.classList.remove('rotate-left');
            gearIcon.classList.add('rotate-right');
            isRotatedRight = true;
        } else {
            gearIcon.classList.remove('rotate-right');
            gearIcon.classList.add('rotate-left');
            isRotatedRight = false;
        }

        // รอแอนิเมชันหมุน 0.6 วินาที แล้วสลับหน้า
        setTimeout(() => {
            step1.classList.remove('active');
            step1.classList.add('hidden');
            
            step2.classList.remove('hidden');
            step2.classList.add('active');
        }, 600);
    });
});

// ฟังก์ชันดึงข้อมูลมาตรวจสอบรหัสผ่าน
function handleLogin(event) {
    event.preventDefault(); // ป้องกันการเปลี่ยนหน้าแบบปกติของฟอร์ม

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // ตรวจสอบชื่อผู้ใช้งานและรหัสผ่าน
    if (usernameInput === VALID_USERNAME && passwordInput === VALID_PASSWORD) {
        // ถ้ารหัสถูกต้อง
        errorMsg.style.display = 'none';
        alert('เข้าสู่ระบบสำเร็จ! กำลังนำคุณไปยังหน้าถัดไป...');
        window.location.href = TARGET_URL; // เปลี่ยนหน้าไปยังลิงก์เว็บเป้าหมาย
    } else {
        // ถ้ารหัสผ่านไม่ถูกต้อง จะไม่อนุญาตให้เข้าระบบ
        errorMsg.style.display = 'block';
        
        // เพิ่มเอฟเฟกต์สั่นเตือนที่ช่องรหัสผ่าน
        const passInput = document.getElementById('password');
        passInput.style.borderColor = '#ff3333';
        passInput.value = ''; // ล้างช่องรหัสผ่าน
        passInput.focus();
    }
}
