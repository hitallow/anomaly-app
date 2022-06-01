FROM node:12

RUN mkdir -p /usr/project/anomaly_app

COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh

WORKDIR /usr/project/anomaly_app

RUN chmod 777 /usr/local/bin/entrypoint.sh \
  && ln -s /usr/local/bin/entrypoint.sh /

RUN apt update && apt install stress -y
# RUN add-apt-repository ppa:ferramroberto/lffl
# RUN apt update && apt install stress-ng
# RUN apt install stress


ENTRYPOINT [ "entrypoint.sh" ]