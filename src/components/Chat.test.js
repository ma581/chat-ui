import {shallow} from 'enzyme';
import Chat from "./Chat";
import React from "react";

describe('Chat', () => {
    it('should make a get request', () => {
        expect.assertions(1);
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                expect(json).toBeTruthy()
            })
    });

    it('should request messages on component mount', () => {
        // expect.assertions(1);

        const wrapper = shallow(<Chat/>);
        wrapper.instance().componentDidMount();

    });
});
