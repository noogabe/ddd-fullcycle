import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("customer factory unit test", () => {
    it("should create a customer", () => {
        let customer = CustomerFactory.create("John");
        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.Address).toBeUndefined();
    });

    it("should create a customer with address", () => {
        const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
        const customer = CustomerFactory.createWithAddress("John", address);

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.Address).toBe(address);
    });
});