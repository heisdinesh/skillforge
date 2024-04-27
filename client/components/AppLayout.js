import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
