import Link from "next/link";
import Styles from "./header.module.css";


export const Header = () => {
  return (
    <header>
      <nav className={Styles.navbar}>
        <section className={Styles.navbar__container}>
          <Link href="/" className={Styles.header__container__logo}>
           <h2>КРОССЫ—И ТОЧКА.</h2>
          </Link>
          <div className={Styles.container__navbar__menu}>
            <ul className="navbar__menu__list">
              <li className={`navbar__menu__item ${Styles.header__menu__item}`}>
                <Link href="/cart">
                  <h3>Корзина</h3>
                </Link>
              </li>
              <li className={`navbar__menu__item ${Styles.header__menu__item}`}>
                <Link href="/profile">             
                  <h3>Профиль</h3>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </header>
  );
};
