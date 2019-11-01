import React from 'react'
import axios from 'axios';


class SoccerClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/api/players")
            .then(response => {
                console.log(response);
                this.setState({data: response.data});
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>

            </div>
        )
    }

}

export default SoccerClassComponent;