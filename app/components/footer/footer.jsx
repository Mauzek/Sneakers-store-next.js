import Styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <nav className={Styles.footer__navbar}>
        <section className={Styles.navbar__container}>
          <h2 className={Styles.footer__container__logo}>
            <a href="#">КРОССЫ—И ТОЧКА.</a>
          </h2>
          <div className={Styles.container__navbar__menu}>
            <ul className="navbar__menu__list">
              <li className={`navbar__menu__item ${Styles.footer__menu__item}`}>
                <a href="https://t.me/tralebys" target="_blank">
                  💬 TG
                </a>
              </li>
              <li className={`navbar__menu__item ${Styles.footer__menu__item}`}>
                <a href="https://vk.com/tralebys" target="_blank">
                  😊 VK
                </a>
              </li>
              <li className={`navbar__menu__item ${Styles.footer__menu__item}`}>
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  📺 YouTube
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className={Styles.footer__registered}>
          <hr className={Styles.registered__border} />
          <h3 className={Styles.registered__text}>КРОССЫ—И ТОЧКА ® 2023</h3>
        </div>
      </nav>
    </footer>
  );
};
