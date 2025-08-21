export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}
