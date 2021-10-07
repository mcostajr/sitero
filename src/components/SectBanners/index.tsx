
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import "react-multi-carousel/lib/styles.css";

import styles from './styles.module.scss'

export default function Banners() {
    return (
      <section className={styles.container}>
        <Carousel
          className={styles.wrapper}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite
          arrows
          draggable
          minimumTouchDrag={80}
          focusOnSelect={true}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          dotListClass=""
          showDots
          sliderClass={styles.slider}
          slidesToSlide={1}
          swipeable
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1
            }
          }}
        >
        <div
          className={styles.banner}
          style={{
            backgroundImage: 'url(/banner01.png)',
          }}>
          <div className={styles.infoContainer}>
            <div className={styles.title}>
              <span>BEM VINDO</span>
              <span>AO</span>
              <span>RAGNAROK ONLINE</span>
            </div>
            <div className={styles.buttonContainer}>
              <Link href="/register"><button>JOGAR AGORA</button></Link>
            </div>
          </div>
        </div>
          <div 
            className={styles.banner}
            style={{
              backgroundImage: 'url(/banner02.png)',
            }}>
            <div className={styles.infoContainer}>
              <div className={styles.title}>
                <span >PARTICIPE DA NOSSA COMUNIDADE</span>
              </div>
              <div className={styles.buttonContainer}>
                <Link href="/register"><button>PARTICIPAR AGORA</button></Link>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    )
}