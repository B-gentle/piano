let key = document.querySelectorAll(".key");
for (let i = 0; i < key.length; i++) {
    key[i].addEventListener("click", () => {
        let dataKey = key[i].getAttribute("data-key");

        handleClick(dataKey);

        buttonAnimation(dataKey);
    });
};


function handleClick(key) {
    switch (key) {
        case "key01":

            let audio1 = new Audio("sounds/key01.mp3");
            audio1.play();
            break;

        case "key02":
            let audio2 = new Audio("sounds/key02.mp3");
            audio2.play();
            break;

        case "key03":
            let audio3 = new Audio("sounds/key03.mp3");
            audio3.play();
            break;

        case "key04":
            let audio4 = new Audio("sounds/key04.mp3");
            audio4.play();
            break;

        case "key05":
            let audio5 = new Audio("sounds/key05.mp3");
            audio5.play();
            break;

        case "key06":
            let audio6 = new Audio("sounds/key06.mp3");
            audio6.play();
            break;

        case "key07":
            let audio7 = new Audio("sounds/key07.mp3");
            audio7.play();
            break;

        case "key08":
            let audio8 = new Audio("sounds/key08.mp3");
            audio8.play();
            break;

        case "key09":
            let audio9 = new Audio("sounds/key09.mp3");
            audio9.play();
            break;

        case "key10":
            let audio10 = new Audio("sounds/key10.mp3");
            audio10.play();
            break;

        case "key11":
            let audio11 = new Audio("sounds/key11.mp3");
            audio11.play();
            break;

        case "key12":
            let audio12 = new Audio("sounds/key12.mp3");
            audio12.play();
            break;

    };
};

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("[data-key =" + currentKey + "]");
    activeButton.classList.add("pressed");

    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    }, 100)
    
};