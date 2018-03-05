import React from 'react';

import Grid from 'material-ui/Grid';
// import {DatePickers} from 'material-ui';

class Controls extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render () {
        let values = this.props.values;
        return (
            <form>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <div>
                            <select name="region" value={values.region} onChange={this.props.handleChange}>
                                <option value="Germany">Germany</option>
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="Brazil">Brazil</option>
                                <option value="RU">RU</option>
                                <option value="all">ALL</option> 
                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default Controls;