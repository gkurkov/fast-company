import React, { useEffect, useState } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'
import CheckBoxField from '../common/form/checkBoxField'
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom'
// import * as yup from 'yup'

const LoginForm = () => {
    // console.log(process.env)
    const history = useHistory()
    const [data, setData] = useState({ email: '', password: '', stayOn: false }) // состояние для всей формы сразу, а не отдельных полей
    const [errors, setErrors] = useState({})
    const { logIn } = useAuth()

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    // const validateScheme = yup.object().shape({
    //     password: yup
    //         .string()
    //         .required('Пароль обязателен для заполнения')
    //         .matches(
    //             /(?=.*[A-Z])/,
    //             'Пароль должен содержать хотя бы одну заглавную букву'
    //         )
    //         .matches(
    //             /(?=.*[0-9])/,
    //             'Пароль должен содержать хотя бы одну цифру'
    //         )
    //         .matches(
    //             /(?=.*[!@#$%^&*])/,
    //             'Пароль должен содержать один из символов !@#$%^&*'
    //         )
    //         .matches(/(?=.{8,})/, 'Пароль должен содержать минимум 8 символов'),
    //     email: yup
    //         .string()
    //         .required('Электронная почта обязательна для заполнения')
    //         .email('Email введен не корректно')
    // })

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: { message: 'Email введен не корректно' }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'
            },
            isCapitalSymbol: {
                message: 'Пароль должен содержать хотя бы одну заглавную букву'
            },
            isContentDigit: {
                message: 'Пароль должен содержать хотя бы одну цифру'
            },
            min: {
                message: 'Пароль должен содержать минимум 8 символов',
                value: 8
            }
        }
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)

        // validateScheme
        //     .validate(data)
        //     .then(() => setErrors({}))
        //     .catch((err) => setErrors({ [err.path]: err.message }))

        // for (const fieldName in data) {
        //     if (data[fieldName].trim() === '') {
        //         errors[fieldName] = `${fieldName} не должно быть пустым`
        //     }
        // }
        setErrors(errors)
        return Object.keys(errors).length === 0 // true or false
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        try {
            console.log('loginform data', data)
            await logIn(data)
            history.push('/')
        } catch (error) {
            setErrors(error)
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                // type="text" // по умолчанию обозначили в компоненте значение text
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Оставаться в системе
            </CheckBoxField>
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
            >
                Submit
            </button>
            {/* <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    name="email"
                    value={data.password}
                    onChange={handleChange}
                />
            </div> */}
        </form>
    )
}

export default LoginForm
