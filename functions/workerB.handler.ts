import { WorkerEntrypoint } from "cloudflare:workers";

export default class WorkerBService extends WorkerEntrypoint {
  fetch() {
    return Response.json({ message: 'Hello World 1' })
  }

  sayHello() {
    console.log('!!!!1111')
    return { message: 'Hello from RPC 2!' }
  }
}
