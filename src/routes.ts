import { FindProductController } from './controllers/findProductController';
import { Router } from "express";
import { CreateCategoryController } from "./controllers/createCategoryController";
import { ProductCategoryController } from "./controllers/createProductCategoryController";
import { CreateProductController } from "./controllers/createProductController";
import { ProductWithExistedCategoryController } from "./controllers/createProductWithExistedCategoryController";
import { FindAllProductController } from './controllers/findAllProductsController';

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new ProductCategoryController();
const createProductExistedCategory = new ProductWithExistedCategoryController();
const findProduct = new FindProductController();
const findAllProduct = new FindAllProductController();

//POST
router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/categoryProduct", createProductCategory.handle);
router.post("/productWithCategory", createProductExistedCategory.handle);

// GET BY ID
router.get("/findProduct/:id", findProduct.handle);

//GET ALL
router.get("/findAllProduct", findAllProduct.handle);

export { router };
