import Head from 'next/head'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>ahelsunnat - About</title>
        <meta name="description" content="About Ahle Sunnat Front - Next.js Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={`${styles.title} fade-in`}>About Us</h1>
          <p className={`${styles.description} fade-in`}>
            Learn more about our Next.js application with global header and footer
          </p>

          <div className={styles.content}>
            <div className={`${styles.section} card-hover`}>
              <h2>Our Mission</h2>
              <p>
                We are dedicated to creating modern, responsive web applications using cutting-edge technologies 
                like Next.js, React, and Redux. Our goal is to provide users with seamless, intuitive experiences 
                across all devices.
              </p>
            </div>

            <div className={`${styles.section} card-hover`}>
              <h2>Technology Stack</h2>
              <ul className={styles.techList}>
                <li><strong>Frontend:</strong> Next.js 14, React 18</li>
                <li><strong>State Management:</strong> Redux Toolkit</li>
                <li><strong>Styling:</strong> CSS Modules, External CSS</li>
                <li><strong>JavaScript:</strong> External JS utilities</li>
                <li><strong>API:</strong> Next.js API routes</li>
              </ul>
            </div>

            <div className={`${styles.section} card-hover`}>
              <h2>Features</h2>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <h3>🌐 Global Layout</h3>
                  <p>Header and footer appear on all pages automatically</p>
                </div>
                <div className={styles.feature}>
                  <h3>📱 Responsive Design</h3>
                  <p>Works perfectly on desktop, tablet, and mobile devices</p>
                </div>
                <div className={styles.feature}>
                  <h3>⚡ Performance</h3>
                  <p>Optimized for fast loading and smooth interactions</p>
                </div>
                <div className={styles.feature}>
                  <h3>🎨 Modern UI</h3>
                  <p>Beautiful animations and hover effects throughout</p>
                </div>
              </div>
            </div>

            <div className={`${styles.section} card-hover`}>
              <h2>Get Started</h2>
              <p>
                Ready to explore? Check out our <a href="/" className={styles.link}>home page</a> to see the Redux counter 
                in action, or visit our <a href="/test" className={styles.link}>test page</a> to try out the API endpoints 
                and external JavaScript functionality.
              </p>
              <div className={styles.buttonGroup}>
                <a href="/" className="btn-primary">Go to Home</a>
                <a href="/test" className="btn-secondary">API Test</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 