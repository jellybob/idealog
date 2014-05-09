# IdeaLog

At the moment, just a prototype for React/Flux hacking.

## Getting Started

This assumes you've got [direnv](http://direnv.net) installed. If not, you'll need to
add `node_modules/.bin` to your path, and source `.env` into your shell. Direnv is
worth it though.

  npm install
  nf start

That'll start an HTTP server, Browserify, and Sass, all configured to pick up any changes
you make in `src/` (TODO: Add support for syncing static assets as well)

## Deploying

Everything should just work on Heroku:

  heroku create
  git push heroku master
  heroku open
