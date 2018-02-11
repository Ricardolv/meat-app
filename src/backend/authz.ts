import { apiConfig } from './api-config';
import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'

export const handleAuthorization = (req: Request, resp: Response, next) => {
  const token = extratctToken(req)

  if (!token) {
    resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"')
    resp.status(401).send({message: 'Você precisa se autenticar.'})

  } else {
    jwt.verify(token, apiConfig.secret, (error, decoded) => {
      if (decoded) {
        next()
      } else {
        resp.status(403).json({message: 'Não autorizado.'})
      }
    })
  }

}

function extratctToken(req: Request): string {
  let token = undefined
  if (req.headers && req.headers.authorization) {
    // Authorization: Bearer HEADER.PAYLOAD.VERIFYSIGNATURE
    const parts: string[] = req.headers.authorization.split(' ')
    if (parts.length === 2 && parts[0] === 'Bearer') {
        token = parts[1]
    }
    return token
  }
}
