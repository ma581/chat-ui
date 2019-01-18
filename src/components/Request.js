export const get = (url) => fetch(url)
    .then(res => res.json(),
        error => {
            return Promise.reject(error);
        });
