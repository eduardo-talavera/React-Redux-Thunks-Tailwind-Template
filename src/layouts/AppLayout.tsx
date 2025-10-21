import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "@/ui/Sidebar";
import { TopBar } from "@/ui/TopBar";
import { Footer } from "@/ui/Footer";

export const AppLayout = () => {
  return (
    <>
      <TopBar />
      <Sidebar />
      <main
        className={`
          min-h-[70vh] max-w-screen-2xl mx-auto 
          mt-10 p-5 md:container md:mx-auto`}
      >
        <Outlet />
      </main>
      <Footer />
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </>
  );
};
