import React from 'react'

class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: '',
            address: '',
            isGoing: true,
            numberOfGuests: '',
            select :'coconut'
        }

    }

    changeData(e) {

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    onSubmitData(event) {

        console.log('name : '+this.state.name1);
        console.log('address : '+this.state.address);
        console.log('isGoing : '+this.state.isGoing);
        console.log('Guest : '+this.state.numberOfGuests);
        console.log('Flavour : '+this.state.select);
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.onSubmitData.bind(this)}>

                <label>Name : </label>
                <input type="text" value={this.state.name} name="name1" onChange={e => this.changeData(e)} id="A"/>
                <hr/>
                <label htmlFor="">Select Data: </label>
                <select value={this.state.select} name="select" onChange={e => this.changeData(e)}>
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
                          id="B">Address</textarea>
                <hr/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }

}


export default FormDemo