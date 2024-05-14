# Reproduction

1. Clone this repo
2. Set env vars (see [`.env.example`](.env.example))
3. `sst dev`
4. Invoke `WorkerA` using its url (e.g., in Postman, cURL etc.)
5. Observe logs from `sst dev`
6. Change the log statement in [`WorkerA`](./functions/workerA.handler.ts)
7. Invoke `WorkerA` using its url (e.g., in Postman, cURL etc.)
8. Observe logs from `sst dev` - the log statements are still the same

Instead of changing the log, you can also change the response returned - invoking `WorkerA` again still returns the old value.

Changing the log statement in [`WorkerB`](./functions/workerB.handler.ts) and invoking
`WorkerA` again shows the updated WorkerB log in the terminal; changing the return
value of `WorkerB#sayHello` and invoking `WorkerA` again will also use the updated
return value.
