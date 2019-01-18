import Chat from "./Chat";
import React from "react";
import {shallow, mount} from "enzyme";

describe('Chat', () => {
    it('should make a get request', () => {
        expect.assertions(1);
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                expect(json).toBeTruthy()
            })
    });

    it('should call getMessages on componentDidMount', () => {
        const spy = jest.spyOn(Chat.prototype, 'getMessages');
        shallow(<Chat/>);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should make a request to API', () => {
        const mockGet = jest.fn();
        mockGet.mockReturnValueOnce(true);

        jest.mock('./Request', () => ({
            Request: jest.fn().mockImplementation(() => ({
                get: mockGet
            })),
        }));

        mount(<Chat/>);
        //
        // expect(mockGet).toHaveBeenCalledTimes(1);
        // expect(mockGet).toHaveBeenCalledWith("asdf");
    });
});
