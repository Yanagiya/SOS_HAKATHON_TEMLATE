import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from '../../containers/AppBar';
import { RaisedButton, FloatingActionButton } from 'material-ui';
import { Link } from 'react-router';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Post from './Post';
import * as BlogActions from '../../redux/modules/blogposts';
import menuInfos from './urls';

let confirmLink = <Link to="/confirm" />;

const style = {
		  margin: 30,
};

class BlogApp extends Component {
  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  getStyles() {
    return {
      addContent: {
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 100
      }
    };
  }

  orderProcess(e) {
    console.log("## onclick ##");
    console.log(e);
    console.log("#############");
  }

  renderImg() {
    var rows = [];
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    for ( var i = 0; i < menuInfos.length; i++ ) {
      rows.push(
        <div>
          <img src={menuInfos[i].url} />
          <RaisedButton name="btn" label="order" primary={true} style={style} onClick={this.orderProcess.bind(this)} />
          <RaisedButton name="btn" label="cancel" secondary={true} style={style} disabled="true" onClick={this.orderProcess.bind(this)} />
        </div>
      );
    }
    return rows;
  }

  render() {
    const { history } = this.context;
    const { blogposts, users, dispatch } = this.props;
    const actions = bindActionCreators(BlogActions, dispatch);
    const styles = this.getStyles();
    const imgParts = this.renderImg();

    return (
        <AppBar>
          <RaisedButton label="CONFIRM" primary={true} style={style} containerElement={confirmLink}/>            
          <div>{imgParts}</div>
        </AppBar>
    );
  }
}

export default connect(state => ({
  blogposts: state.blogposts,
  users: state.users
}))(BlogApp);
