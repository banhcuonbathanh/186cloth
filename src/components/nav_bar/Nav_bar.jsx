"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { motion, useAnimation } from "framer-motion";

// import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "trang chu",
    url: "/"
  },
  {
    id: 2,
    title: "gioi thieu",
    url: "/gioithieu"
  },
  {
    id: 3,
    title: "san pham",
    url: "/sanpham"
  },
  {
    id: 4,
    title: "tin tuc",
    url: "/tintuc"
  },
  {
    id: 5,
    title: "lien he",
    url: "/lienhe"
  }
  // {
  //   id: 2,
  //   title: "gioi thieu",
  //   url: "/portfolio"
  // },
  // {
  //   id: 3,
  //   title: "san pham",
  //   url: "/product1"
  // },
  // {
  //   id: 4,
  //   title: "tin tuc",
  //   url: "/about"
  // },
  // {
  //   id: 5,
  //   title: "lien he",
  //   url: "/contact"
  // },
  // {
  //   id: 6,
  //   title: "Dashboard",
  //   url: "/dashboard"
  // }
];

const Navbar = () => {
  const linksData = [
    {
      id: 1,
      title: "san pham 1",
      url: "/sanpham1"
    },
    {
      id: 2,
      title: "san pham 2",
      url: "/sanpham2"
    }
  ];

  const imageUrls = [
    "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649757/cloth/erica-zhou-IHpUgFDn7zU-unsplash_yslun2.jpg",
    "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649708/cld-sample-4.jpg",
    "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649707/cld-sample-3.jpg",

    " https://res.cloudinary.com/dirs6avbc/image/upload/v1689649706/samples/outdoor-woman.jpg",

    " https://res.cloudinary.com/dirs6avbc/image/upload/v1689649702/samples/two-ladies.jpg"
  ];
  const [newImageUrl, setNewImageUrl] = useState(imageUrls[0]);

  const handleBackgroundChange = () => {
    const nextIndex = Math.floor(Math.random() * imageUrls.length);
    const newImageUrl = imageUrls[nextIndex];
    setNewImageUrl(newImageUrl);
  };

  // use effect
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!newImageUrl) return;

    const image = new Image();
    image.onload = () => {
      setLoading(false);
    };
    image.src = newImageUrl; // start loading image

    return () => {
      image.onload = null; // cleanup function to remove onload event handler
    };
  }, [newImageUrl]);

  return (
    <div
      style={{
        height: "200px",
        width: "100%",
        backgroundImage: !loading ? `url(${newImageUrl})` : null,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: loading ? "white" : "transparent"
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: "20px",
            fontWeight: "bold"
          }}
        >
          Loading...
        </div>
      )}

      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Nikolas
        </Link>
        <div className={styles.links}>
          <Link
            href="/"
            className={styles.link}
            onClick={handleBackgroundChange}
          >
            Trang chu
          </Link>
          <Link
            href="/gioithieu"
            className={styles.link}
            onClick={handleBackgroundChange}
          >
            gioi thieu
          </Link>

          <LinkListComponent
            links={linksData}
            handleBackgroundChange={handleBackgroundChange}
          />

          <Link
            href="/tintuc"
            className={styles.link}
            onClick={handleBackgroundChange}
          >
            tin tuc
          </Link>
          <Link
            href="/lienhe"
            className={styles.link}
            onClick={handleBackgroundChange}
          >
            lien he
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//

function LinkListComponent({ links }) {
  const controls = useAnimation();

  return (
    <div className={styles.dropdown}>
      <motion.div
        className={styles.sanpham}
        onMouseEnter={() => controls.start({ opacity: 1, scale: 1, y: 0 })}
        onMouseLeave={() => controls.start({ opacity: 0, scale: 0.5, y: 0 })}
      >
        san pham
      </motion.div>
      <motion.div
        initial={{ opacity: 1, scale: 0.0, y: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className={styles.containersanpham}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={styles.linksubsanpham}
            onClick={() => {}}
          >
            {link.title}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

const ImageComponent = ({ newImageUrl }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        height: "200px",
        width: "100%",
        backgroundColor: loaded ? "transparent" : "white",
        position: "relative", // Added this line
        zIndex: -1 // Added this line
      }}
    >
      {!loaded && (
        <div>
          {/* Loading Indicator Here. You can replace this with your own loading component */}
          Loading...
        </div>
      )}
      <img
        src={newImageUrl}
        onLoad={() => setLoaded(true)}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          display: loaded ? "block" : "none"
        }}
        alt="dynamic"
      />
    </div>
  );
};
