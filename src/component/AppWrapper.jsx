"use client";
import React, { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import "@/app/globals.css";
import Footer from "./Landing_Page/Footer/Footer";
import Navigation from "./Landing_Page/Navbar/Navigation";



export function AppWrapper({ children }) {
  const pathname = usePathname();



  return (
    // <Provider store={store}>
      <section>
        {pathname === "/" || pathname === "/about" || pathname === "/" 
        || pathname === "/contact" || pathname === "/join" || pathname === "/homeimage" 
        || pathname === "/Shoppingbag" || pathname === "/checkout" 
        || pathname === "/payment" || pathname === "/account" || pathname === "/wishlist" || pathname === "/yourorder" || pathname === "/login"
        || pathname === "/signup" || pathname === "/shipadd" || pathname === "/paysuccess" ? ( <Navigation />) : ("")}

        <main>
          <div className="">{children}</div>
        </main>
        
        {pathname === "/" || pathname === "/about" || pathname === "/" || pathname === "/contact" || pathname === "/join" || pathname === "/homeimage" 
        || pathname === "/Shoppingbag" || pathname === "/wishlist"  || pathname === "/yourorder" ? ( <> <Footer /> </> ) : ("")}
      </section>
    // </Provider>
  );
}