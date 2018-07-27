#! /bin/bash

CMD(){
    echo "[RELEASE INFO] ===> " "$@"
    eval "$@"
}

CMD node_modules/.bin/tsc &&\
CMD npm test || exit 1

CMD git add dist/*

CMD git commit -m "'release'" &&\
CMD git push origin master
