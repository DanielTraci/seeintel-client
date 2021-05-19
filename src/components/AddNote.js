import React, { Component } from 'react'

export default class AddNote extends Component {
    
    render() {
        const {onAdd, domainId} = this.props
        return (
            <div>
                <h3>Add notes to keep track of things</h3>
                <form onSubmit={(event) => {onAdd(event, domainId)}}>
                    <textarea type="text" name="myNote" />
                    <div>
                    <button>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}
