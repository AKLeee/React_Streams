import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
import history from '../history';

// BrowserRouter will look up the router, if not found, not return 404, but index.html, that how create-react-app works
// HashRouter will always return index.html and ignore the router after # tag

// const PageOne = () => {
//   return <div>PageOne
//     {/* BAD!! as acher tag will request server and load index.html again and reload all app, old data/page is dumped
//     <a href="/pagetwo">Navigate to page two</a> */}
//     <Link to="/pagetwo">Navigate to page two</Link>
//   </div>
// };

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div>
          {/* with react-router, each component needs to be designed to work in isolation (fetch its own data) */}
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;