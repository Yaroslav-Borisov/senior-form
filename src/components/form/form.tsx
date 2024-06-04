import { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../input/input';
import styles from './form.module.css';
import { FormDataI, formConfig, initialState } from '../../form-config';

const Form = () => {
  const [formState, setFormState] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormState((prev: FormDataI) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form id={'registration'} className={styles.form} onSubmit={onSubmit}>
      <h1 className={styles.form__title}>Регистрация</h1>
      <div className={styles.form__inputs}>
        {formConfig.map((item) => (
          <Input key={item.name} {...item} value={formState[item.name]} onChange={onChange} />
        ))}
      </div>
      <button className={styles.form__button} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default Form;
