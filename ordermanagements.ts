interface ProductInterface {
  id: string;
  name: string;
  price: number;
  stock: number;
}
interface CustomerInterface {
  id: string;
  name: string;
  email: string;
}
class Products {
  products: ProductInterface[];

  constructor() {
    this.products = [];
  }
  addProduct(product: ProductInterface): void {
    this.products.push(product);
  }
  updateStock(productId: string, update: number): void {
    const product = this.products.find((product) => product.id === productId);
    if (product) {
      product.stock = update;
      console.log("stock has bee updated");
    } else {
      console.log("Product not found");
    }
  }
}
class Customer {
  users: CustomerInterface[];

  constructor() {
    this.users = [];
  }

  addUser(user: CustomerInterface): void {
    this.users.push(user);
  }
  updateEmail(userId: string, update: string): void {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      user.email = update;
      console.log("email has bee updated");
    } else {
      console.log("Product not found");
    }
  }
}

const Product = new Products();

Product.addProduct({ id: "p1", name: "Laptop", price: 1500, stock: 10 });
Product.addProduct({ id: "p2", name: "Phone", price: 800, stock: 30 });
console.log(Product);
const UpdatedStock = Product;
UpdatedStock.updateStock("p1", 10);

const User = new Customer();
User.addUser({
  id: "c1",
  name: "Alice",
  email: "alice@example.com",
});
console.log(User);
const NewUser = User;
NewUser.updateEmail("c1", "saif@exampale.com");
console.log(NewUser);
