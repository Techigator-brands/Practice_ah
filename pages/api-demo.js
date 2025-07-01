import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  fetchUserData, 
  createUser, 
  fetchAllUsers,
  clearError, 
  clearSuccess, 
  resetApiState 
} from '../redux/slices/apiSlice'
import styles from '../styles/ApiDemo.module.css'

export default function ApiDemo() {
  const dispatch = useDispatch()
  const { 
    userData, 
    allUsers, 
    loading, 
    error,
    createUserLoading,
    createUserError,
    createUserSuccess
  } = useSelector((state) => state.api)

  const [userId, setUserId] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user'
  })

  // Clear notifications after 5 seconds
  useEffect(() => {
    if (createUserSuccess) {
      const timer = setTimeout(() => {
        dispatch(clearSuccess())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [createUserSuccess, dispatch])

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, dispatch])

  const handleFetchUser = () => {
    dispatch(fetchUserData(userId))
  }

  const handleFetchAllUsers = () => {
    dispatch(fetchAllUsers())
  }

  const handleCreateUser = (e) => {
    e.preventDefault()
    dispatch(createUser(formData))
    setFormData({ name: '', email: '', role: 'user' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleReset = () => {
    dispatch(resetApiState())
  }

  return (
    <>
      <Head>
        <title>ahelsunnat - API Demo</title>
        <meta name="description" content="Redux API calls demonstration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={`${styles.title} fade-in`}>Redux API Calls Demo</h1>
          <p className={`${styles.description} fade-in`}>
            Demonstrating Redux Toolkit's createAsyncThunk with real API data from{' '}
            <a href="https://ahlesunnat.mws.ngo/api/test" target="_blank" rel="noopener noreferrer" className={styles.apiLink}>
              Ahle Sunnat API
            </a>
          </p>

          <div className={styles.demoSection}>
            {/* All Users API Demo */}
            <div className={`${styles.demoCard} card-hover`}>
              <h2>Fetch All Users</h2>
              <p>Fetch all users from the real API endpoint</p>
              
              <button 
                onClick={handleFetchAllUsers}
                disabled={loading}
                className={`btn-primary ${loading ? 'loading' : ''}`}
              >
                {loading ? 'Fetching...' : 'Fetch All Users'}
              </button>

              {allUsers && (
                <div className={styles.result}>
                  <h3>API Response Status: {allUsers.status}</h3>
                  <p>Total Users: {allUsers.data ? allUsers.data.length : 0}</p>
                </div>
              )}
            </div>

            {/* User Data Demo */}
            <div className={`${styles.demoCard} card-hover`}>
              <h2>Fetch User Data</h2>
              <p>Fetch user data by ID using Redux async thunk</p>
              
              <div className={styles.inputGroup}>
                <label htmlFor="userId">User ID:</label>
                <input
                  id="userId"
                  type="number"
                  value={userId}
                  onChange={(e) => setUserId(parseInt(e.target.value) || 1)}
                  min="1"
                  max="3"
                  className={styles.input}
                />
              </div>

              <button 
                onClick={handleFetchUser}
                disabled={loading}
                className={`btn-primary ${loading ? 'loading' : ''}`}
              >
                {loading ? 'Fetching...' : 'Fetch User'}
              </button>

              {userData && (
                <div className={styles.result}>
                  <h3>User Data:</h3>
                  <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
              )}
            </div>

            {/* Create User Demo */}
            <div className={`${styles.demoCard} card-hover`}>
              <h2>Create New User</h2>
              <p>Create a new user with POST request</p>
              
              <form onSubmit={handleCreateUser} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="Enter name"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="Enter email"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="role">Role:</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  disabled={createUserLoading}
                  className={`btn-success ${createUserLoading ? 'loading' : ''}`}
                >
                  {createUserLoading ? 'Creating...' : 'Create User'}
                </button>
              </form>

              {userData && createUserSuccess && (
                <div className={`${styles.result} ${styles.success}`}>
                  <h3>User Created Successfully!</h3>
                  <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
              )}
            </div>

            {/* Error Display */}
            {(error || createUserError) && (
              <div className={`${styles.demoCard} ${styles.errorCard}`}>
                <h2>Error</h2>
                <div className={styles.errorMessage}>
                  {error && <p><strong>API Error:</strong> {error}</p>}
                  {createUserError && <p><strong>Create User Error:</strong> {createUserError}</p>}
                </div>
                <button 
                  onClick={() => dispatch(clearError())}
                  className="btn-secondary"
                >
                  Clear Error
                </button>
              </div>
            )}

            {/* Reset Button */}
            <div className={`${styles.demoCard} card-hover`}>
              <h2>Reset State</h2>
              <p>Clear all API data and reset the state</p>
              
              <button 
                onClick={handleReset}
                className="btn-secondary"
              >
                Reset All Data
              </button>
            </div>
          </div>

          {/* Users Table */}
          {allUsers && allUsers.data && allUsers.data.length > 0 && (
            <div className={`${styles.demoCard} card-hover`}>
              <h2>All Users Table</h2>
              <p>Displaying {allUsers.data.length} users from the API</p>
              
              <div className={styles.tableContainer}>
                <table className={styles.usersTable}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Email</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers.data.map((user) => (
                      <tr key={user.signup_id}>
                        <td>{user.signup_id}</td>
                        <td>
                          {user.signup_firstname} {user.signup_lastname}
                        </td>
                        <td>{user.signup_contact || 'N/A'}</td>
                        <td>{user.signup_email || 'N/A'}</td>
                        <td>
                          <span className={`${styles.badge} ${styles[`type-${user.signup_type}`]}`}>
                            {user.signup_type === '1' ? 'Service' : 
                             user.signup_type === '2' ? 'Doctor' : 
                             user.signup_type === '4' ? 'Member' : 'Unknown'}
                          </span>
                        </td>
                        <td>
                          <span className={`${styles.badge} ${user.signup_status === '1' ? styles.active : styles.inactive}`}>
                            {user.signup_status === '1' ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td>{new Date(user.signup_createdon).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Redux State Display */}
          <div className={`${styles.demoCard} card-hover`}>
            <h2>Current Redux State</h2>
            <p>Live view of the API slice state</p>
            
            <div className={styles.stateDisplay}>
              <pre>
                {JSON.stringify({
                  loading,
                  error,
                  createUserLoading,
                  createUserError,
                  createUserSuccess,
                  hasUserData: !!userData,
                  hasAllUsers: !!allUsers,
                  userCount: allUsers?.data?.length || 0
                }, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 