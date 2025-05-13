import styles from './Checkbox.module.css';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
  label?: string;
}

function Checkbox({ checked, onChange = () => {}, label }: CheckboxProps) {
  return (
    <label className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        className={styles.checkbox}
        defaultChecked={checked}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
}

export default Checkbox;
