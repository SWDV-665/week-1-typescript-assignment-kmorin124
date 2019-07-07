class Grocery {
    listItem: string;
    constructor(public type: string, public brand: string, public quantity: number) {
        this.listItem = "Item: " + type + ", Brand: " + brand + ", Quantity: "+ quantity;
    }
}

interface Item {
    type: string;
    brand: string;
    quantity: number;
}

var groceries = [new Grocery("Milk", "Shamrock Farms", 2)];
groceries.push(new Grocery("Eggs", "Safeway", 4));
groceries.push(new Grocery("Butter", "Land O'Lakes", 6));

function htmlLister(groceries: Array<Grocery>) {
    var htmlString = "<ul> ";
    for (let i in groceries) {
        htmlString +=  "<li>" + groceries[i].listItem + "</li>";
    }
    htmlString += "</ul>";
    return htmlString;
}

document.body.innerHTML = htmlLister(groceries);