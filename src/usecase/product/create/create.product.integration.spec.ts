import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import ProductCreateUseCase from "./create.product.usecase";

const input = {
    name: "Product",
    price: 10,
}

describe("integration test create product use case", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
      sequelize = new Sequelize({
        dialect: "sqlite",
        storage: ":memory:",
        logging: false,
        sync: { force: true },
      });
  
      await sequelize.addModels([ProductModel]);
      await sequelize.sync();
    });
  
    afterEach(async () => {
      await sequelize.close();
    });

    it("should create a product", async () => {
        const productRepository = new ProductRepository();
        const usecase = new ProductCreateUseCase(productRepository);

        const output = await usecase.execute(input);
        expect(output).toEqual({
            id: expect.any(String),
            name: input.name,
            price: input.price,
        });
    });

    it("should thrown an error when name is missing", async () => {
      const productRepository = new ProductRepository();
      const usecase = new ProductCreateUseCase(productRepository);

      input.name = "";

      await expect(usecase.execute(input)).rejects.toThrow(
          "Name is required"
      );
  });
});