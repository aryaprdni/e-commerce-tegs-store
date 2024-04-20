import React from "react";
import { ITag } from "../types/interface";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Layout = ({ children }: ITag) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
