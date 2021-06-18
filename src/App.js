import React from 'react'
import './App.css';
import Menu from './Menu'
import List from './List'

//https://www.youtube.com/watch?v=eXSP524SBgw

class App extends  React.Component  {


    constructor(props) {
        super(props);

        this.state = {
          
          books:[
                {id:0, rating: 4, title: 'Harry Potter y el cáliz de fuego', image: 'libro01.jpg'},
                {id:1, rating: 3, title: 'The shining', image: 'libro02.jpg'},
                {id:2, rating: 5, title: 'Código Da Vinci', image: 'libro03.jpg'},
                {id:3, rating: 5, title: 'El principito', image: 'libro04.jpg'},
                {id:4, rating: 5, title: 'Sobrenatural', image: 'libro05.jpg'}
          ],
          
          copyBooks:[]
        
        };

    }


    componentDidMount (){
        this.initBooks()
    }

    initBooks = () => {
        this.setState((state, props) =>({
            copyBooks : [...state.books]
        }));
    }


    onAdd = (item)=>{
      console.log(item)
      let temp = [...this.state.books];
      const id = temp[temp.length -1 ].id + 1
      item['id'] = id
       // this.setState()
       temp.push(item)

       this.setState({books: [...temp]})
       
       this.initBooks();
    }

    onSearch = (query)=> {
        
        if (query === '') {
            this.initBooks()
        } else {
            const temp = [...this.state.books]
            let res = [];

            temp.forEach(item => {
                  if(item.title.toLowerCase().indexOf(query) > -1){
                      res.push(item);
                  }
            })
            this.setState({copyBooks: [...res]});
        }


    }

    onUpdaterating= (item)=>{

      var temp =[...this.state.books];
      const index = temp.findIndex(x => x.id ===item.id)

      temp[index].title = item.title;
      temp[index].image = item.image;
      temp[index].rating = item.rating;

      this.setState({books: [...temp]});
      this.initBooks();

    }


    render() {
          return (
            <div className="App">
               <h1>prueba movie</h1>
                <Menu 
                    title="PELICULAS"
                    onadd={this.onAdd}
                    onsearch = {this.onSearch}
                />
        
                <List 
                    items = { this.state.copyBooks }
                    onupdaterating ={this.onUpdaterating}
                />


                
        
            </div>
          );
    }

    
}

export default App;
