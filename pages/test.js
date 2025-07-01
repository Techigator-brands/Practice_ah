import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Test.module.css'

export default function Test() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiStatus, setApiStatus] = useState('idle')

  const testAPI = async () => {
    setLoading(true)
    setApiStatus('loading')
    try {
      const response = await fetch('/api/hello')
      const data = await response.json()
      setMessage(data.message)
      setApiStatus('success')
      
      // Show notification if external JS is loaded
      if (window.UI) {
        window.UI.showNotification('API call successful!', 'success')
      }
    } catch (error) {
      setMessage('Error: ' + error.message)
      setApiStatus('error')
      
      // Show notification if external JS is loaded
      if (window.UI) {
        window.UI.showNotification('API call failed!', 'error')
      }
    }
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>ahelsunnat</title>
        <meta name="description" content="Ahle Sunnat Front - API Test Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={`${styles.title} fade-in`}>API Test Page</h1>
          <p className={`${styles.description} fade-in`}>
            Test the API endpoints and external JavaScript functionality
          </p>

          <div className={styles.testSection}>
            <div className={`${styles.testCard} card-hover`}>
              <h2>API Endpoint Test</h2>
              <p>Click the button below to test the <code>/api/hello</code> endpoint.</p>
              
              <button 
                onClick={testAPI} 
                disabled={loading}
                className={`btn-primary ${loading ? 'loading' : ''}`}
              >
                {loading ? 'Testing...' : 'Test API'}
              </button>

              {message && (
                <div className={`${styles.result} ${styles[apiStatus]}`}>
                  <strong>API Response:</strong> {message}
                </div>
              )}
            </div>

            <div className={`${styles.testCard} card-hover`}>
              <h2>External JavaScript Test</h2>
              <p>Test the external JavaScript utilities and UI components.</p>
              
              <div className={styles.buttonGroup}>
                <button 
                  onClick={() => {
                    if (window.UI) {
                      window.UI.showNotification('This is a test notification!', 'info')
                    } else {
                      alert('External JavaScript not loaded yet. Please wait a moment and try again.')
                    }
                  }}
                  className="btn-primary"
                >
                  Show Info Notification
                </button>
                
                <button 
                  onClick={() => {
                    if (window.UI) {
                      window.UI.showNotification('Success notification!', 'success')
                    } else {
                      alert('External JavaScript not loaded yet. Please wait a moment and try again.')
                    }
                  }}
                  className="btn-success"
                >
                  Show Success Notification
                </button>
                
                <button 
                  onClick={() => {
                    if (window.UI) {
                      window.UI.createModal(
                        '<p>This is a test modal created by external JavaScript!</p><p>It demonstrates the modal functionality.</p>',
                        'Test Modal'
                      )
                    } else {
                      alert('External JavaScript not loaded yet. Please wait a moment and try again.')
                    }
                  }}
                  className="btn-secondary"
                >
                  Open Test Modal
                </button>
              </div>
            </div>

            <div className={`${styles.testCard} card-hover`}>
              <h2>Utility Functions Test</h2>
              <p>Test the utility functions from external JavaScript.</p>
              
              <div className={styles.buttonGroup}>
                <button 
                  onClick={() => {
                    if (window.Utils) {
                      const randomId = window.Utils.generateId()
                      alert(`Generated Random ID: ${randomId}`)
                    } else {
                      alert('External JavaScript not loaded yet. Please wait a moment and try again.')
                    }
                  }}
                  className="btn-primary"
                >
                  Generate Random ID
                </button>
                
                <button 
                  onClick={() => {
                    if (window.Utils) {
                      const currentDate = window.Utils.formatDate(new Date())
                      alert(`Formatted Date: ${currentDate}`)
                    } else {
                      alert('External JavaScript not loaded yet. Please wait a moment and try again.')
                    }
                  }}
                  className="btn-secondary"
                >
                  Format Current Date
                </button>
              </div>
            </div>

            <div className={`${styles.testCard} card-hover`}>
              <h2>External CSS Test</h2>
              <p>This section demonstrates the external CSS classes and animations.</p>
              
              <div className={styles.cssDemo}>
                <div className="text-center mb-3">
                  <p>This text is centered using external CSS</p>
                </div>
                
                <div className={styles.buttonGroup}>
                  <button className="btn-primary mb-2">Primary Button</button>
                  <button className="btn-secondary mb-2">Secondary Button</button>
                  <button className="btn-success">Success Button</button>
                </div>
                
                <div className="text-center mt-3">
                  <small>Check the browser console for external JS loading confirmation.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 