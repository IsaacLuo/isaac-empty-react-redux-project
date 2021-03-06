// react-redux-router
import * as React from 'react';
import { IStoreState } from './store'
import { Dispatch } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Route} from 'react-router'

// style
import './App.css';

// other tools
import styled from 'styled-components'

// components
import ActionPanel from './ActionPanel';


interface IProps {
  message: string,  
}

interface IState {

}

const MyPanel = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);
  }

  public render() {
    const {message} = this.props;
    return (
      <div className="App">
        <MyPanel>
          <Route path='/' exact={true} component={ActionPanel} />
          <div>{message}</div>
        </MyPanel>
      </div>
    );
  }
}


const mapStateToProps = (state :IStoreState) => ({
  message: state.message,
})

const mapDispatchToProps = (dispatch :Dispatch) => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))