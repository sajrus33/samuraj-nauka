const Peer = require("simple-peer");
// const socket = io();
// console.log(socket);
const video = document.querySelector("video");
const client = {};

// get stream
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then(stream => {
    video.srcObject = stream;
    video.play();

    const initPeer = () => {
      let peer = new Peer({
        initiator: type == "init" ? true : false,
        stream: stream,
        trickle: trickle
      });
      peer.on("stream", stream => {
        CreateVideo(stream);
      });
    };
  })
  .catch(err => document.write(err));
