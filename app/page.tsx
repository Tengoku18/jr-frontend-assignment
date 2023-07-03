"use client";

import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/redux/storage/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Navbar />
      <Gallery />
    </Provider>
  );
}
