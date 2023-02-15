const fake = app => {
    const http = method => (url, { body, headers, querystring }) => {
        const options = { method, url };
    
        if (body) options.body = body;
        if (headers) options.headers = headers;
        if (querystring) options.query = querystring;
    
        return app.inject(options);
    };

    return {
        GET: http("GET"),
        POST: http("POST"),
        PATCH: http("PATCH"),
        PUT: http("PUT"),
        DELETE: http("DELETE"),
        HEAD: http("HEAD")
    };
};

export {
    fake
};