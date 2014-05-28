var Fluxxor = require('fluxxor');

var IdeaStore = Fluxxor.createStore({
  actions: {
    "ADD_IDEA": "onAddIdea",
    "DELETE_IDEA": "onDeleteIdea"
  },

  initialize: function () {
    this.ideas = [];
  },

  getState: function () {
    return {
      ideas: this.ideas
    }
  },

  onAddIdea: function (payload) {
    this.ideas.push(payload.idea);
    this.emit("change");
  },
  
  onDeleteIdea: function (payload) {
    this.ideas.splice(this.ideas.indexOf(payload), 1);
    this.emit("change");
  }
});

module.exports = IdeaStore;
