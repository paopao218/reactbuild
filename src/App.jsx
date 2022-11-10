import React, { Component } from 'react'
import Style from './css/style'
export default class App extends Component {
  render() {
    return (
      <div>
        <h3>App组件</h3>
        <div className={Style.special}>
          <label htmlFor="userName">用户名</label>
        <input type="text" id='userName' /><br />
        <label htmlFor="password">密码</label>
        <input type="text" id='password' />
        </div>
      </div>
    )
  }
}
