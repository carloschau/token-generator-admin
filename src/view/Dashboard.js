import * as React from "react";
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';

import { Title } from 'react-admin';

class dashboard extends React.Component {

    constructor(prop){
        console.log("constructor")
        super(prop)
        this.state = { projects: []}
        
        
    }
    
    componentDidMount(){
        console.log("componentDidMount");
        const authToken = localStorage.getItem('auth')
        const request  = new Request(process.env.REACT_APP_API_URL + '/projects', {
            method: 'GET',
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}` 
            })
        });
        fetch(request)
            .then(response => response.json())
            .then(response => {
                console.log("state update")
                this.setState({
                    projects: response
                })
            })
    }

    render(){
        console.log("Render dashboard");
        return (<Grid container spacing={2} justify="center" alignItems="flex-start" direction="row">
            {this.state.projects.map(p => {
                return (<Card item><CardContent>{p.name}</CardContent></Card>)
            })}
        </Grid> )

    }

}
export default dashboard;            
