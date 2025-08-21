import { useState } from "react";
import { useCart } from "../context/CartContext";
import emptyCart from "../assets/illustration-empty-cart.svg";
import RemoveIcon from "../assets/icon-remove-item.svg";
import CarbonNeutralIcon from "../assets/icon-carbon-neutral.svg";
import iconOrderConfirmed from "../assets/icon-order-confirmed.svg";

const ShoppingCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  const totalProductsInCart = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleOrderModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  if (cart.length === 0) {
    return (
      <div className="p-[24px] rounded-lg bg-white">
        <h2 className="text-xl font-bold mb-4 text-[#C73B0F]">
          Your Cart ({totalProductsInCart()})
        </h2>
        <div className="text-center">
          <img src={emptyCart} alt="Empty Cart" className="mx-auto mt-4" />
          <p className="text-[#87635A] font-semibold">
            Your added items will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-[24px] rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4 text-[#C73B0F]">
        Your Cart ({totalProductsInCart()})
      </h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2 border-b border-[#F5EEEC]"
          >
            <div className="flex items-center space-x-4">
              <div>
                <p className="font-medium mb-2 text-[#260F08]">{item.title}</p>
                <div className="flex items-center space-x-2 text-[14px]">
                  <p className="text-[#C73B0F] font-bold">{item.quantity}x</p>
                  <p className="text-[#87635A]">@</p>
                  <p className="text-[#87635A]">{item.price}</p>
                  <p className="text-[#87635A] font-bold">
                    $
                    {(
                      parseFloat(item.price.replace("$", "")) * item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 pb-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="cursor-pointer border border-[#AD8A85] rounded-full w-5 h-5 flex justify-center items-center"
              >
                <img
                  src={RemoveIcon}
                  alt="Remove from cart"
                  className="w-3 h-3"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-[#260F08]">Order Total</p>
        <h2 className="text-[#260F08] font-bold tracking-[0px]">
          Total: ${total.toFixed(2)}
        </h2>
      </div>
      <div className="w-full flex justify-center items-center py-4 my-6 text-center bg-[#FCF8F6] rounded-md">
        <img
          src={CarbonNeutralIcon}
          alt="Carbon Neutral Delivery"
          className="w-5 h-5 mr-2"
        />
        <p className="text-[#260F08]">
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <button
        onClick={handleOrderModal}
        className="cursor-pointer w-full py-2 mt-4 text-[16px] leading-[150%] tracking-[0px] text-white bg-[#C73B0F] rounded-full hover:bg-[#A52A0D]"
      >
        Confirm Order
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="fixed md:static bottom-0 bg-white p-10 rounded-lg shadow-lg max-w-full md:max-w-[688px] lg:max-w-[685px] h-[88%] md:min-h-[685px] md:h-auto w-full overflow-auto">
            <div>
              <img
                src={iconOrderConfirmed}
                alt="Order Confirmed"
                className="w-12 h-12 mb-6"
              />
              <h1 className="text-xl font-bold mb-2 text-[#260F08]">
                Order Confirmed
              </h1>
              <p className="text-[#87635A]">We hope you enjoy your food!</p>
            </div>
            <div className="my-8 p-6 mt-4 bg-[#F5EEEC] rounded-md">
              <div className="space-y-2">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-4 mb-4 border-[#FCF8F6] last:mb-0"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image.desktop}
                        alt={item.title}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div className="ml-4 flex flex-col">
                        <span className="text-[#260F08]">{item.title}</span>
                        <div className="flex items-center">
                          <p className="text-[#C73B0F] font-bold mr-2">
                            {item.quantity}x
                          </p>
                          <p className="text-[#87635A] mr-[4px]">@</p>
                          <p className="text-[#87635A]">{item.price}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#260F08] font-bold">
                      $
                      {(
                        parseFloat(item.price.replace("$", "")) * item.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="flex justify-between items-center mt-6">
                  <p className="text-[#260F08]">Order Total</p>
                  <h2 className="text-[#260F08] font-bold tracking-[0px]">
                    Total: ${total.toFixed(2)}
                  </h2>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                handleOrderModal();
                clearCart();
              }}
              className="w-full py-3 text-[16px] leading-[150%] tracking-[0px] text-white bg-[#C73B0F] rounded-full hover:bg-[#A52A0D]"
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
