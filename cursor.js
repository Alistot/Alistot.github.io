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