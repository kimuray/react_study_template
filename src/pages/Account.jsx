import React from 'react'
import {Button} from '../components/form/Button'
import {Input} from '../components/form/Input'

export class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  setEmail(email) {
    this.setState({email: email})
  }

  setPassword(password) {
    this.setState({password: password})
  }

  sendInput() {
    alert(`
      email: ${this.state.email}, passwrod: ${this.state.password}
    `)
  }

  render() {
    return (
      <div>
        <h1>アカウント入力</h1>
        <Input onChange={(value) => this.setEmail(value)} />
        <Input onChange={(value) => this.setPassword(value)}/>
        <Button label="クリック" onClick={() => this.sendInput()} />
      </div>
    )
  }
}
