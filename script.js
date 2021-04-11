const addDivider = document.getElementsByClassName("add-divider");
const acc = document.getElementsByClassName("accordion");
const panel = document.getElementsByClassName("panel");
const faq = document.getElementById("faq");
const readyToWatch = document.getElementById("ready-to-watch");
let i;

// Add divider
for(i = 0; i < addDivider.length; i++) {
    console.log("Will add divider!");
    let divider = document.createElement("div");
    divider.classList.add("divider");
    addDivider[i].parentNode.insertBefore(divider, addDivider[i].nextSibling);
}

// FAQ button handling
for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", () => {
        // console.log(`FAQ #${i} was clicked!`);
        acc[i].classList.toggle("active");

        if(panel[i].style.display === "block") {
            panel[i].style.display = "none";
        } else {
            for(let j = 0; j < panel.length; j++) {
                if(i == j) {
                    panel[j].style.display = "block";
                } else {
                    panel[j].style.display = "none";
                }
            }
        }
    });
}

// Clone ready to watch prompt
let readyToWatchClone = readyToWatch.cloneNode(true);
readyToWatchClone.classList.add("center-text");
faq.appendChild(readyToWatchClone);
