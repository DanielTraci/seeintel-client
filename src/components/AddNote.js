import React, { Component } from 'react'

export default class AddNote extends Component {
    
    render() {
        const {onAdd} = this.props
        return (
            <div>
                <h3>Add notes to keep track of things</h3>
                <form onSubmit={onAdd}>
                    <textarea type="text" name="myNote" />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}
