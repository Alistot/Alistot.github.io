const colors = ["#FF006F", "#00FFA6", "#040033"];

document.addEventListener("mousemove", function(e) {
    const spark = document.createElement("div");

    spark.className = "spark";
    document.body.appendChild(spark);

    const size = Math.random() * 6 + 4;

    spark.style.left = e.pageX + "px";
    spark.style.top = e.pageY + "px";
    spark.style.background = colors[Math.floor(Math.random() * colors.length)];
    spark.style.width = size + "px";
    spark.style.height = size + "px";

    setTimeout(() => {
        spark.remove();
    }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const text = el.textContent.trim();
    const charCount = text.length;
    
    // 1. 设置打字速度（每个字 0.2 秒）
    const speedPerChar = 0.2; 
    const totalTypingTime = charCount * speedPerChar;

    // 2. 设置光标停止的具体宽度 (字符数 * ch)
    // 这样 border-right 就会紧贴最后一个字，不会跑到右边
    el.style.setProperty('--total-width', charCount + 'ch');

    // 3. 组合动画
    // typing: 打字
    // blink: 闪烁
    // fadeout: 延迟 totalTypingTime 秒后开始，持续 1.5 秒
    el.style.animation = `
        typing ${totalTypingTime}s steps(${charCount}) forwards, 
        blink 0.7s infinite,
        fadeout 1.5s ${totalTypingTime + 1}s forwards
    `;
    // 注意：我在 fadeout 延迟里加了 1 秒 (${totalTypingTime + 1})，
    // 这样文字打完后会停顿 1 秒再消失，观感更好。
    const fixedName = document.querySelector('.fixed-name');
        if (fixedName) {
            // 在打字结束时间(totalTypingTime)的基础上再加 0.5 秒
            const startTime = totalTypingTime + 1.8;
            fixedName.style.animation = `fadein 1s ${startTime}s forwards`;
        }
});