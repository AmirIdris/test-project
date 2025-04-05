import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { Button } from '../../ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome To Your <span className={styles.highlight}>Virtual Office</span>
        </h1>
        <div className={styles.buttonGroup}>
          <Button variant="primary" size="large">
            Instant Demo
          </Button>
          <Button variant="outline" size="large">
            Setup Your Company
          </Button>
        </div>
        <div className={styles.footer}>
          <a href="/terms" className={styles.footerLink}>
            Term & Conditions
          </a>
          <a href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}; 