export interface LoginPayload {
  email: string
  password: string
}

export interface AuthUser {
  id: string
  name: string
  email: string
}

export interface LoginResponse {
  token: string
  user: AuthUser
}

const API_URL = 'http://localhost:8080/api'

export class AuthService {
  static async login(
    payload: LoginPayload
  ): Promise<LoginResponse> {

    if (!payload.email || !payload.password) {
      throw new Error('Email and password are required')    
    }

    // const response = await fetch(`${API_URL}/auth/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // })

    // if (!response.ok) {
    //   throw new Error('Invalid credentials')
    // }
    if (payload.email == 'luke@gmail.com' || payload.password == '123456') {
        const response = {
            token: 'xashdjsiqqhVoT4dfmWdJj64qqvXaZJaofl2ercBk53GIuXiQFk1zJFud2XSulVuTHEeqy00zH',
            user: {
                id: '1',
                name: 'John Doe',
                email: 'M8t1F@example.com'
            }
        }

        return JSON.parse(JSON.stringify(response))    
    }
    
    throw new Error('Invalid credentials')
  }

  static logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  static saveSession(data: LoginResponse) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  static getToken(): string | null {
    return localStorage.getItem('token')
  }

  static getUser(): AuthUser | null {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }

  static isAuthenticated(): boolean {
    return !!this.getToken()
  }
}
