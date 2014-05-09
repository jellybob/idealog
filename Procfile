web: ./node_modules/.bin/http-server build -p$PORT -c$HTTP_TTL
browserify: ./node_modules/.bin/watchify $BROWSERIFY_OPTIONS -v
sass: ./node_modules/.bin/sass-cli $SASS_OPTIONS -w src/css -w vendor
imgsync: ./node_modules/.bin/watchy -w src/img -- "rsync -avz --delete src/img/ build/img/ > /dev/null"
htmlsync: ./node_modules/.bin/watchy -w src/index.html -- "cp src/index.html build/index.html"
