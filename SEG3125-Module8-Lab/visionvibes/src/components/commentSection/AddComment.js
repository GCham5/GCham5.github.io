import React, { Component } from 'react'

class AddComment extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state);
        this.setState({
            content: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new comment</label>
                    <input type="text" onChange={this.handleChange}  value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddComment