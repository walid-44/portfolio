import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Logo from "../logo/Logo";
import Sociol from "../sociol/Sociol";
import "./footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  // console.log(date);
  return (
    <div className="position-relative ">
      <div className="py-4 d-flex container flex-column flex-md-row  justify-content-between align-items-center">
        <Logo />
        <div className="phone-info my-3">
          <a className="" href="tel:+201220514301">
            <BsFillTelephoneOutboundFill />
            Phone : +201220514301
          </a>
        </div>
        <Sociol />
      </div>
      <p className="text-center position-absolute footer-text m-0">
        CopyRight {date} | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
