// bouton + et moin 
let btnmoin = document.querySelectorAll(".qt-minus")
let qt = document.querySelectorAll(".qt")
let btnplus = document.querySelectorAll(".qt-plus")

for (let i = 0; i < btnplus.length; i++) {



    btnplus[i].addEventListener("click", function () {
        qt[i].innerHTML = Number(qt[i].innerHTML) + 1
         price.innerHTML = Number(prix[i].innerHTML) + Number(price.innerHTML)

    })

    btnmoin[i].addEventListener("click", function () {

        if (qt[i].innerHTML > 0) {
            qt[i].innerHTML = Number(qt[i].innerHTML) - 1
             price.innerHTML = Number(price.innerHTML) - Number(prix[i].innerHTML)
        }
        else {
            qt[i].innerHTML = 0
        }
    })
}


// like dislike
let heart = document.querySelectorAll(".heart")

for (let q = 0; q< heart.length; q++) {
    heart[q].style.color = "pink"
    heart[q].addEventListener("click", function () {

        if (heart[q].style.color == "pink") {
            heart[q].style.color = "red"
        }
        else {
            heart[q].style.color = "pink"
        }

    })
}
// remove button
let remove = document.querySelectorAll(".fas")

for (let i = 0; i < remove.length; i++) {

    remove[i].addEventListener("click", function () {
        remove[i].parentElement.parentElement.remove()
        let x =Number(prix[i].innerHTML)*Number(qt[i].innerHTML)
price.innerHTML= Number(price.innerHTML) - Number(x) 
    })
}

//total

let price = document.querySelector("#full-price")
let prix = document.querySelectorAll(".prix")

