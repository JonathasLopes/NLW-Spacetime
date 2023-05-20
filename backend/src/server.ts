import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // todas URLs de frontend poderão acessar nosso backend ou, voce pode colocar apenas as rotas que irão acessar substintuindo o 'true' por [<url>]
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP Server running on http://localhost:3333')
  })
