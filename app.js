class App extends React.Component {
    state = {

        historique: [
        { nom: "", message: ""}]
        
        }
    
    changeNom = (event) => {
        this.setState({
           nom: event.target.value,
           
        })
    }
    changeMessage = (event) => {
        this.setState({
            
            message: event.target.value 
            })    
    }

    keepHistory = (event) => {
        event.preventDefault();

        
        let nouvelHistorique = [...this.state.historique, this.state.nom, this.state.message]

        this.setState({
            historique: nouvelHistorique
        })
    }

    render() {
        return (
            <div className="app">
                

                

                

                <form className="form">
                    <label htmlFor="searchInput">name</label>
                    
                    <input type="text" id="searchInput" 
                        onChange={this.changeNom}
                        value={this.state.nom} />

                    <label htmlFor="searchInput">message</label>   

                    <input type="text" id="searchInput" 
                        onChange={this.changeMessage}
                        value={this.state.message} />

                    <input onClick={this.keepHistory}
                    type="submit" value="Comment"/>
                </form>
            </div>
        )
    }
}




ReactDOM.render(<App/>, document.querySelector('#app'));