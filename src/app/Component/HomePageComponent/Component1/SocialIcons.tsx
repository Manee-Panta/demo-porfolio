import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const socialIconClass =
  "text-2xl text-gray-700 hover:text-gray-900 transition-transform duration-300 transform hover:scale-125 hover:shadow-lg";

export function SocialIcons() {
  return (
    <div className="flex justify-center lg:justify-start space-x-6 mt-8">
      {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
        <a href="#" key={idx} className={socialIconClass}>
          <Icon />
        </a>
      ))}
    </div>
  );
}
