import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import styles from "./FirstComponent.module.css";
import Image from "next/image";
import { z } from "zod";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "./styles.css";

import ReactDOM from "react-dom";

type SecondComponentProps = {
  test?: string;
};

const SecondComponentProps: React.FC<SecondComponentProps> = ({ test }) => {
  const products: ProductModel[] = [
    {
      price: 100,
      name: "Sample Product 1",
      id: 1,
      pic: "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649687/samples/ecommerce/leather-bag-gray.jpg"
    },
    {
      price: 100,
      name: "Sample Product 1",
      id: 1,
      pic: "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649687/samples/ecommerce/leather-bag-gray.jpg"
    },
    {
      price: 200,
      name: "Sample Product 2",
      id: 2,
      pic: "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649677/samples/ecommerce/analog-classic.jpg"
    },
    {
      price: 300,
      name: "Sample Product 3",
      id: 3,
      pic: "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649706/samples/outdoor-woman.jpg"
    },
    {
      price: 300,
      name: "Sample Product 3",
      id: 3,
      pic: "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649706/samples/outdoor-woman.jpg"
    }
  ];
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SecondComponentProps;

const ProductCard: React.FC<SecondComponentProductProps> = ({ product }) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.productInfo}>
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
      </div>
      <div className={styles.productImage}>
        <img
          src={product.pic}
          alt={product.name}
          style={{ height: 200, width: 200 }}
        />
      </div>
    </div>
  );
};

//

type SecondComponentProductProps = {
  product: ProductModel;
};
interface ProductModel {
  price: number;
  name: string;
  id: number;

  pic: string;
}
