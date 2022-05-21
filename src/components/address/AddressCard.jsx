import React, { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { deleteAddress } from "../../utilities/API_REQUESTS";
import { ACTIONS } from "../../utilities/constant";
import { AddressForm } from "./AddressForm";

export const AddressCard = ({ address }) => {
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const { dispatch, setLoader } = useData();
  const { _id, name, street, city, state, country, zipCode, mobile } = address;

  const handleDelete = async () => {
    try {
      setLoader(true);
      const response = await deleteAddress({
        token: user.token,
        addressId: _id,
      });
      if (response.data.address) {
        dispatch({
          type: ACTIONS.SetAddress,
          payload: { address: response.data.address },
        });
      }
    } catch (err) {
      console.error(err);
      setError("Please try again!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <div className="address-card">
        <h6 className="text-bold">{name}</h6>
        <p>{street}</p>
        <p>
          {city}, {state} {zipCode}
        </p>
        <p>{country}</p>
        <p>Contact: {mobile}</p>
        <div className="btn-grp">
          <button className="btn outline-error" onClick={handleDelete}>
            remove
          </button>
          <button className="btn primary" onClick={() => setEditMode(true)}>
            edit
          </button>
        </div>
        <div className="error-msg">{error}</div>
      </div>
      {editMode && (
        <AddressForm existingAddress={address} setEditMode={setEditMode} />
      )}
    </>
  );
};
