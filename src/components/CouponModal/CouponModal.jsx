import { useState } from "react";

export const CouponModal = ({ couponValue, setShowCoupon, setCouponValue }) => {
  const [selectedCoupon, setSelectedCoupon] = useState(couponValue);
  const couponData = {
    SHINOBI20: [20, 4000],
    SHINOBI30: [30, 5500],
  };

  const handleApply = () => {
    setCouponValue(selectedCoupon);
    setShowCoupon(false);
  };

  return (
    <div className="modal-container active">
      <div className="modal-content coupon with-header">
        <div className="modal-header">
          <div className="h4 text-primary">Apply Coupon</div>
          <button
            className="modal-close"
            onClick={() => setShowCoupon(false)}
          ></button>
        </div>
        <div className="modal-text text-justify">
          {Object.keys(couponData).map((coupon) => (
            <div
              className={`coupon-item ${
                selectedCoupon.name === coupon ? "active" : ""
              }`}
              key={coupon}
            >
              <div className="radio-grp">
                <input
                  type="radio"
                  name="coupon-radio"
                  id={coupon + "-radio"}
                  value={coupon}
                  checked={selectedCoupon.name === coupon ? true : false}
                  onChange={() =>
                    setSelectedCoupon({
                      name: coupon,
                      discount: couponData[coupon][0],
                    })
                  }
                />
                <label htmlFor={coupon + "-radio"}>
                  <span className="radio-btn"></span>
                  <span>
                    <span className="coupon-name">{coupon}</span>
                    {couponData[coupon][0]} % OFF
                  </span>
                </label>
              </div>
            </div>
          ))}
          <button className="btn primary" onClick={handleApply}>
            apply
          </button>
        </div>
      </div>
    </div>
  );
};
