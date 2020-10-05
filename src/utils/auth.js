export const authenticate = (url, headers, body, onSuccess, onFailure) =>{

    fetch(url, {
        method: "POST",
        headers,
        body
    }).then(response => {

        if (response.status === 200){
            const authToken = response.headers.get("Authorization");
            document.cookie = `x-auth-token=${authToken}`;

            onSuccess(response);
        }

        else {
            onFailure(response.statusText);
        }

    }).catch(e => onFailure(e));
};