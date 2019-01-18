import Chat from "./Chat";
import React from "react";
import {shallow} from "enzyme";

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

    it('should have empty array on waiting to retrieve messages', () => {
        const wrapper = shallow(<Chat/>);
        expect(wrapper.state().messages).toEqual([]);
        expect(wrapper.find('#status').text()).toEqual('Loading...');
    });

    it('should have empty array on waiting to retrieve messages', () => {
        const wrapper = shallow(<Chat/>);
        wrapper.instance().getMessages = jest.fn().mockImplementation(() => Promise.reject("Error"));
        expect(wrapper.state().messages).toEqual([]);
        expect(wrapper.state().error).toBeTruthy();
        // expect(wrapper.find('#status').text()).toEqual('Error');
    })

});
