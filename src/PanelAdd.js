import React from 'react'


class PanelAdd extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            title : '',
            image : '',
            rating : 1
        };
        this.cancelAction = this.cancelAction.bind(this);
        this.createItem = this.createItem.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    cancelAction(e){
       
    }

    onChangeTitle(e){
        console.log( e.target.value)
        this.setState({title : e.target.value})
    }
    onChangeImage(e){
        console.log( e.target.value)
        this.setState({image : e.target.value})
    }
    onChangeRating(e){
        console.log( e.target.value)
        const rating = parseInt(e.target.value)
        this.setState({rating : rating})
    }

    createItem(e){
        e.preventDefault();
  
    }

    
    onSubmit = (e)=>{
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        this.props.onadd({
            title: title,
            image:image,
            rating:rating
        })

        this.props.oncancel()
    }

    render() {
        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                        <label>Título del libro</label><br />
                        <input type="text" name="title" className="input" onChange={this.onChangeTitle} />
                        </p>
    
                        <p>
                        <label>Nombre de imagen</label><br />
                        <input type="text" name="image" className="input" onChange={this.onChangeImage} />
                        </p>
    
                        <p>
                        <label>Calificación</label><br />
                        <select onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button className="button btn-normal" onClick={this.props.oncancel}>Cancelar</button>
                    </form>
                </div>
            </div>
    
        );
    }
    
}


export default PanelAdd;