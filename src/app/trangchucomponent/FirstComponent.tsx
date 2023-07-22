import React from "react";
import styles from "./FirstComponent.module.css";
import Image from "next/image";

// import { signOut, useSession } from "next-auth/react";

type FirstComponentProps = {
  test?: string;
};

const FirstComponent: React.FC<FirstComponentProps> = ({ test }) => {
  return (
    <div className={styles.container}>
      <Image
        src="https://res.cloudinary.com/dirs6avbc/image/upload/v1689649688/samples/ecommerce/accessories-bag.jpg"
        alt="Thuner Image"
        width={100}
        height={100}
      />
      <p className={styles.text}>Shoping Now</p>
    </div>
  );
};

export default FirstComponent;

//
