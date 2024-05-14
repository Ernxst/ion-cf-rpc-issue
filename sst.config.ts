/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "ion-dev-issue",
			removal: input.stage === "production" ? "retain" : "remove",
			home: "cloudflare",
			version: "0.0.360"
		};
	},
	async run() {
		$transform(sst.cloudflare.Worker, (args) => {
			args.url = true
			args.build = {
				esbuild: {
					// https://github.com/vitejs/vite/issues/15464#issuecomment-1872485703
					target: "es2020",
					external: ["node:process"]
				}
			}
		})

		const workerB = new sst.cloudflare.Worker(
			"WorkerB",
			{
				handler: "./functions/workerB.handler.ts",
			}
		);

		const workerA = new sst.cloudflare.Worker(
			"WorkerA",
			{
				handler: "./functions/workerA.handler.ts",
				link: [workerB],
			}
		);

		return {
			a: workerA.url,
			b: workerB.url,
		}
	},
});
