import styles from "./OnboardThrillsPage.module.css";
import sg from "../../assets/homePage/SEA-GUARDIAN.jpg";
import oe from "../../assets/homePage/OCEAN-EXPLORER.jpg";
import sd from "../../assets/homePage/SERENITY-DREAM.jpg";
import zone from "../../assets/OnboardThrills/activity.png";
import pools from "../../assets/OnboardThrills/pool.png";
import yoga from "../../assets/OnboardThrills/yoga.png";
import dive from "../../assets/OnboardThrills/activity-dive.png";
import challenge from "../../assets/OnboardThrills/activity-challenge.png";
import marine from "../../assets/OnboardThrills/activity-marine.png";
import coral from "../../assets/OnboardThrills/coral.png";
import turtle from "../../assets/OnboardThrills/turtle.png";
import cleanup from "../../assets/OnboardThrills/cleanup.jpg";
import roller from "../../assets/OnboardThrills/roller.png";
import friends from "../../assets/OnboardThrills/friends.png";
import guard from "../../assets/OnboardThrills/guard.png";
import world from "../../assets/OnboardThrills/world.png";
import interactive from "../../assets/OnboardThrills/interactive.png";
import { Link } from "react-router-dom";

const OnboardThrillsPage = () => {
  return <div className={styles.onboardThrills}>
    <div className={styles.hero}>
      <h1>Onboard Activities</h1>
    </div>
    <div className={styles.info}>
      <div className={styles.infoDescription}>
        <h2>Connect with Nature, Sail into Wonder</h2>
        <p>When you set sail with Ocean Park HK Cruise Line, every voyage is a harmony of adventure, purpose, and relaxation—crafted to deepen your bond with the ocean.</p>
        <p>Whether you’re diving into scientific exploration, giving back through conservation, or unwinding with your loved ones, our three distinct ships offer experiences that let you embrace the sea your way, no compromises needed.</p>
        <ul className={styles.infoLinks}>
          <li><Link to="/cruises">Find Your Perfect Cruise</Link></li>
          <li><Link to="/CruiseBookingPageOE">Book Now</Link></li>
        </ul>
      </div>
      <div className={styles.infoImage}>
        <img src={sg} alt="sea guardian" />
        <img src={oe} alt="ocean explorer" />
        <img src={sd} alt="serenity dream" />
      </div>
    </div>
    <section className={styles.exploration}>
      <h2>EXPLORATION & ADVENTURE</h2>
      <p>Dive into the ocean’s hidden wonders with expert-led experiences that blend thrill and discovery, tailored for the curious and bold.</p>
      <div className={styles.explorationCardContainer}>
        <div className={styles.explorationCard}><img src={dive} />
        <h3>Scientific Dive Expeditions</h3>
        <p>Embark on guided dives to explore coral reefs, underwater caves, and marine habitats, with access to onboard sea labs for hands-on learning.</p>
        </div>
        <div className={styles.explorationCard}><img src={challenge} />
        <h3>Oceanfront Thrill Challenges</h3>
        <p>Test your limits with zip-lines, cliff-like climbing walls, and floating obstacle courses—all set against panoramic ocean views.</p>
        </div>
        <div className={styles.explorationCard}><img src={marine} />
        <h3>Marine Spotting Safaris</h3>
        <p>Join dawn and dusk sessions to spot whales, dolphins, and rare sea birds, with insights from our onboard marine biologists.</p>
        </div>
      </div>
      <ul className={styles.infoLinks}>
        <li><Link to="/cruises">Find Your Perfect Cruise</Link></li>
        <li><Link to="/CruiseBookingPageOE">Book Now</Link></li>
      </ul>
    </section>
    <section className={styles.conservation}>
      <div className={styles.conservationContainer}>
        <div className={styles.conservationContent}>
          <h2>CONSERVATION & IMPACT</h2>
          <p>Turn your vacation into a mission—contribute to ocean protection through meaningful, hands-on volunteer activities.</p>
        </div>
        <div className={styles.conservationCardContainer}>
          <div className={styles.conservationCard}>
            <img src={coral}/>
            <div className={styles.conservationInfo}>
            <h3>Coral Planting & Restoration</h3>
            <p>Help revive vital reef ecosystems by planting coral fragments in designated conservation zones, with post-voyage updates on your coral’s growth.</p></div>
          </div>
          <div className={styles.conservationCard}>
            <div className={styles.conservationInfo}>
            <h3>Turtle Rescue & Rehabilitation</h3>
            <p>Assist our crew in monitoring nesting sites, caring for injured turtles, and learning how to protect these endangered creatures.</p></div>
            <img src={turtle}/>
          </div>
          <div className={styles.conservationCard}>
            <img src={cleanup}/>
            <div className={styles.conservationInfo}>
            <h3>Coastal Cleanup Missions</h3>
            <p>Join kayak and beach cleanup drives to remove marine debris, with the chance to earn a “Ocean Guardian” certificate.</p>
          </div>
          </div>
        </div>
      </div>
      <ul className={styles.infoLinks}>
          <li><Link to="/cruises">Find Your Perfect Cruise</Link></li>
          <li><Link to="/CruiseBookingPageOE">Book Now</Link></li>
        </ul>
    </section>
    <section className={styles.adventure}>
      <h2>ADVENTURE & EXPLORATION</h2>
      <p>Join our family-focused, ocean conservation-themed activities: from the musical stage show Ocean Guardians VS Plastic Monster and dolphin exploration summits with marine biologists, to mascot meet-and-greets, polar adventure performances, and hands-on "Junior Ocean Guardian" workshops—all blending fun, learning, and real-world action to protect our oceans.</p>
      <div className={styles.adventureContainer}>
        <figure>
          <img src={roller}/>
          <figcaption>On-Board Roller Coaster</figcaption>
        </figure>
        <figure>
          <img src={friends}/>
          <figcaption>Whiskers and Friends Meet & Greet</figcaption>
        </figure>
        <p>FUN</p>
        <figure>
          <img src={guard}/>
          <figcaption>Whiskers Village: Ocean Guardians VS Plastic Monster</figcaption>
        </figure>
        <p>SHOW</p>
        <figure>
          <img src={world}/>
          <figcaption>Marine World Theatre Show</figcaption>
        </figure>
        <p>LEARN</p>
        <figure>
          <img src={interactive}/>
          <figcaption>Ocean Guardians Interactive Programme</figcaption>
        </figure>
        <p>AND MORE</p>
      </div>
      <ul className={styles.infoLinks}>
          <li><Link to="/cruises">Find Your Perfect Cruise</Link></li>
          <li><Link to="/CruiseBookingPageOE">Book Now</Link></li>
        </ul>
    </section>
    <section className={styles.recreation}>
      <h2>RECREATION & WELLNESS</h2>
      <div className={styles.cardContainer}>
        <div className={styles.recreationCard}>
          <div className={styles.cardContent}>
          <h3>Family-Friendly Activity Zones</h3>
          <p>Let kids play in tide pool-themed climbing areas and pirate laser tag arenas, while adults enjoy quiet spa treatments with sea-sourced products.</p>
          </div>
          <img src={zone}/>
        </div>
        <p>Balance adventure with calm—recharge your mind and body with ocean-inspired wellness and leisure activities.</p>
        <div className={styles.recreationCard}>
          <div className={styles.cardContent}>
          <h3>Eco-Friendly Pool & Water Play</h3>
          <p>Splash in our sustainably filtered wave pools, with gentle swells for little ones and bigger breaks for thrill-seekers.</p>
          </div>
          <img src={pools}/>
        </div>
        <div className={styles.recreationCard}>
          <div className={styles.cardContent}>
          <h3>Ocean-View Yoga & Meditation</h3>
          <p>Practice yoga at sunrise or sunset on the deck, with the sound of waves as your backdrop, or join guided meditation sessions focused on mindfulness.</p>
          </div>
          <img src={yoga}/>
        </div>
      </div>
    </section>
  </div>;
};

export default OnboardThrillsPage;
