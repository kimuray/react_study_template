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

  render() {
    return (
      <div>
        <h1>アカウント入力</h1>
        <Input inputFunc={(value) => this.setEmail(value)} />
        <Input inputFunc={(value) => this.setPassword(value)}/>
        <Button label="クリック" onClick={() => console.log('test')} />
      </div>
    )
  }
}
