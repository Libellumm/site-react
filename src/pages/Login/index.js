import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../service/fakeApi'
import './styles.css'

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleLogin = () => {
        const { email, password } = this.state
        const user = getUser(email, password)
        if(!user.error){
            this.setState({ error: user.error })
        }else{
            window.location.href = '/dashboard'
        }

    }
    handleChange = e => {
        const { value, id } = e.target
        this.setState({ [id]: value })
    }
    render() {
        const { email, password, error } = this.state
        return (
            <div className="login-container">
                <div>
                    <h1>Logar</h1>
                    <p className="error"
                        style={{ visibility: error ? '' : 'hidden' }}
                    >{error}
                    </p>
                    <label>Email</label>
                    <input
                        id='email'
                        type='email'
                        placeholder='Endereço de e-mail'
                        value={this.email}
                        onChange={this.handleChange}
                    />
                    <label>Senha</label>
                    <input
                        id='password'
                        type='password'
                        placeholder='Senha'
                        value={this.password    }
                        onChange={this.handleChange}
                    />
                    <button type='button' onClick={this.handleLogin}>ENTRAR</button>
                    <hr />
                    <Link to='/singin'>Ainda não tenho cadastro</Link>
                </div>
            </div>
        )
    }
}

export default Login