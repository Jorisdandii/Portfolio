import { styles } from "../../../../utils/tailwind_variables";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Socials = () => {
  return (
    <ul className={`${styles.flex} w-full gap-2 mt-5`}>
      <li className={`${styles.socials}`}>
        <a
          href="https://www.pinterest.com/gulxumorerkinjonova/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaPinterestP color="white" />
        </a>
      </li>
      <li className={`${styles.socials}`}>
        <a
          href="https://facebook.com/tangirov"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaFacebookF color="white" />
        </a>
      </li>

      <li className={`${styles.socials}`}>
        <a href="https://linkedin.com/" target={"_blank"} rel="noreferrer">
          <FaLinkedinIn color="white" />
        </a>
      </li>

      <li className={`${styles.socials}`}>
        <a
          href="https://twitter.com/tangirov"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaTwitter color="white" />
        </a>
      </li>
      <li className={`${styles.socials}`}>
        <a
          href="https://github.com/jorisdandii"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaGithub color="white" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
