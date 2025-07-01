import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Create async thunk for API call
export const fetchUserData = createAsyncThunk(
  'api/fetchUserData',
  async (userId, { rejectWithValue }) => {
    try {
      // Simulate API call with delay
      const response = await fetch(`/api/users/${userId}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }
      
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Create async thunk for POST request
export const createUser = createAsyncThunk(
  'api/createUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      
      if (!response.ok) {
        throw new Error('Failed to create user')
      }
      
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Create async thunk for fetching all users from real API
export const fetchAllUsers = createAsyncThunk(
  'api/fetchAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://ahlesunnat.mws.ngo/api/test')
      
      if (!response.ok) {
        throw new Error('Failed to fetch users from API')
      }
      
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  userData: null,
  allUsers: null,
  loading: false,
  error: null,
  createUserLoading: false,
  createUserError: null,
  createUserSuccess: false,
}

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
      state.createUserError = null
    },
    clearSuccess: (state) => {
      state.createUserSuccess = false
    },
    resetApiState: (state) => {
      state.userData = null
      state.allUsers = null
      state.loading = false
      state.error = null
      state.createUserLoading = false
      state.createUserError = null
      state.createUserSuccess = false
    },
  },
  extraReducers: (builder) => {
    // Handle fetchUserData
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false
        state.userData = action.payload
        state.error = null
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
    
    // Handle createUser
    builder
      .addCase(createUser.pending, (state) => {
        state.createUserLoading = true
        state.createUserError = null
        state.createUserSuccess = false
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.createUserLoading = false
        state.createUserSuccess = true
        state.createUserError = null
        // Optionally update userData with the new user
        state.userData = action.payload
      })
      .addCase(createUser.rejected, (state, action) => {
        state.createUserLoading = false
        state.createUserError = action.payload
        state.createUserSuccess = false
      })
    
    // Handle fetchAllUsers
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false
        state.allUsers = action.payload
        state.error = null
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearError, clearSuccess, resetApiState } = apiSlice.actions

export default apiSlice.reducer 