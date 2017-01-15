import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from '../../containers/AppBar';
import { RaisedButton, FloatingActionButton } from 'material-ui';
import { Link } from 'react-router';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Post from './Post';
import * as BlogActions from '../../redux/modules/blogposts';

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
  render() {
    const { history } = this.context;
    const { blogposts, users, dispatch } = this.props;
    const actions = bindActionCreators(BlogActions, dispatch);
    const styles = this.getStyles();

    return (
        <AppBar>
        <RaisedButton label="CONFIRM" primary={true} style={style} containerElement={confirmLink}/>            
          {blogposts.map((post, i) =>
              <div>
                  <Post key={i}
                        post={post}
                        user={users.filter(user => user.id === post.user)[0]}
                        actions={actions}/>
                  <RaisedButton name="btn1" label="order" primary={true} style={style} />
              </div>
          )}
        </AppBar>
    );
  }
}

export default connect(state => ({
  blogposts: state.blogposts,
  users: state.users
}))(BlogApp);
