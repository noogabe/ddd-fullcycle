import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []); 
        }).toThrow("Id is required");
    });

    it("should throw error when costumerId is empty", () => {
        expect(() => {
            let order = new Order("1", "", []); 
        }).toThrow("CustomerId is required");
    });

    it("should throw error when items is empty", () => {
        expect(() => {
            let order = new Order("1", "123", []); 
        }).toThrow("Items are required");
    });

    it("should calculate total", () => {
        const item1 = new OrderItem("1", "Item1", 100, "p1", 2);
        const order = new Order("o1", "c1", [item1]);
        let total = order.total();

        expect(total).toBe(200);
        
        const item2 = new OrderItem("2", "Item2", 200, "p2", 2);
        const order2 = new Order("o1", "c1", [item1, item2]);
        total = order2.total();

        expect(total).toBe(600);
    });

    it("should throw error if the item qte is less or equal 0", () => {
        expect(() => {
            const item1 = new OrderItem("1", "Item1", 100, "p1", 0);
            const order = new Order("o1", "c1", [item1]);
        }).toThrow("Quantity must be greater than 0");
        
    });

});