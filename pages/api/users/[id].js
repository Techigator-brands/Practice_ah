// Sample user data (same as users.js)
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
  const { id } = req.query

  switch (method) {
    case 'GET':
      // Get user by ID
      const userId = parseInt(id)
      const user = users.find(u => u.id === userId)

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        })
      }

      res.status(200).json({
        success: true,
        data: user,
        message: 'User retrieved successfully'
      })
      break

    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).json({
        success: false,
        message: `Method ${method} Not Allowed`
      })
  }
} 