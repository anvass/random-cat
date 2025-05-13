import styles from './Image.module.css';

interface ImageProps {
  src: string;
  alt: string;
}

function Image({ src = '', alt = '' }: ImageProps) {
  return <img src={src} alt={alt} className={styles.image} />;
}

export default Image;
