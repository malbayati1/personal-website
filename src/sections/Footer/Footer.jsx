import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Muhammad H. Albayati. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;