import { Outlet } from "react-router-dom";

import { AboutInfo, GitHub, LeetCode, Navigation, Portfolio } from "../../shared";
import { Route, Routes } from "react-router-dom";
import { ContactForm } from "../../shared";

export default function home() {

  const menuItems = [
    {
      to: "/cv",
      unit: "Portfolio"
    },
    {
      to: "/contact",
      unit: "Contact"
    },
    {
      to: "/github",
      unit: "GitHub"
    },
  ]

  return (
    <div className="fullflex w-[1200px] h-[650px] p-4 custom-shadow rounded-2xl">
      <div className="w-full h-full fullflex border-black shadow-2xl rounded-2xl">
        <img src="../../../img/foto2.jpg" alt="Your Image" className="relative inset-0 w-full h-full object-cover object-right rounded-2xl" />
      </div>
      <div className="w-full h-full flex justify-start items-end flex-col ml-5">
        <Navigation items={menuItems}></Navigation>
        <div className="fullflex w-full h-full my-10">
          <Routes>
            <Route path="/">
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/cv" element={<Portfolio />} />
              <Route path="/github" element={<GitHub />}/>
              <Route path="/leetcode" element={<LeetCode />} />
            </Route>
          </Routes>
        </div>
        <AboutInfo />
      </div>
    </div>
  )
}
