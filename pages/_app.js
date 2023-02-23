import "../styles/global.css";
import Link from "next/link";
import { useRouter } from "next/router";  // Checking the current URL path

const App = ({ Component, pageProps }) => {

  const route = useRouter();

  return (
    <>
      <div>
        <h2>OurNextApp</h2>
        <nav className="header-nav">
          <ul>
            <li>
              <Link className={route.pathname == "/" ? "active" : ""} href="/">Home</Link>
            </li>
            <li>
              <Link className={route.pathname == "/blog" ? "active" : ""} href="/blog">Blog</Link>
            </li>
            <li>
              <Link className={route.pathname == "/about" ? "active" : ""} href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Other components are placed in between of navbar and footer */}
      <Component {...pageProps} />
      <footer>Footer</footer>
    </>
  );
};

export default App;