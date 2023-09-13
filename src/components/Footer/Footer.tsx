import React from 'react'
import styles from './Footer.module.css';
import inst from './instagram_ig_insta_icon_190937.svg'
import email from './email-envelope-outline-shape-with-rounded-corners_icon-icons.com_56530.svg'
import tg from './telegram_icon_131945.svg'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.info}>
          <div className={styles.aboutWe}>
            <h4>О НАС </h4>
            <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, cumque voluptatibus cupiditate doloremque ad aut id ipsa eveniet ut temporibus fugiat esse alias, quae repudiandae saepe, maiores harum explicabo aspernatur.</p>
          </div>

          <div className={styles.contacts}>
            <h4>КОНТАКТЫ </h4>
            <p ><a href="www"><img src={inst} className={styles.icon} />instagramm</a></p>
            <p><a href="www"><img src={email} className={styles.icon} />e-mail</a></p>
            <p><a href="www"><img src={tg} className={styles.icon} />Telegram</a></p>
          </div>
        </div>
        <div className={styles.company}>
          <p>© АО «CarInRent Автомобильная группа» 2023</p>
        </div>
      </div>
    </>
  )
}


export default Footer;