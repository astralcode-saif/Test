var Products = /** @class */ (function () {
    function Products() {
        this.products = [];
    }
    Products.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Products.prototype.updateStock = function (productId, update) {
        var product = this.products.find(function (product) { return product.id === productId; });
        if (product) {
            product.stock = update;
            console.log('stock has bee updated');
        }
        else {
            console.log('Product not found');
        }
    };
    return Products;
}());
var Customer = /** @class */ (function () {
    function Customer() {
        this.users = [];
    }
    Customer.prototype.addUser = function (user) {
        this.users.push(user);
    };
    Customer.prototype.updateEmail = function (userId, update) {
        var user = this.users.find(function (user) { return user.id === userId; });
        if (user) {
            user.email = update;
            console.log('email has bee updated');
        }
        else {
            console.log('Product not found');
        }
    };
    return Customer;
}());
var Product = new Products();
Product.addProduct({ id: "p1", name: "Laptop", price: 1500, stock: 10 });
Product.addProduct({ id: "p2", name: "Phone", price: 800, stock: 30 });
console.log(Product);
Product.updateStock("p1", 10);
var User = new Customer();
User.addUser({
    id: "c1",
    name: "Alice",
    email: "alice@example.com",
});
console.log(User);
var NewUser = User;
NewUser.updateEmail('c1', 'saif@exampale.com');
console.log(NewUser);
// console.log("Total stock:", Employee.calculateTotalstock());
