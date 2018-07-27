import * as Redux from 'redux'
export interface IUser {
  user: IUser
  token: string
  iat: string
  exp: number
  from: string
}
export interface ILoginProps {
  location: {pathname: string}
  dispatch : Redux.Dispatch
  history: string[]
}