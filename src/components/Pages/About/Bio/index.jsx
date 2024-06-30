import { PiGameControllerFill } from "react-icons/pi";
import {
  FaBookReader,
  FaChartArea,
  FaGifts,
  FaMailBulk,
  FaPassport,
  FaPhoneAlt,
  FaSearchLocation,
} from "react-icons/fa";

const Bio = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <ul>
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaGifts color="orange" className="mr-3" />
          <span>
            <label className="mr-3">생년월일:</label> 1993.12.05
          </span>
        </li>
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaPassport color="orange" className="mr-3" />
          <span>
            <label className="mr-3">나이:</label> 30
          </span>
        </li>

        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaSearchLocation color="orange" className="mr-3" />
          <span>
            <label className="mr-3">주소:</label>
            서울
          </span>
        </li>

        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <PiGameControllerFill color="orange" className="mr-3" />
          <span>
            <label className="mr-3">이해:</label> 코딩, 읽기
          </span>
        </li>
      </ul>
      <ul className="mr-5">
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaBookReader color="orange" className="mr-3" />
          <span>
            <label className="mr-3">학부:</label>
            석사 계명대학원
          </span>
        </li>
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaChartArea color="orange" className="mr-3" />
          <span>
            <label className="mr-3">도:</label> Junior
          </span>
        </li>
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaMailBulk color="orange" className="mr-3" />
          <span>
            <label className="mr-3">이메일:</label>
            <a
              href="mailto:jorisdandii@gmail.com"
              className="hover:underline"
            >
              jorisdandii@gmail.com
            </a>
          </span>
        </li>
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaPhoneAlt color="orange" className="mr-3" />
          <span>
            <label className="mr-3">전화:</label>
            <a href="tel:+821076145180" className="hover:underline">
              (+82) 010 - 7614 - 5180
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Bio;
