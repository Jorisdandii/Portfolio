import { styles } from "../../../../utils/tailwind_variables";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Socials = () => {
  return (
    <ul className={`${styles.flex} w-full gap-2 mt-5`}>
      <li className={`${styles.socials}`}>
        <a
          href="https://www.instagram.com/sirojiddin8617/"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillInstagram color="white" />
        </a>
      </li>
      <li className={`${styles.socials}`}>
        <a
          href="https://www.facebook.com/people/Sirojiddin-Tangirov/pfbid0gPWm5NvsEVX3CA8cnmM5YKvcynU47Q5cM2iaxZQEoHdYLhzSUzReWfn5UcoSe7wql/?locale=ko_KR"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaFacebookF color="white" />
        </a>
      </li>

      <li className={`${styles.socials}`}>
        <a
          href="https://www.linkedin.com/feed/?legoTrackingToken=c34ZpnFFkTBxr71PqmgCc2UMfmlOrSdjtOoZsC5gr6litOoZp6Zdr6litOoVejAVejRApnhPpnlNpl9JtmUCjAZ9l4BjjR0Zuk9OpmhOjThBpShFtOpQrClQrCBvsClHpmlPnS9LqBYOtChxs6xzrDlxr3RAinhBpShFtOoMfmVLqnhFsSZgt6lDp6BT9z0Kc3RBsCZzkT9D9zROol1Ipl9OpOoZp6Zdr6lisCsCc3RKrSBQqndLk71RrT9D9zAVejAVfmhBt7dBtn5BkCRRjD1RrT9D9DhItm5CpmgZp4BMtmZOpOpejQBkildfk3RVgD9Bp79L9DhItm5CpmgZp4BQrClJpSlP9DhKpnhKqjRAinhLr7cCt6NRompBp3RAinhRrTBxr2oOtChxs6xzrDlxr3RBrm5epmtxs2pEt7tLsCsZp4BMs64CcPsUdPoOfmh9rCZFsT9BtyoScjsQe3ATdP0Nfmh9tipBdPlzcjlzdCdBpCoJom4Pe2QVc68QbjcUdmcJdmoTojkQcS8Zp4BQu6lQrCZz"
          target={"_blank"}
          rel="noreferrer"
        >
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
