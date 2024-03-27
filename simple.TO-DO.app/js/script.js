
const input = document.getElementById("input-item");
const submit = document.getElementById("submit");
const list = document.querySelector(".list");
const reset = document.getElementById("reset");

submit.addEventListener("click", function() {
    if(input.value) {
        let listItem = document.createElement("div");
        listItem.classList.add("beautify-item");

        let l1 = document.createElement("input");
        l1.type = "checkbox";
        l1.id = "checkbox";

        let l2 = document.createElement("span");
        l2.innerHTML = input.value;
        l2.id = "list-content";
     
        listItem.append(l1, l2);
        list.appendChild(listItem);

        input.value = "";
    }

});

reset.addEventListener("click", function() {
    list.innerHTML ="";
});