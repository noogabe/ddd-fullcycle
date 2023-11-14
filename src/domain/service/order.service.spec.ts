import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("order service unit tests", () => {

    it("should place an order", () => {
        const customer = new Customer("c1", "Customer 1");
        const item = new OrderItem("item1", "Item 1", 10, "p1", 1);
        const order = OrderService.placeOrder(customer, [item]);

        expect(customer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    });

    it("should get total of all orders", () => {
        const item1 = new OrderItem("item1", "Item 1", 100, "p1", 1);
        const item2 = new OrderItem("item2", "Item 2", 200, "p2", 2);
        
        const order = new Order("o1", "c1", [item1]);
        const order2 = new Order("o2", "c2", [item2]);

        const total = OrderService.total([order, order2]);

        expect(total).toBe(500);
    });

    it("should add reward points to customer", () => {
        const customer = new Customer("c1", "Customer 1");
        expect(customer.rewardPoints).toBe(0);
        
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);
        
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    });
});