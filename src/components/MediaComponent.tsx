// components/MediaComponent.tsx
"use client"; // Ensure this is a client-side component

import { useState , useRef} from "react";
import { useSocket } from "@/context/SocketContext";



const MediaComponent = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const socket = useSocket(); 
  const getMedia = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(mediaStream);
      setMessage("Media stream acquired");
    } catch (e) {
      setError("Failed to get media stream");
    }
  };

  const deleteAllMedia = () => {
    if (stream) {
      // Stop all video tracks
      const videoTracks = stream.getVideoTracks();
      videoTracks.forEach((track) => track.stop());

      // Stop all audio tracks
      const audioTracks = stream.getAudioTracks();
      audioTracks.forEach((track) => track.stop());

      // Clear the media stream
      setStream(null);
      setMessage("All media tracks removed");
    } else {
      setMessage("No media is present");
    }
  };

 

  const toggleAudio = (enable: boolean) => {
    if (stream) {
      stream.getAudioTracks().forEach((track) => {
        track.enabled = enable;
      });
      setMessage(enable ? "Audio enabled" : "Audio disabled");
    } else {
      setMessage("No media is present");
    }
  };


  const sendMedia = () => {
    if (!socket) {
      setMessage("Socket is not connected. Unable to send data.");
      return;
    }

    if (stream) {
      const mediaRecorder = new MediaRecorder(stream, {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: "video/webm", // Specify the format
      });

      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          console.log('Binary Stream Available', event.data);
          if (socket.connected) {
            // Emit the binary data to the server using the socket
            socket.emit('binarystream', event.data);
            setMessage("Data sent to server");
          } else {
            setMessage("Socket is disconnected. Unable to send data.");
          }
        }
      };

      mediaRecorder.start(1000);  // Collect data in intervals (every 1 second)
      setMessage("Recording started and binary stream is being sent");
    } else {
      setMessage("No media available to send");
    }
  };


  return (
    <div className="bg-black text-white">
      <button onClick={getMedia} style={{ marginRight: "10px" }}>
        Get Media
      </button>
      <button onClick={deleteAllMedia} style={{ marginRight: "10px" }}>
        Delete All Media
      </button>
    
      <button onClick={() => toggleAudio(true)} style={{ marginRight: "10px" }}>
        Enable Audio
      </button>
      <button onClick={() => toggleAudio(false)}>
        Disable Audio
      </button>
      <button onClick={sendMedia} style={{ marginRight: "10px" }}>
        Send Media
      </button>

      {/* Conditionally show the video if a stream exists */}
      {stream && (
        <div style={{ marginTop: "20px" }}>
          <video
            style={{ width: "500px" }}
            autoPlay
            ref={(videoElement) => {
              if (videoElement && stream) {
                videoElement.srcObject = stream;
              }
            }}
          />
        </div>
      )}

      {/* Display message or error if present */}
      {message && <p>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default MediaComponent;
