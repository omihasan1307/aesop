import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="bg-black text-white text-sm "
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10  px-9 py-5 lg:px-12 lg:py-10 ">
        <div className="lg:col-span-2">
          <h1 className="font-semibold mb-5 lg:text-xl text-sm ">
            Subscribe to Aesop communications
          </h1>
          <hr className="mb-2 lg:mb-5" />
          <div className="flex items-center justify-between border px-4 text-left font-semibold text-xl rounded">
            <input
              className="bg-black text-white w-[80%] py-2 pe-4"
              type="text"
              placeholder="Email address"
            />
            <FontAwesomeIcon className="text-right" icon={faArrowRight} />
          </div>
          <div className="my-5 flex items-start space-x-5 text-sm lg:text-base">
            <input className="mt-2" type="checkbox" />
            <p className="text-sm">
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our{" "}
              <span className="underline">privacy policy.</span>
            </p>
          </div>
        </div>
        <div className="lg:col-span-3 ">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="">
              <h1 className="font-semibold mb-5 lg:text-xl text-sm ">
                Orders and support
              </h1>
              <hr className="mb-5" />
              <div>
                <ul className="space-y-4">
                  <li>
                    Contact us <FontAwesomeIcon icon={faLocationArrow} />
                  </li>
                  <li>
                    FAQs
                    <FontAwesomeIcon icon={faLocationArrow} />
                  </li>
                  <li>
                    Shipping <FontAwesomeIcon icon={faLocationArrow} />
                  </li>
                  <li>
                    Returns <FontAwesomeIcon icon={faLocationArrow} />
                  </li>
                  <li>Order history</li>
                  <li>Terms and conditions</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="font-semibold mb-5 lg:text-xl text-sm ">
                Services
              </h1>
              <hr className="mb-5" />
              <div>
                <ul className="space-y-4">
                  <li>Live assistance</li>
                  <li>Corporate gifts</li>
                  <li>Facial Appointments</li>
                  <li>Click and Collect</li>
                  <li>Video consultation</li>
                </ul>
              </div>
            </div>
            <div>
              {" "}
              <h1 className="font-semibold mb-5 lg:text-xl text-sm ">
                Location preferences
              </h1>
              <hr className="mb-5" />
              <div>
                <div className=" mb-8">
                  <p>Shipping:</p>
                  <p className="underline">Hong Kong SAR, China</p>
                </div>
                <div>
                  <p>Language:</p>
                  <p className="underline">English</p>
                  <p>繁體中文</p>
                </div>
              </div>
            </div>
            <div className="lg:hidden block ">
              <h1 className="font-semibold mb-5 lg:text-xl text-sm ">
                Sustainability
              </h1>
              <hr className="mb-5" />
              <p className="text-sm">
                All Aesop products are vegan, and we do not test our
                formulations or ingredients on animals. We are Leaping Bunny
                approved and a Certified B Corporation. Learn more
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10  px-9 py-5 lg:px-12 lg:py-10">
        <div className="col-span-2 lg:block hidden">
          <h1 className="font-semibold mb-5 lg:text-xl text-sm ">
            Sustainability
          </h1>
          <hr className="mb-5" />
          <p className="text-sm">
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </p>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h1 className="font-semibold mb-5 lg:text-xl text-sm ">About</h1>
              <hr className="mb-5" />
              <div>
                <ul className="space-y-4">
                  <li>Our story</li>
                  <li>Foundation</li>
                  <li>Careers</li>
                  <li>Privacy policy</li>
                  <li>Accessibility</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
            <div className=" lg:block hidden">
              <h1 className="font-semibold mb-5 lg:text-xl text-sm ">
                Social media
              </h1>
              <hr className="mb-5" />
              <div>
                <ul className="space-y-4">
                  <li>
                    Instagram <FontAwesomeIcon icon={faLocationArrow} />
                  </li>
                  <li>
                    Twitter
                    <FontAwesomeIcon icon={faLocationArrow} />
                  </li>
                  <li>
                    LinkedIn
                    <FontAwesomeIcon icon={faLocationArrow} />
                  </li>
                  <li>WeChat</li>
                  <li>
                    Weibo
                    <FontAwesomeIcon icon={faLocationArrow} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className=" border" />
      <div className="flex items-center justify-between py-5 px-10">
        <h1 className=" text-xl">© Aesop</h1>
        <div className="flex text-xl lg:hidden ">
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="px-10">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
