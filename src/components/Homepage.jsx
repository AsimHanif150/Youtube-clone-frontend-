import React from "react";
import "./Homepage.css";
import VideoCard from "./Videocard"; // <-- important

function Homepage() {
  const options = [
    "All", "T20 Cricket", "Music", "Live", "Gaming",
    "Nasheed", "Podcasts", "Vlog", "Newspaper", "Movies",
    "Technology", "Travel", "Comedy", "Sports",
  ];

  const videos = [
    {
      title: "Watch Mr Robot ",
      thumbnail:
            "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"

    },
    {
      title: "Sample Video 1",
      thumbnail:
      "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"
    },
    {
      title: "Sample Video 1",
      thumbnail:
      "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"
    },
    {
      title: "Sample Video 1",
      thumbnail:
      "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"
    },
    {
      title: "Sample Video 1",
      thumbnail:
      "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"
    },
    {
      title: "Sample Video 1",
      thumbnail:
      "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"
    },
    {
      title: "Sample Video 1",
      thumbnail:
      "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"
    },
    {
      title: "Sample Video 1",
      thumbnail:
      "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"
    },
    {
      title: "Sample Video 1",
      thumbnail:
      "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"
    },
    {
      title: "Sample Video 1",
      thumbnail:
      "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"
    },
    {
      title: "Sample Video 1",
      thumbnail:
      "https://external-preview.redd.it/-0A_K-h5yPVRp1gZgh9Ys29qEvot0a_Z0EPvEw5XK9Y.jpg?auto=webp&s=a1406022ce3eee28b03ef3a38f76c1fdf753bb8a"
    },
  ];

  return (
    <>
      {/* Category Bar */}
      <div className="Homepage-options">
        {options.map((item, index) => (
          <div key={index} className="Homepage-option">
            {item}
          </div>
        ))}
      </div>

      {/* Video Grid */}
      <div className="home_mainPage">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            thumbnail={video.thumbnail}
            title={video.title}
            channel="Tech Academy"
            channelImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNcEAuF6dw1m0VUAdotuIcBngjckGXGcLpvMrjxz0w8h0kgnHUIxcCaxiSrHK1PbAannc&usqp=CAU"
            views="500K views"
            time="2 months ago"
          />
        ))}
      </div>
    </>
  );
}

export default Homepage;
