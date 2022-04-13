import React, { useState } from "react";
import { countries, states } from "../../backend/db/countries";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { postAddress, updateAddress } from "../../utilities/API_REQUESTS";
import { ACTIONS } from "../../utilities/constant";

const defaultAddress = {
  country: countries[0],
  name: "",
  street: "",
  city: "",
  state: states[countries[0]].states[0],
  zipCode: "",
  mobile: "",
};

export const AddressForm = ({
  setEditMode,
  setNewAddress,
  existingAddress = defaultAddress,
}) => {
  const [addressForm, setAddressForm] = useState(existingAddress);
  const { user } = useAuth();
  const { dispatch, setLoader } = useData();

  function handleClose() {
    if (existingAddress._id) {
      setEditMode(false);
    } else {
      setNewAddress(false);
    }
  }

  const handleChange = (e) => {
    setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      let response = null;
      if (existingAddress._id) {
        response = await updateAddress({
          token: user.token,
          addressId: existingAddress._id,
          address: addressForm,
        });
      } else {
        response = await postAddress({
          token: user.token,
          address: addressForm,
        });
      }

      if (response && response.data.address) {
        dispatch({
          type: ACTIONS.SetAddress,
          payload: { address: response.data.address },
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
      handleClose();
    }
  };

  return (
    <>
      <div className="modal-container active">
        <div className="modal-content with-header">
          <div className="modal-header">
            <div className="h4 text-primary">Address Details</div>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-text text-justify">
            <form className="input-form" onSubmit={handleSubmit}>
              <select
                className="dropdown"
                name="country"
                value={addressForm.country}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <div className="input-grp">
                <input
                  type="text"
                  name="name"
                  required
                  value={addressForm.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>
              <div className="input-grp">
                <input
                  onChange={handleChange}
                  type="text"
                  name="street"
                  required
                  value={addressForm.street}
                  placeholder="Street Name, house no."
                />
              </div>
              <div className="input-grp">
                <input
                  type="text"
                  onChange={handleChange}
                  name="city"
                  required
                  value={addressForm.city}
                  placeholder="City"
                />
              </div>
              <select
                className="dropdown"
                name="state"
                value={addressForm.state}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  State
                </option>
                {states[addressForm.country].states.map((stateName) => (
                  <option key={stateName} value={stateName}>
                    {stateName}
                  </option>
                ))}
              </select>
              <div className="input-grp">
                <input
                  type="number"
                  onChange={handleChange}
                  name="zipCode"
                  value={addressForm.zipCode}
                  placeholder="Pin code"
                />
              </div>
              <div className="input-grp">
                <input
                  onChange={handleChange}
                  type="number"
                  name="mobile"
                  value={addressForm.mobile}
                  placeholder="Contact number"
                  required
                />
              </div>
              <div className="cta-container">
                <button
                  className="btn outline"
                  type="button"
                  onClick={handleClose}
                >
                  cancel
                </button>
                <button className="btn primary" type="submit">
                  save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
