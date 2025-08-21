import "./App.css";
import ProductCard from "./components/ProductCard";
import ShoppingCart from "./components/ShoppingCart";
import { products } from "./lib/products";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-6">Desserts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/3">
            <ShoppingCart />
          </div>
        </div>
      </main>
    </CartProvider>
  );
}

export default App;
