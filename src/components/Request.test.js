import {get} from "./Request";
const nock = require('nock');

describe('Request', () => {

    it('should make a request to URL', () => {
        const response = {id: '123ABC'};
        nock('http://localhost')
            .get('/')
            .reply(200, response);

        return get('http://localhost').then(data => {
            expect(data).toBeDefined();
            expect(data).toEqual(response);
        })
    });

    it('should handle error response', () => {
        nock('http://localhost')
            .get('/')
            .reply(500, {});

        return get('http://localhost').then(data => {
            expect(data).toBeDefined();
            expect(data).toEqual({});

        })
    });

    it('should handle no response', () => {
        expect.assertions(1);
        nock('http://localhost')
            .get('/')
            .replyWithError('something awful happened');

        return get('http://localhost').then(data => {},
            error => {
                expect(error).toBeDefined();
            })
    });
});
