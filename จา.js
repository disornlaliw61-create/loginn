/* =====================================================
   ตั้งค่า Username / Password
===================================================== */

const LOGIN_USERNAME = "kay";
const LOGIN_PASSWORD = "27012008";


/* =====================================================
   เปลี่ยนหน้า
===================================================== */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(function(page) {

            page.classList.remove("active");

        });

    document
        .getElementById(pageId)
        .classList.add("active");
}


/* =====================================================
   กด CPU สีฟ้า
===================================================== */

function startSystem() {

    const cpu =
        document.getElementById("cpu");

    // ป้องกันการกดซ้ำขณะกำลังหมุน
    if (cpu.classList.contains("rotate")) {
        return;
    }

    // รีเซ็ต Animation
    cpu.classList.remove("rotate");

    void cpu.offsetWidth;

    // เริ่มหมุน
    cpu.classList.add("rotate");


    // หมุนเสร็จแล้วเข้าสู่หน้า Login
    setTimeout(function() {

        cpu.classList.remove("rotate");

        showPage("page2");

        document
            .getElementById("username")
            .focus();

    }, 2000);
}


/* =====================================================
   ระบบ LOGIN
===================================================== */

document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        function(event) {

            // ป้องกันหน้าเว็บ Refresh
            event.preventDefault();


            const username =
                document
                    .getElementById("username")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("password")
                    .value;


            const message =
                document
                    .getElementById("loginMessage");


            // ตรวจสอบ Username และ Password
            if (
                username === LOGIN_USERNAME &&
                password === LOGIN_PASSWORD
            ) {

                message.style.color =
                    "#00ffb7";

                message.innerHTML =
                    "✓ Login สำเร็จ กำลังเข้าสู่ระบบ...";


                // เข้าหน้า Website Portal
                setTimeout(function() {

                    showPage("page3");

                    document
                        .getElementById("websiteURL")
                        .focus();

                }, 700);

            }

            else {

                message.style.color =
                    "#ff5577";

                message.innerHTML =
                    "✕ ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง";


                document
                    .getElementById("password")
                    .select();

            }

        }
    );


/* =====================================================
   เปิดเว็บไซต์
===================================================== */

function openWebsite() {

    const input =
        document
            .getElementById("websiteURL");


    const message =
        document
            .getElementById("urlMessage");


    let url =
        input.value.trim();


    // ตรวจสอบว่ามี URL หรือไม่
    if (!url) {

        message.innerHTML =
            "กรุณาใส่ลิงก์เว็บไซต์";

        return;
    }


    // ถ้าไม่ได้ใส่ https:// ให้เติมให้
    if (
        !url.startsWith("http://") &&
        !url.startsWith("https://")
    ) {

        url =
            "https://" + url;
    }


    try {

        const parsedURL =
            new URL(url);


        // อนุญาตเฉพาะ HTTP / HTTPS
        if (
            parsedURL.protocol !== "http:" &&
            parsedURL.protocol !== "https:"
        ) {

            throw new Error();

        }


        message.innerHTML =
            "กำลังเปิดเว็บไซต์...";


        // เปิดเว็บไซต์แท็บใหม่
        window.open(
            parsedURL.href,
            "_blank",
            "noopener,noreferrer"
        );

    }

    catch (error) {

        message.innerHTML =
            "ลิงก์ไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง";

    }
}


/* =====================================================
   กด ENTER ในช่อง URL
===================================================== */

function urlEnter(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        openWebsite();

    }
}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    // ล้าง Username
    document
        .getElementById("username")
        .value = "";


    // ล้าง Password
    document
        .getElementById("password")
        .value = "";


    // ล้าง URL
    document
        .getElementById("websiteURL")
        .value = "";


    // ล้างข้อความ Login
    document
        .getElementById("loginMessage")
        .innerHTML = "";


    // ล้างข้อความ URL
    document
        .getElementById("urlMessage")
        .innerHTML = "";


    // กลับหน้าแรก
    showPage("page1");
}
