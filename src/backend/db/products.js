import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "f08af0cc-ecdb-4b95-a645-151feebde03c",
    title: "Shuriken (4 Blades)",
    rating: "4.1",
    price: "500",
    category: "Shuriken",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858609/4_blade_shuriken_n0qi3m.jpg",
  },
  {
    _id: "9e4b1e88-78f0-452f-b891-131ae5c51774",
    title: "Shuriken (3 Blades)",
    rating: "4.4",
    price: "420",
    category: "Shuriken",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858609/3_blade_shuriken_myxp1f.jpg",
  },
  {
    _id: "a423a9a3-957e-48c6-aa69-e2f2c91b8b0a",
    title: "Shuriken (5 Blades)",
    rating: "3.9",
    price: "550",
    category: "Shuriken",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858609/5_blade_shuriken_b58f28.jpg",
  },
  {
    _id: "wue23723-957e-48c6-aa69-e2f2c91b8b0a",
    title: "Shuriken Combo",
    rating: "3.8",
    price: "1000",
    category: "Shuriken",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858610/combo_shuriken_nhvfhj.jpg",
  },

  {
    _id: "e6b1602d-fa3c-46b9-ad1a-319e4353f700",
    title: "Simple Kunai",
    rating: "4.4",
    price: "1199",
    category: "Kunai",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858632/simple_kunai_x4748i.png",
  },
  {
    _id: "1a2c43a0-6fe6-41ec-bb36-2cce1b45264f",
    title: "Kunai (Minato Edition)",
    rating: "4",
    price: "2999",
    category: "Kunai",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858610/minato_kunai_fjfwqn.jpg",
  },
  {
    _id: "1a2c12da-6fe6-41ec-bb36-2cce1b45264f",
    title: "Kunai Combo",
    rating: "3.9",
    price: "2499",
    category: "Kunai",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858611/combo_kunai_luynp4.jpg",
  },
  {
    _id: "b3f53ae2-6335-4ed1-8497-169e0557a7d8",
    title: "Kimono (Blue)",
    rating: "4.8",
    price: "5999",
    category: "Kimono",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858609/blue_kimono_adauhg.webp",
  },
  {
    _id: "0d284061-3d80-4634-9ef7-622c4d65fef6",
    title: "Kimono (Green)",
    rating: "4.2",
    price: "5499",
    category: "Kimono",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858610/green_kimono_oljfkl.jpg",
  },
  {
    _id: "0d281gs5e-3d80-4634-9ef7-622c4d65fef6",
    title: "Mixed Color Kimono",
    rating: "4.3",
    price: "6299",
    category: "Kimono",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858610/colorful_kimono_o8pvo3.jpg",
  },
  {
    _id: "ha73349s-16w4-4634-9ef7-622c4d65fef6",
    title: "Karate Gi (White)",
    rating: "4.4",
    price: "2999",
    category: "Clothes",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858610/white_karate_xv4poi.jpg",
  },
  {
    _id: "ha73349s-328u-4634-9ef7-622c4d65fef6",
    title: "Karate Gi (Black)",
    rating: "3.9",
    price: "2499",
    category: "Clothes",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858609/black_karate_t8xqev.jpg",
  },
  {
    _id: "ha73349s-1562-4634-9ef7-622c4d65fef6",
    title: "Karate Gi (Blue)",
    rating: "2.8",
    price: "2499",
    category: "Clothes",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858610/blue_karate_kazwai.jpg",
  },
  {
    _id: "ha73349s-263d-4634-9ef7-622c4d65fef6",
    title: "Karate Gi (Combo)",
    rating: "3.9",
    price: "4299",
    category: "Clothes",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647858610/combo_karate_ktacje.webp",
  },
  {
    _id: "qu24bs83-193b-ow13-9ef7-622c4d65fef6",
    title: "Headband (Blue)",
    rating: "4.5",
    price: "350",
    category: "Headband",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647860333/blue_headband_iyl7rp.jpg",
  },
  {
    _id: "qu24bs83-su13-ow13-9ef7-622c4d65fef6",
    title: "Headband (Yellow)",
    rating: "4.2",
    price: "350",
    category: "Headband",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647860333/yellow_headband_hoqn5o.jpg",
  },
  {
    _id: "qu24bs83-ma29-ow13-9ef7-622c4d65fef6",
    title: "Headband (White)",
    rating: "3.8",
    price: "300",
    category: "Headband",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647860333/white_headband_ea53vk.jpg",
  },
  {
    _id: "qu24bs83-ps12-qwt2-9ef7-622c4d65fef6",
    title: "Headband (Red)",
    rating: "4.3",
    price: "350",
    category: "Headband",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647860333/red_headband_zgsqui.jpg",
  },
  {
    _id: "qu24bs83-1js3-ls2d-9ef7-622c4d65fef6",
    title: "Headband Combo",
    rating: "4",
    price: "999",
    category: "Headband",
    image:
      "https://res.cloudinary.com/randomwave45/image/upload/v1647860334/combo_headband_xcuhdb.jpg",
  },
];
