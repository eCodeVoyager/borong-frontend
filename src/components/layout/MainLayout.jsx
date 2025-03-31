import React from "react";
import AnnouncementBar from "../common/AnnouncementBar";
import Header from "../common/Header";
import Footer from "../common/Footer";

const MainLayout = ({ children, cartCount = 0, wishlistCount = 0 }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AnnouncementBar />
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
