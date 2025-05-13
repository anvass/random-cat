import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <img src={`${import.meta.env.BASE_URL}/tube-spinner.svg`} alt="" />
    </div>
  );
}

export default Loader;
