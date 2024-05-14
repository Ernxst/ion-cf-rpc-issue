import type WorkerBService from "./workerB.handler";

interface Env {
  WorkerB: Service<WorkerBService>
}

export default {
  async fetch(request, env) {
    console.log('1212')
    using message = await env.WorkerB.sayHello();
    return Response.json({ rpcMessage: message })
  }
} satisfies ExportedHandler<Env>
