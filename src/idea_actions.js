var IdeaActions = {
  addIdea: function (title) {
    this.dispatch("ADD_IDEA", title);
  },

  deleteIdea: function (idea) {
    this.dispatch("DELETE_IDEA", idea);
  }
}

module.exports = IdeaActions;
