
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import styles from './styles.module.scss'

export default function Banners() {
    return (
        <section className={styles.banners}>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
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
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
                <img
                  src="https://levelupgames.com.br/uploaded/thumbnails/0ragnarok/2021.04.06/050421_RO_Topo_vendas.png"
                  style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                  }}
                />
                <img
                  src="https://levelupgames.com.br/uploaded/thumbnails/0ragnarok/2021.04.06/010421_RO_Topo_refino.png"
                  style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                  }}
                />
                
          </Carousel>
        </section>
    )
}