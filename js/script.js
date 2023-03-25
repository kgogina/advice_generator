function fetchAdvice() {
    fetch(`https://api.adviceslip.com/advice`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById("number").textContent = "Advice #" + data.slip.id;
            document.getElementById("text").textContent = data.slip.advice;
        })
        .catch((error) => console.log(error));
}
fetchAdvice();

document.getElementById("submit").addEventListener("click", fetchAdvice);
