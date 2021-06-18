import React from 'react'



class Search extends React.Component {

    constructor(props) {
        super(props)
    }

    onChangeEvent = e =>{
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(query)
    }


    render() {
        return (
            <div>
                <input type="text" onChange = {this.onChangeEvent}/>
            </div>
        )
    }

    
}

export default Search