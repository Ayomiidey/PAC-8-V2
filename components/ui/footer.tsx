import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">PAC-8</h3>
            <p className="text-sm">
              Pack it, Pack More. <br /> since 2024.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ayomiidey"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/quadri-alarape/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white">
                  About PAC-8
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm hover:text-white">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/developer" className="text-sm hover:text-white">
                  About Developer
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-sm hover:text-white">
                  Members
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>PAC-8</li>
              <li>123 Packaging Street,</li>
              <li>Ikeja, LA 10001</li>
              <li>
                <a
                  href="tel:+2348144087702"
                  className="hover:text-white transition-colors duration-200"
                >
                  Phone: +2348144087702
                </a>
              </li>
              <li>
                <a
                  href="mailto:pac8now@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  Email: pac8now@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 PAC-8. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/privacy" className="text-sm hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
