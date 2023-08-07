import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://github.com/mrgb5" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/kroiesma/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://youtube.com/kroiesma" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
        <a href="https://instagram.com/kroiesma" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
