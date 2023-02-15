import { matchers } from 'jest-json-schema';
expect.extend(matchers);

global.matchSchema = async (response, model, status) => {
    const body = await response.json();
    try {
        expect(response.statusCode).toEqual(status);

        /*eslint-disable no-prototype-builtins*/
        if (model.schema.response.hasOwnProperty(status)) expect(body).toMatchSchema(model.schema.response[status]);
        /*eslint-enable no-prototype-builtins*/
        return body;
    } catch (error) {
        /*eslint no-console: 0*/
        console.log(body);
        throw error;
    }
};