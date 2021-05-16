import React, { Component } from 'react'

export default class AddNote extends Component {
    
    render() {
        const {onAdd} = this.props
        return (
            <div>
                <h1>.</h1>
                <h1>.</h1>
                <h1>Add notes to keep track of things</h1>
                <form onSubmit={onAdd}>
                    <input type="text" name="myNote" />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}
