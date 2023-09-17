function getRequest(body, callback) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "https://jscp-diplom.netoserver.ru/", true);
        xhr.responseType = "json";
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(body);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const response = xhr.response;
                if (callback) {
                    callback(response);
                }
                resolve(response);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = () => {
            reject(xhr.statusText);
        };
    });
}
