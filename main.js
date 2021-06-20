menu_list_array = ["Veg Margherita Pizza", "Cheese Pizza", "Veggie Pizza", "Pepperoni Pizza", "Chicken Tandoori Pizza", "Paneer Tikka Pizza"];


function getmenu() {
    htmldata = "<ol class='menu_list_array'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i];
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<ol class='menu_list_array'>"

    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i];
    }

    htmldata = htmldata + "</ol>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}
htmldata = htmldata + "</section>";
function add_top() {
    var item = document.getElementById("add_item").value;
    add_item();
}