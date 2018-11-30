FROM ubuntu:xenial

RUN apt-get update -y && apt-get install -y git python3 && cd ~

RUN git clone https://github.com/kyauaa/DockerStudy.git

CMD ["/usr/bin/python3", "/DockerStudy/helloworld.py"]
