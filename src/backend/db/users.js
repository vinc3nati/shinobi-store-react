import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import bcyrpt from "bcryptjs";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    name: "Adarsh Balika",
    email: "adarshbalika@gmail.com",
    password: bcyrpt.hashSync("adarshBalika123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Vinit Kanse",
    email: "vinit@shinobistore.com",
    password: bcyrpt.hashSync("vinitKanse123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
