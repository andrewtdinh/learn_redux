import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../action/actionCreators';
import Main from './Main';

function mapStateToProps(state){
  return {
    posts: state.props,
    comments: state.comments
  }
}


const App = connect(mapStateToProps, mapDispatchToProps);
