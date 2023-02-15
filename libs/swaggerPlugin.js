'use strict';

import fp from "fastify-plugin";
import swaggerRoutes from "./swaggerRoutes.js";

import csp from "./csp.json" assert { type: "json" };

const fastifySwaggerUi = (fastify, opts, next) => {
	fastify.decorate("swaggerCSP", csp);

	fastify.register(swaggerRoutes, {
		prefix: opts.routePrefix || "/",
		uiConfig: opts.uiConfig || {},
		initOAuth: opts.initOAuth || {},
		hooks: opts.uiHooks,
		...opts
	});

	next();
};

export default fp(fastifySwaggerUi);