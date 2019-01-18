describe('Chat', () => {
    test('should make a get request', () => {
        expect.assertions(1);
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                expect(json).toBeTruthy()
            })
    });
});
