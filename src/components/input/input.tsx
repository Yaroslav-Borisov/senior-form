import styles from './input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  const { placeholder, type, ...rest } = props;
  return (
    <label className={styles.input__wrapper}>
      <input
        className={styles.input}
        autoComplete="off"
        placeholder={placeholder}
        type={type || 'text'}
        {...rest}
      />
    </label>
  );
};

export default Input;
