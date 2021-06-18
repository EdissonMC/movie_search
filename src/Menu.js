import React from 'react'
import Search from './Search'
import './Menu.css'
import PanelAdd from './PanelAdd'

class Menu extends React.Component {

    constructor(props) {
        super(props);

        
        this.state = {
            newItemPanel:false
        }

        //this.add = this.add.bind(this);
    }   

    add = ()=> {
        this.setState({
            newItemPanel: true
        });
        console.log("adding")
    }

    onCancel = ()=>{
       
        this.setState({
            newItemPanel: false
        });
        console.log("hidding")
    }

    render() {
        
        return (
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>
    
                    <div className="search">
                        <Search onsearch = {this.props.onsearch} />
                    </div>
    
    
                    <div className="actions">
                        <button onClick = {this.add} className="button btn-blue">Add Book</button>
                    </div>
                    {
                        (this.state.newItemPanel) ?
                            <PanelAdd 
                                oncancel = {this.onCancel}
                                onadd= {this.props.onadd}
                            />
                            
                        :
                        ''
                    }
                </div>
            </div>
        );
    }// End render()


}

export default Menu