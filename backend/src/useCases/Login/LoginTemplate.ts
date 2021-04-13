import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default abstract class LoginTemplate {
  async findUser (email: string, repository: any): Promise<any> {
    const user = await repository.searchByEmail(email)
    if (!user) {
      throw new Error('Usuário não encontrado!')
    }
    return user
  }

  async checkPassword (attempedPassword: string, realPassword: string): Promise<void> {
    const isValidPassword = await bcrypt.compare(attempedPassword, realPassword)
    if (!isValidPassword) {
      throw new Error('Senhas não coincidem!')
    }
  }

  generateNewToken (userId: string) {
    return jwt.sign({ id: userId }, process.env.TOKEN_KEY, { expiresIn: 3000 })
  }
}
