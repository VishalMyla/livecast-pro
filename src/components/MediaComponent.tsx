// components/MediaComponent.tsx
"use client"; // Ensure this is a client-side component

import { useState } from "react";

const MediaComponent = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

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

  return (
    <div>
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
