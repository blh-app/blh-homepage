import type { NextPage } from "next";
import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer id="footer">
        <p className="copyright">
          Made & designed by
          <strong>
            <span> BLH</span>
          </strong>
          .{" "}
          <Link href={"imprint"}>
            <a href="">Imprint</a>
          </Link>{" "}
          /{" "}
          <Link href={"privacy"}>
            <a href="">Privacy</a>
          </Link>
          .
        </p>
      </footer>
    </div>
  );
};

export default Footer;
