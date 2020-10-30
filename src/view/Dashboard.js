import * as React from "react";
import { Card, CardContent, CardHeader, Grid,Container, Typography, withStyles } from '@material-ui/core';

import { Title } from 'react-admin';

const style = {
    root : {
        marginTop : 20
    }
}

class dashboard extends React.Component {

    constructor(prop){
        console.log("constructor")
        super(prop)
        this.state = { projects: []}
                
    }
    
    componentDidMount(){
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
                this.setState({
                    projects: response
                })
            })
            .catch(err => console.log(JSON.stringify(err)))
    }
    
    render(){
        const { classes } = this.props
        return (
    <Container className={classes.root}>
        <Grid container spacing={2} justify="center" alignItems="flex-start" direction="row">
            {this.state.projects.map(p => {
                return (
                <Grid key={p.name} item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{p.name}</Typography>
                            <Typography variant="body2">{p.description}</Typography>
                        </CardContent>                        
                    </Card>
                </Grid>)
            })}
        </Grid>
    </Container> 
    )}

}
export default withStyles(style)(dashboard);            
