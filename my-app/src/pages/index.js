import React from "react";

import Footer from "@/components/Footer";

import { ImageResponse } from "next/server";
import Nav from "@/components/Nav";

function index() {
  return (
    <div>
      <Nav />

      <Footer />
    </div>
  );
}

export default index;
