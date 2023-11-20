import ProductFactory from "./product.factory";

describe("product factory unni test", () => {
    it("should create a product type a", () => {
        const product = ProductFactory.create("a", "product a", 10);
        expect(product.id).toBeDefined();
        expect(product.name).toBe("product a");
        expect(product.price).toBe(10);
        expect(product.constructor.name).toBe("Product")
    });

    it("should create a product type b", () => {
        const product = ProductFactory.create("b", "product b", 20);
        expect(product.id).toBeDefined();
        expect(product.name).toBe("product b");
        expect(product.price).toBe(40);
        expect(product.constructor.name).toBe("ProductB")
    });

    it("should throw an error when product type is not supported", () => {
        expect(() => {
            ProductFactory.create("c", "product c", 30);
        }).toThrow("Product type not supported");
    });
});