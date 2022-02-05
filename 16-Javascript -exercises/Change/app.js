const text = document.getElementById("input-text");

text.addEventListener("change", () => {
    console.log(this);
})