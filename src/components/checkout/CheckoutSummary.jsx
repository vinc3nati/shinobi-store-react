import { useState } from "react";
import confetti from "canvas-confetti";
import { AiFillTag, AiOutlineCloseCircle } from "react-icons/ai";
import { RiCoupon3Fill } from "react-icons/ri";
import { useData } from "../../contexts/data-context";
import { cartTotal, deliveryFee } from "../../utilities/cartCalculator";
import { useAuth } from "../../contexts/auth-context";
import { CouponModal } from "../CouponModal/CouponModal";

export const CheckoutSummary = ({ selectedAddress }) => {
  const {
    state: { cart },
    handleOrders,
  } = useData();
  const {
    user: { user },
  } = useAuth();
  const [showCoupon, setShowCoupon] = useState(false);
  const initCoupon = {
    name: "",
    discount: 0,
  };
  const [couponValue, setCouponValue] = useState(initCoupon);
  const total = cartTotal(cart);
  const delivery = deliveryFee(total);
  const finalCost = delivery + (total - (total * couponValue.discount) / 100);
  console.log(total, couponValue.discount);

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const Popper = () => {
    var end = Date.now() + 3 * 1000;

    var colors = ["#f4faff", "#3954ce"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 40,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 140,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.error("Razorpay SDK failed to load, check you connection");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: finalCost * 100,
      currency: "INR",
      name: "Shinobi Store",
      description: "Thank you for choosing us!",
      image:
        "https://res.cloudinary.com/randomwave45/image/upload/v1649311458/razorpay_logo_daku5a.png",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;

        if (paymentId) {
          const tempObj = {
            products: [...cart],
            amount: finalCost,
            paymentId,
            address: selectedAddress,
          };
          handleOrders(tempObj);
          Popper();
        } else {
          console.log("unsuccessful");
        }
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: "8425062824",
      },
      theme: {
        color: "#3954ce",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const isAddressPresent = Object.keys(selectedAddress).length !== 0;

  return (
    <>
      {showCoupon && (
        <CouponModal
          couponValue={couponValue}
          setShowCoupon={setShowCoupon}
          setCouponValue={setCouponValue}
        />
      )}
      <div className="checkout-summary">
        <div className="checkout-heading">Order Details</div>
        <div className="checkout-subheading">
          <span>Item/s</span>
          <span>Qty</span>
        </div>
        {cart.map(({ _id, title, qty }) => (
          <div key={_id} className="checkout-details">
            <span>{title}</span>
            <span>{qty}</span>
          </div>
        ))}
        <div className="checkout-heading">Price Breakup</div>
        <label className="checkout-coupon" onClick={() => setShowCoupon(true)}>
          <AiFillTag />
          Apply Coupon
        </label>
        <div className="checkout-details">
          <span>Price ({cart.length} item/s)</span>
          <span>{total}</span>
        </div>
        <div className="checkout-details">
          <span>Delivery Charges</span>
          <span className="text-green">{delivery || "FREE"}</span>
        </div>
        {couponValue.name && (
          <p className="checkout-details">
            <span className="price-discount">
              <RiCoupon3Fill />
              {couponValue.name}
            </span>
            <AiOutlineCloseCircle
              className="price-close"
              onClick={() => setCouponValue(initCoupon)}
            />
          </p>
        )}
        <div className="checkout-details text-bold">
          <span>Total Amount</span>
          <span>&#8377; {finalCost}</span>
        </div>
        <button
          className="btn primary"
          disabled={!isAddressPresent}
          onClick={displayRazorpay}
        >
          Checkout
        </button>
        {!isAddressPresent && (
          <p className="text-secondary text-center">
            Please select your address!
          </p>
        )}
      </div>
    </>
  );
};
