import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

export const Login = () => {

    const creds = {
        login: 'admin',
        password: 'admin123'
    }


    const [isLogged, setIslogged] = useState(false)

    const [inputValues, setInputValues] = useState({
        login: '',
        password: ''
    })

    const onLogin = () => {
        if (inputValues.login === creds.login && inputValues.password === creds.password) {
            setIslogged(true)
        }
    }

    return isLogged ?
        <Redirect to="/todos" />
        : <div style={styles.login}>
            <h1>Авторизуйтесь</h1>
            <input
                value={inputValues.login}
                style={styles.input}
                type="text"
                onChange={(e) => {
                    setInputValues({ ...inputValues, login: e.target.value })
                }} />
            <input
                value={inputValues.password}
                style={styles.input}
                type="text"
                onChange={(e) => {
                    setInputValues({ ...inputValues, password: e.target.value })
                }} />
            <button onClick={onLogin}>Войти</button>
        </div>
}

const styles = {
    login: {
        width: "1000px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    input: {
        margin: "10px 0"
    }
}