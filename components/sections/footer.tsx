import type { NextPage } from "next";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer
        id="footer"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        <p className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>BLH</span>
          </strong>
          . All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
