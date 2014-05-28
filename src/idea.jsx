/** @jsx React.DOM */
var React = require('react'),
    Flux = require('fluxxor'),
    FluxChildMixin = Flux.FluxChildMixin;

var Idea = React.createClass({
  mixins: [ FluxChildMixin(React) ],
  
  render: function () {
    return (
      <li>{ this.props.idea.title } <a href="#" onClick={this.deleteIdea}>X</a></li>
    );
  },
  
  deleteIdea: function (e) {
    e.preventDefault();

    this.getFlux().actions.deleteIdea(this.props.idea);
  }
});

module.exports = Idea;
