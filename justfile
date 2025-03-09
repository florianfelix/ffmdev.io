dev:
    bun run watch

commit msg:
    git add . && git commit -m "{{msg}}"

build:
    bun run prod

publish: build
    git add . && git commit -m "puplish" && git push
