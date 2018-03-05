import React from 'react';
import Controls from './Controls';
import Charts from './Charts';

class Dashboard extends React.Component {

    

    constructor() {
        super();
        this.data = [
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
          ['all', 900]
        ];
        this.state = {
            filter: {
                region: 'Germany'
            },
            data: this.data
        }


        this.handleChange = this.handleChange.bind(this);
    }

     handleChange(event) {
        let state = Object.assign({}, this.state);
        state.filter[event.target.name] = event.target.value;
        state.data = this.data.filter((item, key) => {
            console.log(item, key, item[0], state.filter.region)
            return key === 0 || item[0] === state.filter.region || state.filter.region === 'all';
        });
        this.setState(state);
    }

    render () {
        return (
            <div>
                <Controls handleChange={this.handleChange} values={this.state}></Controls>
                <Charts controls={this.state} data={this.state.data}></Charts>
            </div>
        )
    }
}

export default Dashboard;