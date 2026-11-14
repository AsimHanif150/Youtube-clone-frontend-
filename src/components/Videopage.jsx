import React from "react";
import './Videopage.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function Videopage() {
  return (
    <div className='video'>

      <div className="videopostsection">
        <div className="video-youtube">
          <video width="400" controls autoPlay className="video_youtube_video">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="About_videosection">

          <div className="Video_Title">Animated Cartoon</div>

          <div className="Video_profilesection">

            <div className="Video_profilesection_left">
              <div className="Video_profilesection_left_img">
                <img
                  className="Video_profilesection_left_image"
                  src="https://picsum.photos/100/100"
                />
              </div>

              <div className="youtubeVideo_subsview">
                <div className="youtube_profileName">User 1</div>
                <div className="youtube_profileSubs">2.2K subscribers</div>
              </div>

              <div className="Subscribe-Btn">Subscribe</div>
            </div>

            <div className="Video_profilesection_right">

              <div className="like-section">
                <FontAwesomeIcon icon={faThumbsUp} className="icon" />
                <div className="no_of_likes">32</div>
              </div>

              <div className="divider"></div>

              <div className="like-section">
                <FontAwesomeIcon icon={faThumbsDown} className="icon" />
                <div className="no_of_likes">0</div>
              </div>

            </div>

          </div>

        </div>

        <div className="youtubecommentsection">
            <div className="Commentsection-Title">4 comments</div>

        <div className="youtube_addcomment">
         <img className="youtube_addcomment_img" src="https://picsum.photos/40/40" />
            <div className="add_comment">
                <input type="text" className="add_commentinput" />
                <div className="cancel_comment">
                <div className="cancel">Cancel</div>
                <div className="comment">Comment</div>
                
                </div>
            </div>
        </div> 
        <div className="youtubeotherscomment">

          <div className="youtube_addcomment">
            <img className="youtube_addcomment_img" src="https://picsum.photos/40/40" />
            <div className="other_commentsection">
            <div className="other_commentsectionheader">
              <div className="other_commentname">User 2</div>
              <div className="other_commenttiming">1 years ago</div>
              </div>
              <div className="othercomment_text">
                This is a cool webapp project
              </div>
            </div>
          </div>
          <div className="youtube_addcomment">
            <img className="youtube_addcomment_img" src="https://picsum.photos/40/40" />
            <div className="other_commentsection">
            <div className="other_commentsectionheader">
              <div className="other_commentname">User 2</div>
              <div className="other_commenttiming">1 years ago</div>
              </div>
              <div className="othercomment_text">
                This is a cool webapp project
              </div>
            </div>
          </div>
          <div className="youtube_addcomment">
            <img className="youtube_addcomment_img" src="https://picsum.photos/40/40" />
            <div className="other_commentsection">
            <div className="other_commentsectionheader">
              <div className="other_commentname">User 2</div>
              <div className="other_commenttiming">1 years ago</div>
              </div>
              <div className="othercomment_text">
                This is a cool webapp project
              </div>
            </div>
          </div>
          
        </div>  
        </div>
      </div>

      <div className="videosuggestions">
        
        <div className="video_SuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/35WDg1zUmm1MUPdzjmnS8s/fb0f27a99b79747e54f87da53f2d8592/MrRobot_showtile.png.fb0f27a99b79747e54f87da53f2d8592.jpg?width=1200&height=630" className="youtube_thumnail_img"/>
          </div>
          <div className="video_suggestion_about">
            <div className="video_suggestion_about_title">T20 Final WOrld Cup PAK VS IND 2025</div>
            <div className="video_suggestion_about_profile">cricket 320</div>
            <div className="video_suggestion_about_profile">1.5 M views . 1 month ago</div>
          </div>
        </div>
        <div className="video_SuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/35WDg1zUmm1MUPdzjmnS8s/fb0f27a99b79747e54f87da53f2d8592/MrRobot_showtile.png.fb0f27a99b79747e54f87da53f2d8592.jpg?width=1200&height=630" className="youtube_thumnail_img"/>
          </div>
          <div className="video_suggestion_about">
            <div className="video_suggestion_about_title">T20 Final WOrld Cup PAK VS IND 2025</div>
            <div className="video_suggestion_about_profile">cricket 320</div>
            <div className="video_suggestion_about_profile">1.5 M views . 1 month ago</div>
          </div>
        </div>
        <div className="video_SuggestionsBlock">
          <div className="video_suggestion_thumbnail">
            <img src="https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/35WDg1zUmm1MUPdzjmnS8s/fb0f27a99b79747e54f87da53f2d8592/MrRobot_showtile.png.fb0f27a99b79747e54f87da53f2d8592.jpg?width=1200&height=630" className="youtube_thumnail_img"/>
          </div>
          <div className="video_suggestion_about">
            <div className="video_suggestion_about_title">T20 Final WOrld Cup PAK VS IND 2025</div>
            <div className="video_suggestion_about_profile">cricket 320</div>
            <div className="video_suggestion_about_profile">1.5 M views . 1 month ago</div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Videopage;
