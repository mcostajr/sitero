import Head from 'next/head';

import styles from '../styles/Donation.module.scss'

export default function Donation() {
    return (
        <main className={styles.container}>
            <Head>
                <title>SiteRO | Doação</title>
            </Head>
            <div className={styles.wrapper}>
                <h1>Doação</h1>
                <div className={styles.methodPayment}>
                    <h4>SELECIONE UMA FORMA DE PAGAMENTO</h4>
                    <div className={styles.listMethod}>
                        <div className={styles.itemMethod}>
                            <div style={{backgroundColor: '#8a05be'}} className={styles.wrapperMethod}>
                                <img width="50px" height="50px" src="payment/nubank.png" alt="nubank" />
                                <span>DOE AGORA COM</span>
                            </div>
                            <div className={styles.bottomMethod}>
                                <span>DOC/TED</span>
                            </div>
                        </div>
                        <div className={styles.itemMethod}>
                            <div style={{backgroundColor: '#00bdae'}} className={styles.wrapperMethod}>
                                <img width="50px" height="50px" src="payment/pix.png" alt="pix" />
                                <span>DOE AGORA COM</span>
                            </div>
                            <div className={styles.bottomMethod}>
                                <span>PIX</span>
                            </div>
                        </div>
                        <div className={styles.itemMethod}>
                            <div style={{backgroundColor: '#21c25e'}} className={styles.wrapperMethod}>
                                <img width="50px" height="50px" src="payment/picpay.png" alt="picpay" />
                                <span>DOE AGORA COM</span>
                            </div>
                            <div className={styles.bottomMethod}>
                                <span>PICAPAY</span>
                            </div>
                        </div>
                        
                        <div className={styles.itemMethod}>
                            <div style={{backgroundColor: '#00a0e3'}} className={styles.wrapperMethod}>
                                <img width="50px" height="50px" src="payment/ml.png" alt="ml" />
                                <span>DOE AGORA COM</span>
                            </div>
                            <div className={styles.bottomMethod}>
                                <span>MERCADO PAGO</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.howDonation}>
                    <span>Como Doar ?</span>
                    <ul>
                        <li>Escolha um dos métodos disponíveis acima;</li>
                        <li>CONFIRME A SUA DOAÇÃO;</li>
                        <li>Pronto, seus créditos serão vinculados à sua conta principal!</li>
                        <li>A cada R$1,00 doado você receberá 1.000 CASHPOINTS no jogo!</li>
                    </ul>
                    <span>POR QUE DOAR?</span>
                    <ul >
                        <li>Doando você está contribuindo para a duração e qualidade do servidor!</li>
                    </ul>
                </div>
            </div>
            <div className={styles.background}>
                <img src="donation.png" alt="donation" />
            </div>
        </main>
    )
}