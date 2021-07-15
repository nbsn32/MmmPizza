const form = document.querySelector('.content');
const size = document.getElementById("size");
const pizza = document.getElementById("pizza");
const sauce = document.getElementById("sauce");
const ammount = ['', '12.90 руб.', '14.50 руб.', '21 руб.', '26,90 руб.'];


$(".chosen").chosen();

$(".chosen").change(function () {
    form.dispatchEvent(new Event("change"));
});


$(form).change(function (e) {
    if (pizza.value !== "0") {
        size.removeAttribute("disabled");
        $(size).trigger("chosen:updated");
    }
    if (pizza.value !== "0" && size.value !== "0") {
        document.getElementById("sauce").removeAttribute("disabled");
        $(document.getElementById("sauce")).trigger("chosen:updated");
    } else if (pizza.value == 0) {
        size.setAttribute("disabled", "disabled");
        sauce.setAttribute("disabled", "disabled");
        $(size).trigger("chosen:updated");
        $(document.getElementById("sauce")).trigger("chosen:updated");
    } else if (size.value == "0") {
        sauce.setAttribute("disabled", "disabled");
        $(document.getElementById("sauce")).trigger("chosen:updated");
    }


    let pizzaText = pizza.options[pizza.selectedIndex];
    $(".pizza-name").text(pizzaText.text);
    let sizeText = size.options[size.selectedIndex];
    $(".size-name").text(sizeText.text);
    let sauceText = sauce.options[sauce.selectedIndex];
    $(".sauce-name").text(sauceText.text);



    $(".price-name").text(ammount[size.value]);
    $(".price-name-main").text(ammount[size.value]);
    if (pizza.value !== "0" && size.value !== "0" && sauce.value !== "0") {
        order.classList.add('registrActive');
    } else {
        order.classList.remove("registrActive");
    }
});



const order = document.querySelector(".order");
$(order).click(function (e) {
    e.preventDefault();
    if (pizza.value !== "0" && size.value !== "0" && sauce.value !== "0") {
        $('#dialog-confirm').addClass('active');
        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                Подтвердить: function () {
                    $(this).dialog("close");
                    alert("Ваш заказ подтверждён и в скором времени будет доставлен");
                }
            }
        });
    }

});