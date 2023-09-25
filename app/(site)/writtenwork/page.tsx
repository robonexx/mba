'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'
import IMG from '@/public/images/markuspiano.jpg';

import styles from './written.module.scss'

const WrittenWork = () => {
  return (
    <motion.div
    className={styles.written}
    initial={{ opacity: 0, filter: 'blur(5px)' }}
    animate={{ opacity: 1, filter: 'blur(0px)' }}
    transition={{ duration: 1 }}
  >
    <motion.h2
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.6, duration: 0.3 }}
    >
      Markus B Almqvist
    </motion.h2>
    <div className={styles.headline}>
      <motion.h4
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Written work
      </motion.h4>
    </div>
    <div className={styles.img}>
      <Image src={IMG} alt='stage work' fill></Image>
    </div>
    <div className={styles.overlay}></div>
    <button className={styles.fullList}>
      see full list of works for stage
      </button>
      </motion.div>
  );
};

export default WrittenWork;