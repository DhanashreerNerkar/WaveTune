import './About.css';
import Card from './Card';
import gammaImg from './images/gamma_.png';
import betaImg from './images/beta_.png';
import alphaImg from './images/alpha_.png';
import thetaImg from './images/theta_.png';
import deltaImg from './images/delta_.png';

function About()
{
    const cards = [
        {
          className: 'card',
          title: 'Gamma Songs (30-50 Hz)',
          pic: gammaImg,
          alt: 'Gamma',
          text: 'Awake | Form memory | Process information',
        },
        {
          className: 'card',
          title: 'Beta Songs (12-30 Hz)',
          pic: betaImg,
          alt: 'Beta',
          text: 'Active Listening | Problem solving | Descision making',
        },
        {
          className: 'card',
          title: 'Aplha Songs (7-12 Hz)',
          pic: alphaImg,
          alt: 'Aplha',
          text: 'Relaxed | Calm | healing | Resourcesfulness',
          linkText: 'View Songs',
         /* {onReadMore: () => { window.location.hash = '#/cat'; },}*/
        },
        {
          className: 'card',
          title: 'Theta Songs (4-7 Hz)',
          pic: thetaImg,
          alt: 'Theta',
          text: 'Sleep | Dreaming | Deep meditation | Semi-Unconscious',
        },
        {
          className: 'card',
          title: 'Delta Songs ( < 4 Hz)',
          pic: deltaImg,
          alt: 'Delta',
          text: 'Deep sleep | Unconscious mind | Uncontrolled',
        }
      ];

      return (
        <div className="about">
          <h2>Stream Songs Online</h2>
          <div className="about__cards">
            {cards.map((card, index) => (
              <Card
                key={index}
                className={card.className}
                title={card.title}
                pic={card.pic}
                alt={card.alt}
                text={card.text}
                linkText={card.linkText}
                onReadMore={card.onReadMore}
              />
            ))}
          </div>
        </div>
      );
}

export default About;