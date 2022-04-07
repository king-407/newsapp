import React, { Component } from 'react'
import loading from './loading.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div align="center" className="my-3">
                <img src={loading} alt="loading" />
            </div>
        )
    }
}
