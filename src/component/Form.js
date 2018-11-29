import React from 'react'

class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            isGoing: true,
            numberOfGuests: 2,
            select : ''
        }

    }

    changeData(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitData(event) {
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.onSubmitData}>

                <label>Name : </label>
                <input type="text" value={this.state.name} name="name" onChange={e => this.changeData(e)} id="A"/>
                <hr/>
                <label htmlFor="">Select Data: </label>
                <select value={this.state.select} onChange={e => this.changeData(e)}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <hr/>
                <label>
                    Is going :
                </label>
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={e => this.changeData(e)}/>

                <br/>
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={e => this.changeData(e)}/>
                </label>
                <hr/>
                <label> Address : </label>
                <textarea value={this.state.address} name="address" onChange={e => this.changeData(e)}
                          id="B"></textarea>
                <hr/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }

}

export default FormDemo