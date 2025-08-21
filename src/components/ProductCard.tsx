import { useCart } from "../context/CartContext";
import cartIcon from "../assets/icon-add-to-cart.svg";

interface ProductCardProps {
  id: number;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  title: string;
  description: string;
  price: string;
}

const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
}: ProductCardProps) => {
  const { cart, addToCart, updateQuantity } = useCart();

  if (!image || !title || !description || !price) {
    return <div className="text-red-500">Invalid product data</div>;
  }

  if (!image) {
    image = {
      desktop: "https://via.placeholder.com/150",
      mobile: "https://via.placeholder.com/150",
      tablet: "https://via.placeholder.com/150",
    };
  }

  const cartItem = cart.find((item) => item.id === id);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      description,
      price,
      image: {
        desktop: image.desktop,
        mobile: image.mobile,
        tablet: image.tablet,
      },
    });
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    updateQuantity(id, quantity - 1);
  };

  return (
    <div className="max-w-sm overflow-hidden m-auto sm:m-0">
      <div className="relative h-auto mb-[15px]  max-w-[250.67px] max-h-[347px]">
        {isInCart ? (
          <>
            <picture>
              <source media="(min-width: 1024px)" srcSet={image.desktop} />
              <source media="(min-width: 768px)" srcSet={image.tablet} />
              <img
                src={image.mobile}
                alt={title}
                className="w-full h-72 max-h-[240px] object-cover rounded-lg border-2 border-[#f15c5c]"
              />
            </picture>
            <div className="absolute bottom-[-25px] left-[50%] w-full max-w-[160px] transform -translate-x-1/2 inline-flex items-center gap-2 px-3 py-3 bg-[#f15c5c] border border-[#f15c5c] rounded-full text-white justify-between">
              <button
                onClick={handleDecreaseQuantity}
                className="w-8 h-8 flex items-center justify-center bg-[W#f15c5c] border border-white text-white rounded-full hover:bg-gray-100 hover:text-[#f15c5c] transition-colors"
              >
                -
              </button>
              <span className="mx-2 font-semibold">{quantity}</span>
              <button
                onClick={handleIncreaseQuantity}
                className="w-8 h-8 flex items-center justify-center bg-[W#f15c5c] border border-white text-white rounded-full hover:bg-gray-100 hover:text-[#f15c5c] transition-colors"
              >
                +
              </button>
            </div>
          </>
        ) : (
          <>
            <picture>
              <source media="(min-width: 1024px)" srcSet={image.desktop} />
              <source media="(min-width: 768px)" srcSet={image.tablet} />
              <img
                src={image.mobile}
                alt={title}
                className="w-full h-72 max-h-[240px] object-cover rounded-lg border-2 border-[#f15c5c]"
              />
            </picture>
            <button
              className="absolute bottom-[-25px] left-[50%] w-full max-w-[160px] transform -translate-x-1/2 inline-flex items-center gap-2 px-3 py-3 bg-white border border-[#AD8A85] rounded-full text-[#f15c5c] hover:border-[#f15c5c] cursor-pointer transition-colors justify-center"
              onClick={handleAddToCart}
            >
              <img src={cartIcon} alt="Add to cart" className="w-5 h-5" />
              Add to Cart
            </button>
          </>
        )}
      </div>
      <div className="py-[32px]">
        <div className="text-sm text-gray-600 mb-1">Macaron</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#f15c5c]">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
