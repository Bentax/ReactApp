// TypeError: cannot read properties of null (reading 'getTracks')

import React, { useState, useEffect, useRef } from "react";

const VideoChat = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    const startLocalStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      setLocalStream(stream);
      localVideoRef.current.srcObject = stream;
    };
    startLocalStream();
  }, []);

  useEffect(() => {
    const startPeerConnection = async () => {
      const peerConnection = new RTCPeerConnection();
      localStream
        .getTracks()
        .forEach((track) => peerConnection.addTrack(track, localStream));

      peerConnection.ontrack = (event) => {
        setRemoteStream(event.streams[0]);
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      // send the offer to the other user using a signaling server
      // the signaling server is responsible for exchanging the offer and answer between the two users
    };
    startPeerConnection();
  }, [localStream]);

  return (
    <div>
      <video ref={localVideoRef} autoPlay muted></video>
      <video ref={remoteVideoRef} autoPlay></video>
    </div>
  );
};

export default VideoChat;
