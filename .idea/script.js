document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".login-btn.facebook").addEventListener("click", function (e) {
        e.preventDefault(); // 防止表單提交或跳轉
        alert("老人才用臉書==");
    });

    document.querySelector(".login-btn.line").addEventListener("click", function (e) {
        e.preventDefault();
        alert("賴也差不多老啦");
    });

    document.querySelector(".submit-btn").addEventListener("click", function (e) {
        e.preventDefault();
        alert("登不進去吧!!");
    });

    document.querySelector(".extra-links1 a").addEventListener("click", function (e) {
        e.preventDefault();
        alert("連密碼都記不住(扶額");
    });

    document.querySelector(".extra-links2 a").addEventListener("click", function (e) {
        e.preventDefault();
        alert("想加入?想都別想");
    });

    document.querySelector(".back-arrow").addEventListener("click", function (e) {
        e.preventDefault();
        alert("想走也走不了!!");
    });
});
