import { useState } from "react"
import styles from "./Slideshow.module.css";

const Slideshow = ({cards}) => {
  const [currentIndex,setCurrentIndex] = useState(1);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };
  return (
    <div className={styles.slideContainer}>
      <div className={styles.slideWrapper}>
        <button onClick={prevSlide} className={`${styles.navBtn} ${styles.left}`}>&lt;</button>
        <div className={styles.cardTrack}>
          {cards.map((card,index)=>{
            const isActive = index === currentIndex;
            const pointsArray = card.points.split('\n');
            return(
              <div key={card.id} onClick={()=> setCurrentIndex(index)} className={`${styles.card} ${isActive ? styles.activeCard : styles.inactiveCard}`}>
                <img src={card.image}/>
                <p className={styles.size}>{card.size}</p>
                <div className={styles.cardContent}>
                <h4>{card.title}</h4>
                <ul className={styles.points}>
                  {pointsArray.map((item, index) => (<li key={index} className={styles.point}>{item}</li>))}</ul>
                <p>{card.price}</p>
              </div></div>
            )
          })}
        </div>
        <button onClick={nextSlide} className={`${styles.navBtn} ${styles.right}`}>&gt;</button>
      </div>
    </div>
  )
}

export default Slideshow