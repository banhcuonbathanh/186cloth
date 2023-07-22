"use client";
import Image from "next/image";
import styles from "../app/trangchu.module.css";
import React from "react";
import FirstComponent from "../app/trangchucomponent/FirstComponent";
import DemoCarousel from "../app/trangchucomponent/SecondComponent";
const TrangChu = () => {
  // export default function TrangChu() {
  return (
    <main>
      <div className={styles.container}>
        <FirstComponent test="asdfs" />
        <DemoCarousel />
      </div>
    </main>
  );
};
export default TrangChu;
