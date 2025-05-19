import { FaCommentDots, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="text-2xl">
            <FaLinkedin />
          </a>
          <a className="text-2xl">
            <FaGithub />
          </a>
          <a className="text-2xl">
            <FaCommentDots />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Sebastian Brodziński
        </p>
      </aside>
    </footer>
  );
}
export default Footer;
