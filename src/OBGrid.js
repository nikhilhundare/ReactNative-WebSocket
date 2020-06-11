import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {GRID_TITLE} from './Constants';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
class OBGrid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [{
          headerName: "Symbol", field: "symbol"
        }, {
          headerName: "Asks", field: "asks"
        }, {
          headerName: "Bids", field: "bids"
        }],
        rowData: [],
        lastUpdateId:0,
      }
    }
    componentDidUpdate(prevProps,stateProps){
      if(prevProps.response && prevProps.response.lastUpdateId !== stateProps.lastUpdateId){
        let newRowData = this.state.rowData.concat({
            symbol:prevProps.response.symbol,
            asks: prevProps.response.asks[0][1],
            bids: prevProps.response.bids[0][1],
        });
        this.setState({ rowData: newRowData, lastUpdateId: prevProps.response.lastUpdateId })
      }
    }
  
    render() {
      return (
        <div
          className="ag-theme-alpine"
          style={{
          height: '250px',
          width: '600px',
        padding: 20 }}
        >
          <div className="OBGrid-title">
            {GRID_TITLE}
          </div>
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
          </AgGridReact>
        </div>
      );
    }
  }
  const mapStateToProps = state => (state);
  
  export default connect(mapStateToProps)(OBGrid);