// Sample user data
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    createdAt: '2024-01-20'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'user',
    createdAt: '2024-01-25'
  }
]

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      // Get all users
      res.status(200).json({
        success: true,
        data: users,
        message: 'Users retrieved successfully'
      })
      break

    case 'POST':
      // Create a new user
      try {
        const { name, email, role = 'user' } = req.body

        if (!name || !email) {
          return res.status(400).json({
            success: false,
            message: 'Name and email are required'
          })
        }

        // Check if email already exists
        const existingUser = users.find(user => user.email === email)
        if (existingUser) {
          return res.status(400).json({
            success: false,
            message: 'User with this email already exists'
          })
        }

        const newUser = {
          id: users.length + 1,
          name,
          email,
          role,
          createdAt: new Date().toISOString().split('T')[0]
        }

        // In a real app, you would save to database
        users.push(newUser)

        res.status(201).json({
          success: true,
          data: newUser,
          message: 'User created successfully'
        })
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Internal server error'
        })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).json({
        success: false,
        message: `Method ${method} Not Allowed`
      })
  }
} 