import styles from "../../style";
import { Footer, Navbar } from "../../components";
import { Outlet, Link } from "react-router-dom";

const Layout = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={` ${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Outlet/>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;