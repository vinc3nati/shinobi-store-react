import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AddressCard } from "../../components/address/AddressCard";
import { AddressForm } from "../../components/address/AddressForm";
import { useData } from "../../contexts/data-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Address = ({ title }) => {
  useDocumentTitle(title);
  const [newAddress, setNewAddress] = useState(false);
  const {
    state: { address },
  } = useData();
  return (
    <>
      {!address.length && <h4 className="text-center">Create new address</h4>}
      {address.map((item) => (
        <AddressCard key={item._id} address={item} />
      ))}
      <button className="address-btn" onClick={() => setNewAddress(true)}>
        <FaPlus />
        Add new address
      </button>

      {newAddress && <AddressForm setNewAddress={setNewAddress} />}
    </>
  );
};
