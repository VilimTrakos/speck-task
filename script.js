const inputField = document.getElementById("tech_input");
let display1 = document.getElementById("main_display_1");
let display2 = document.getElementById("main_display_2");
let br = 0;


document.getElementById("add_button").addEventListener("click", function (event) {

    if (document.getElementById("tech_input").value === "") {

        event.preventDefault();

    }

    if (document.getElementById("tech_input").value != "") {

        event.preventDefault();

        if (br % 2 == 0) {
            display1.appendChild(addItem());
            br += 1;
        }

        else {
            display2.appendChild(addItem());
            br += 1;
        }

        inputField.value = "";
    }

});

//brisanje elemenata
document.getElementById("remove_button").addEventListener("click", function (event) {

    event.preventDefault();

    display1.innerHTML = "";
    display2.innerHTML = "";
    br = 0;
});

//dodavanje elemenata
function addItem() {

    let newListItem = document.createElement("div");
    newListItem.textContent = inputField.value;
    newListItem.className = "boxed-text";

    return newListItem;

}