import React from 'react';
import { Chart } from 'react-google-charts';
import Grid from 'material-ui/Grid';

class Charts extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        console.log('CHATS', this.props)
        return (
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Chart
                    chartType="ScatterChart"
                    data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
                    options={{}}
                    graph_id="ScatterChart"
                    width="100%"
                    
                    legend_toggle
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Chart
                    chartType="GeoChart"
                    data={this.props.data}
                    options={{}}
                    graph_id="ScatterChart2"
                    width="100%"
                    legend_toggle
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Chart
                    chartType="ScatterChart"
                    data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
                    options={{}}
                    graph_id="ScatterChart3"
                    width="100%"
                    legend_toggle
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Chart
                    chartType="ScatterChart"
                    data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
                    options={{}}
                    graph_id="ScatterChart4"
                    width="100%"
                    legend_toggle
                    />
                </Grid>
            </Grid>
        )
    }
}

export default Charts;