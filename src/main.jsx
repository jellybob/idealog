/** @jsx React.DOM */
var React = require('react'),
    Fluxxor = require('fluxxor'),
    IdeaStore = require('./idea_store'),
    IdeaActions = require('./idea_actions'),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin,
    Idea = require('./idea.jsx');

var stores = { 
  IdeaStore: new IdeaStore() 
};

var flux = new Fluxxor.Flux(stores, IdeaActions);

window.React = React; // Trigger React dev tools starting.
window.flux = flux;

var Application = React.createClass({
  mixins: [ FluxMixin, StoreWatchMixin("IdeaStore") ],
  
  getStateFromFlux: function () {
    var flux = this.getFlux();
    
    return flux.store("IdeaStore").getState();
  },

  render: function () {
    return (
      <div>
        <ul>
          { this.state.ideas.map(function (idea, i) {
            return <Idea key={i} idea={idea} />;
          })}
        </ul>
        <form onSubmit={this.onFormSubmit}>
          <input ref="title" type="text" size="30" placeholder="Add an Idea" />
          <input type="submit" value="Add Idea" />
        </form>
      </div>
    );
  },

  onFormSubmit: function (e) {
    e.preventDefault();

    var node = this.refs.title.getDOMNode();
    this.getFlux().actions.addIdea({ idea: { title: node.value } });
    node.value = '';
  }
});

React.renderComponent(<Application flux={flux} />, document.getElementById('app'));
