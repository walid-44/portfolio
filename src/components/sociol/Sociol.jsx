import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import './sociol.css'

const Sociol = () => {
  return (
    <div className="sociol_icon">
          <a
            href="https://www.linkedin.com/in/walid-fawzy-844827245/"
            target="_blank"
            className="link_icon"
            aria-label="Linkedin"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/walid-44"
            target="_blank"
            className="link_icon"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/walid.fawzy.9440"
            target="_blank"
            className="link_icon"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/+201220514301"
            target="_blank"
            className="link_icon"
            aria-label="whatsApp"
          >
            <BsWhatsapp />
          </a>
        </div>
  )
}

export default Sociol