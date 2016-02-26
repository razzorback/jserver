FROM evrythng/nodejs

ENV APP_DIR=/opt/app

ADD . $APP_DIR

RUN cd $APP_DIR && npm i

CMD cd $APP_DIR && npm start 
