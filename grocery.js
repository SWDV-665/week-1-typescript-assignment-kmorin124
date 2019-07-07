var Grocery = /** @class */ (function () {
    function Grocery(type, brand, quantity) {
        this.type = type;
        this.brand = brand;
        this.quantity = quantity;
        this.listItem = "Item: " + type + ", Brand: " + brand + ", Quantity: " + quantity;
    }
    return Grocery;
}());
var groceries = [new Grocery("Milk", "Shamrock Farms", 2)];
groceries.push(new Grocery("Eggs", "Safeway", 4));
groceries.push(new Grocery("Butter", "Land O'Lakes", 6));
function htmlLister(groceries) {
    var htmlString = "<ul> ";
    for (var i in groceries) {
        htmlString += "<li>" + groceries[i].listItem + "</li>";
    }
    htmlString += "</ul>";
    return htmlString;
}
document.body.innerHTML = htmlLister(groceries);
