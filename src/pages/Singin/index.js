import React, {Component} from 'react'
import { Link } from 'react-router-dom'
// import './styles.css'

class Singin extends Component {
  state = {
    email: '',
    password: '',
    confirmPass: '',
    error: ''
  }
  render(){
    const {email, password, error} = this.state
    return(
      <div className="login-container">
        <div>
          <h1>Registrar</h1>
          <p className="error"
          style={{visibility: error ? '':'hidden'}}
          >{error}
          </p>
          <label>Email</label>
           <input
            type='email'
            placeholder='Endereço de e-mail'
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label>Senha</label>
          <input
            type='password'
            placeholder='Senha'
            onChange={e => this.setState({ password: e.target.value })}
          />
           <label>Confirmar Senha</label>
          <input
            type='password'
            placeholder='Senha'
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type='submit'>REGISTRAR</button>
          <hr />
          <Link to='/login'>Voltar</Link>
        </div>
      </div>
    )
  }
}

export default Singin