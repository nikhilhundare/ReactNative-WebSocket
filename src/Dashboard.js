import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Dropdown } from 'react-bulma-components';
import './App.css';
import OBGrid from './OBGrid';
import actions from './actions/appAction';

class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {levelValue: '0'};

    this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.props.actions.initWebsocket(this.state.levelValue);
    }
    handleChange(event) {
        this.setState({levelValue:event});
        if(event !== '0') {
            this.props.actions.initWebsocket(this.state.levelValue);
        }
        
    }
    componentDidUpdate(prevProps){
        
    }
  
    render() {
      return (
          <div>
            <div className="DB-selectContainer">
                <Dropdown
                    style={{
                        paddingLeft: 0
                    }}
                    value={this.state.levelValue}
                    onChange={this.handleChange}
                    color="info"
                    >
                    <Dropdown.Item value="0" >
                    Pick your level
                </Dropdown.Item>
                    <Dropdown.Item value="20" >
                       20
                    </Dropdown.Item>
                    <Dropdown.Item value="500">
                        500
                    </Dropdown.Item>
                    <Dropdown.Item value="1000">
                        1000
                    </Dropdown.Item>
                    </Dropdown>
            </div>
            <div className="App-gridContainer">
                <OBGrid/>
            </div>
          </div>
        
      );
    }
  }
  const mapStateToProps = state => (state);
  const mapDispatchToProps = dispatch => ({
    actions: {
        initWebsocket: (levelValue) => dispatch(actions.initWebsocketsChannel(levelValue)),
    },
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);