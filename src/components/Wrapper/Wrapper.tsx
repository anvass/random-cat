import styles from './Wrapper.module.css';

interface WrapperProps {
  children?: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
