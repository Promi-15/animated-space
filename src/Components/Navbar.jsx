import { FaRocket } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#2f0b4c] py-8 px-20 flex justify-between items-center ">
      <div className="flex items-center gap-5">
        <FaRocket className="text-3xl text-white" />
        <h1 className="text-3xl text-white">Space</h1>
      </div>
      <div className=" flex justify-between gap-5 items-center">
        <ul className="flex flex-row text-white j gap-10 text-xl font-semibold italic">
          <li>Home</li>
          <li>Features</li>
          <li> Pricing</li>
          <li>Contact Us</li>
        </ul>
        <button className="btn-outline  text-white border-2 py-2 px-4 rounded-3xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
