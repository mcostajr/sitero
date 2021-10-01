
import Carousel from 'react-multi-carousel';
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
          <div>
            <h1>BEM VINDO AO RAGNAROK ONLINE</h1>
          </div>
        </div>
          <div 
            className={styles.banner}
            style={{
              backgroundImage: 'url(/banner02.png)',
            }}>
          </div>
        </Carousel>
      </section>
    )
}