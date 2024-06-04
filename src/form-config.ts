import { InputProps } from "./components/input/input";

export interface FormDataI {
    name: string,
    surname: string,
    email: string,
    password: string,
    duplicate: string | undefined,
}

export const initialState: FormDataI = {
    name: '',
    surname: '',
    email: '',
    password: '',
    duplicate: '',
}

type FormConfig = (InputProps & {
    name: keyof FormDataI
})[]

export const formConfig: FormConfig = [
    {
        name: 'name',
        placeholder: 'Имя',
        required: true,
    },
    {
        name: 'surname',
        placeholder: 'Фамилия',
        required: true,
    },
    {
        name: 'email',
        placeholder: 'Почта',
        pattern: '^\\S+@\\S+\\.\\S+$',
    },
    {
        name: 'password',
        placeholder: 'Пароль',
        required: true,
        type: 'password',
        minLength: 6,
    },
    {
        name: 'duplicate',
        placeholder: 'Повторите пароль',
        required: true,
        type: 'password',
    }
]
