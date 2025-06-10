import { FaCommentDots, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            className="text-2xl"
            target="_blank"
            href="https://www.linkedin.com/in/sebastian-brodziński-759b73302/"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-2xl"
            target="_blank"
            href="https://github.com/xrecc"
          >
            <FaGithub />
          </a>
          <a className="text-2xl">
            <FaCommentDots />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Created by Sebastian
          Brodziński
        </p>
      </aside>
    </footer>
  );
}
export default Footer;
