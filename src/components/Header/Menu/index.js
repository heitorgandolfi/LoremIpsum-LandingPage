import { Button } from '../../Button';
import styles from './menu.module.css';
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { VscClose } from 'react-icons/vsc';

export function Menu({ title, titleExtend, menuList, loginText }) {


  const [showMenu, setShowMenu] = useState(true);


  return (

    <header className={styles.menu}>


      {
        (showMenu) ? (
          <>
            <h1>
              {title}<span>{titleExtend}</span>
            </h1>
            <button onClick={() => setShowMenu(false)} className={styles.openMenuBtn}>
              <HiMenuAlt4 />
            </button>

            <nav>
              <ul className={styles.navItems}>
                {
                  menuList.map((links, index) =>
                    (<li key={index}>{links}</li>))
                }
              </ul>
            </nav>

            <div>
              <ul className={styles.navItems}>
                <li>{loginText}</li>
                <Button
                  btnText="Sign up"
                />
              </ul>
            </div>
          </>
        )

          :

          (
            <nav className={styles.mobileNav}>
              <button onClick={() => setShowMenu(true)} className={styles.closeMenuBtn}>
                <VscClose />
              </button>
              <ul className={styles.mobileNavItems}>
                {
                  menuList.map((links, index) =>
                    (<li className={styles.list} key={index}>{links}</li>))
                }

              </ul>
              <div className={styles.userAction}>
                <li>{loginText}</li>
                <Button
                  btnText="Sign up"
                />
              </div>
            </nav>
          )
      }
    </header >
  )
}