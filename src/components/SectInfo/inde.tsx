import Image from 'next/image'
import styles from './styles.module.scss'

export default function Info() {
    return (
        <section className={styles.info}>
            <div className={styles.information}>
                <h1>SEJA BEM VINDO AO RAGNAROK ONLINE</h1>
                <p>dadyeagydegaydgeyagdyegaydgyaegdyeagdadeadadad addddddddddddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddydgeaygdyagydgyegygdad ysgdaydsyagdysgaydgsaygdysagydsgaydgyagdysgaygdygydgsaygdaygdysgaydgsy agydgasydgas</p>
                <p>dahdueahudahud heaudheaudhaeudhd adsuahdushaudhaudhsauhdusahduhaudhushaudhusauduashduashudhusahduhasudsaas dahsudahudshaudhushaudhaus eahduaeduaueduadheuahdaehdeudhuahdeua</p>
            </div>
            <Image 
                src="/valquiria.gif"
                width={250}
                height={250}
                
            />
        </section>
    )
}