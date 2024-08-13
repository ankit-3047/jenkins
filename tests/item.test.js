const { Item, LinkedList } = require('../itemLinkedList.js'); 

describe('Item and LinkedList Tests', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    test('Item should have correct properties', () => {
        const item = new Item("rice", 39);
        expect(item.itemName).toBe("rice");
        expect(item.price).toBe(39);
    });

    test('LinkedList should append items correctly', () => {
        list.append(new Item("Apple", 1.00));
        list.append(new Item("Banana", 0.50));
        list.append(new Item("Cherry", 2.00));

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        list.display();

        expect(consoleSpy).toHaveBeenCalledWith("Item Name: Apple, Price: 1.00");
        expect(consoleSpy).toHaveBeenCalledWith("Item Name: Banana, Price: 0.50");
        expect(consoleSpy).toHaveBeenCalledWith("Item Name: Cherry, Price: 2.00");

        consoleSpy.mockRestore(); 
    });

    test('LinkedList display should handle empty list correctly', () => {
        
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        list.display();

        
        expect(consoleSpy).not.toHaveBeenCalled();

        consoleSpy.mockRestore(); 
    });
});
