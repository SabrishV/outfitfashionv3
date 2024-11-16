import { AppWrapper } from "@/component/AppWrapper";
import "./globals.css";
// import { UserProvider } from "@/components/context/context";

export const metadata = {
  title: "Outfit Fashion",
  description: "",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <UserProvider> */}
          <AppWrapper>{children}</AppWrapper>
        {/* </UserProvider> */}
      </body>
  </html>
);
}