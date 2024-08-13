class Item {
    constructor(itemName, price) {
        this.itemName = itemName;
        this.price = price;
    }
}

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Append a new item to the end of the linked list
    append(item) {
        const newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Display all items in the linked list
    display() {
        let current = this.head;
        while (current) {
            console.log(`Item Name: ${current.item.itemName}, Price: ${current.item.price}`);
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();

// Adding items to the list
list.append(new Item("Apple", 1.00));
list.append(new Item("Banana", 0.50));
list.append(new Item("Cherry", 2.00));

// Displaying the items
console.log("Items in the linked list:");
list.display();

module.exports = { Item, LinkedList };
