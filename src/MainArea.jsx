import React from 'react';
import './MainArea.css';
import Expand from './Expand';
import SkipLink from './SkipLink'; // Import the SkipLink component
import sound from './images/sound.png';

function MainArea() {
  return (
    <div>
      {/* Include SkipLink at the top of the page */}
      <SkipLink />

      {/* Main content starts here */}
      <main id="main-content" className="main-section">
        <h2>WaveTune Presents</h2>

        <div className="expand-container">
          <img src={sound} alt="Person listening to music" className="music-image1"/>
        </div>
       
        <div className="card-container1">
          <div className="title">
            <h3>Strategic Vision</h3>
          </div>
          <div className="column-1">
            <h4>Who Are We</h4>
          </div>
          <div className="column-2">
            <p>
              Frequency is an AI-driven music recommendation app designed to
              enhance focus, relaxation, or energy levels by analyzing tasks
              and correlating them with brainwave activity. The app customizes
              music playlists by aligning them with brainwave states, such as
              alpha waves for relaxation, beta waves for focus, and gamma waves
              for cognitive engagement.
            </p>
          </div>
        </div>

        <div className="card-container1">
          <div className="title">
            <h3>What We Provide</h3>
          </div>
          <div className="column-1">
            <h4>App Features</h4>
          </div>
          <div className="column-2">
            <p>
              Activity Detection | AI-powered auto-song play notifications to
              boost detected activities. Examples: Travel, Exercise, Sleep, and
              Study.
            </p>
          </div>
        </div>
            <Expand title="1. Classical Music">
                
                <p>
                Researchers have long claimed that listening to classical music can help people perform tasks more efficiently. 
                This theory, which has been dubbed "the Mozart effect," suggests that listening to classical composers can enhance brain 
                activity and act as a catalyst for improving health and well-being. Various studies have confirmed that listening to 
                classical music enhances one's ability to manipulate shapes and solve spatial puzzles.
                The absence of words in the music may be one factor, as songs that contain lyrics have been found to be a distraction when you're trying to focus. 
                Classical music is also known for being calming and relaxing. Some selections, like Beethoven's "Für Elise," seem to help students study longer and retain more information. </p>
                <p>Here are other few classical selections you can use to boost productivity while working:<br/>
                    Bach Classical Study Playlist<br/>
                    Classical Music for Studying: Mozart, Beethoven, Bach Study Music Playlist for Better Concentration<br/>
                    6-Hour Mozart Piano Classical Music Studying Playlist: Great Beautiful Long Pieces<br/>
                    Vivaldi's "Four Seasons"<br/>
                </p>
            </Expand>
            <Expand title="2. Nature Music">
                <p>Listening to the sounds of nature, like waves crashing or a babbling brook, has been shown to enhance cognitive function and concentration. 
                    Nature sounds work best when they're soothing sounds, such as flowing water or rainfall, 
                    while more jarring noises such as bird calls and animal noises can be distracting.
                    Researchers at Rensselaer Polytechnic Institute have discovered that natural sounds boost moods and focus. 
                    The study found employees were more productive and had more positive feelings when nature sounds were playing in the background while they worked. 
                    This may be because nature sounds helped mask harsher, more distracting noises, such as people talking or typing. 
                    Researchers also found that workers not only performed better on tasks, but calming nature sounds improved overall brain function. 
                </p>
                <p>Here are some selections to try:<br/>
                    Ocean waves and surf<br/> Thunderstorm sounds<br/>Rain falling<br/>Flowing water<br/>Water fountain<br/>
                </p>
            </Expand>

            <Expand title="3. Cinematic Music">
                <p>An intense film score can make you feel like you're doing something inspiring or important, even if you're just chipping away at your to-do list. 
                    A grandiose, epic soundtrack playing in the background may make even the most mundane tasks feel like you're changing the world, 
                    thus heightening your concentration and productivity.
                    Cinematic music scores can be empowering, lifting your spirits and brightening your mood. 
                    So, if you're feeling tired and drained, try listening to some epic cinematic music to give you that extra boost of motivation.
                </p>
                <p>Some great movie scores to try include: <br/> 
                       Inception <br/>The Social Network <br/>Lawrence of Arabia <br/>Amélie <br/>The Bourne Identity
                </p>
            </Expand>

            <Expand title="4. Video Game Music">
                <p>
                    It might seem strange, but listening to music composed for video games can 
                    be a great tool to help you focus. Every element of a video game is designed to create an enhanced gaming experience, and the music has been composed specifically to help you focus on your task without being distracted by a cacophony of sounds.
                    This music generally has no lyrics or human voices and is fairly fast paced to keep you moving forward. 
                    Many of these video games involve solving puzzles and dealing with intense situations, 
                    so you're subjecting yourself to simulated stressful challenges. Video games have invested a lot of 
                    resources into figuring out the perfect soundtrack that will keep a player focused and motivated.
                    Video game music is composed in a way that keeps you engaged as you evaluate, navigate and often fight your way through these make-believe worlds. These musical compositions may be just the thing to propel you onward and keep you working through your tasks and daily to-do list. 
                </p>
                <p>Here are some video game music selections to check out:
                <br/>Battlefield One <br/>Final Fantasy 7 <br/>The Legend of Zelda: Ocarina of Time <br/>Assassin's Creed 2 <br/>Halo <br/>The Elder Scrolls V Skyrim
                </p>
            </Expand>

            <Expand title="5. Music between 50 and 80 beats per minute">
                <p>Some research suggests that it's not the type of music that's important in helping you stay focused and productive, but the tempo of that music. 
                    Studies have found that music with 50 to 80 beats per minute can enhance and stimulate creativity and 
                    learning. Dr. Emma Gray, a cognitive behavioral therapist, worked with Spotify to research the benefits of certain types of music. 
                    She found that listening to music set in the 50- to 80-beat range puts the brain into an "alpha state."
                    What's an alpha state? If you've ever listened to music that you're familiar with, only to find yourself deep in thought 
                    and not really hearing the music at all, this is an alpha state induced by music. You're tuning out while being tuned in.
                    It works best to find songs you're familiar with and set at 50 to 80 beats per minute. 
                    To do so, use a guide to count the number of "beats" in the first 15 seconds of a song, and then multiply that number by four.
                </p>
                <p>Here's a playlist of songs in that range, including these popular tunes: <br/>
                Mirrors" by Justin Timberlake <br/>Last Goodbye" by Jeff Buckley <br/>The Lazy Song" by Bruno Mars <br/>Chasing Pavements" by Adele
                </p>
            </Expand>
        
            </main>
    </div>
  );
}

export default MainArea;

     
