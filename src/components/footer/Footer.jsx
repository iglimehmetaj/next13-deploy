import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div >All Rights Reserved , Mehmetaj inc</div>
        
        <div className={styles.social}>
      <Image src="/1.png" className={styles.icon} width={18} height={18} alt="Facebook" />
      <Image src="/2.png" className={styles.icon} width={18} height={18} alt="Instagram" />
      <Image src="/3.png" className={styles.icon} width={18} height={18} alt="Twitter" />  
      <Image src="/4.png" className={styles.icon} width={18} height={18} alt="Youtube" />
        </div>
    </div>
  )
}

export default Footer