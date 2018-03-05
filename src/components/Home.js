import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import Dashboard from './dashboard/Dashboard';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Home extends React.Component {
    render () {
        return (
            <div>
            <Tabs>
                <Tab label="Dashboard" >
                <div>
                    <h2 style={styles.headline}>Tab Two</h2>
                    <Dashboard></Dashboard>
                </div>
                </Tab>
                <Tab
                label="onActive">
                <div>
                    <h2 style={styles.headline}>Tab Three</h2>
                    <p>
                    This is a third example tab.
                    </p>
                </div>
                </Tab>
            </Tabs>
            </div>
        )
    }
}

export default Home;