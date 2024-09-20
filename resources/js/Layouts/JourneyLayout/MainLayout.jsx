import { Head } from "@inertiajs/react";
import Footer from "./Footer";
import HeaderLayout from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
    return (

        <body>
            <HeaderLayout />
            <Sidebar />
            {children}
            <Footer/>
        </body>
  
    );
};