// import Navbar from "@/components/navigation/navbar";
// import Sidebar from "@/components/navigation/navbar/Sidebar";
// import React from "react";

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <main>
//       <Navbar />
//       <div className="pt-[85px] flex items-start">
//         <Sidebar />
//         {children}
//       </div>
//     </main>
//   );
// };

// export default RootLayout;

import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/LeftSidebar";
import RightSidebar from "@/components/navigation/RightSidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />

      <div className="flex">
        <LeftSidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>

        <RightSidebar />
      </div>
    </main>
  );
};

export default RootLayout;
