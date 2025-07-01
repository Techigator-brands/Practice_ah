import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../redux/slices/counterSlice'
import Header from '../../components/Header'
import styles from '../../styles/Home.module.css'

export default function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Redux Counter Example &rarr;</h2>
            <p>Current count: <strong>{count}</strong></p>
            <div className={styles.buttonGroup}>
              <button 
                onClick={() => dispatch(increment())}
                className={styles.button}
              >
                Increment
              </button>
              <button 
                onClick={() => dispatch(decrement())}
                className={styles.button}
              >
                Decrement
              </button>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Sample Image &rarr;</h2>
            <p>This is a sample image from the assets folder.</p>
            <div className={styles.imageContainer}>
              <img 
                src="/assets/sample-image.jpg" 
                alt="Sample" 
                className={styles.sampleImage}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'block'
                }}
              />
              <div style={{display: 'none'}} className={styles.placeholder}>
                Sample Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  )
} 