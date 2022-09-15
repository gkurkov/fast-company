import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginForm from '../components/ui/loginForm'
import RegisterForm from '../components/ui/registerForm'

const Login = () => {
    const { type } = useParams()
    const [formType, setFormType] = useState(
        type === 'register' ? type : 'login'
    )

<<<<<<< HEAD
    const [data, setData] = useState({ email: '', password: '' }) // состояние для всей формы сразу, а не отдельных полей
    const [errors, setErrors] = useState({})

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

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

        // for (const fieldName in data) {
        //     if (data[fieldName].trim() === '') {
        //         errors[fieldName] = `${fieldName} не должно быть пустым`
        //     }
        // }
        setErrors(errors)
        return Object.keys(errors).length === 0 // true or false
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
=======
    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === 'register' ? 'login' : 'register'
        )
>>>>>>> e57798ce3f957bb071b7db75c849fe1f44ad6f5a
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === 'register' ? (
                        <>
                                        <h3 className="mb-4">Register</h3>
                            <RegisterForm />
                            <p>
                                Already have account?{''}
                                <a role="button" onClick={toggleFormType}>
                                    {' '}
                                    Sign In
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Login</h3>
                            <LoginForm />
                            <p>
                                Dont have account?{' '}
                                <a role="button" onClick={toggleFormType}>
                                    {' '}
                                    Sign Up
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
