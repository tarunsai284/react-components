const getDefaultHeaders = {
    'X-RapidAPI-Key': '105c4eb68cmsh63d8c58efbe1e2dp12a658jsn46941bff8620',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
}

const postDefaultHeaders = {
    'X-RapidAPI-Key': '105c4eb68cmsh63d8c58efbe1e2dp12a658jsn46941bff8620',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    'Content-Type': 'application/json'
}

const isValidParams = (params) => {
    if (params == null || (!(params instanceof Object)) || params instanceof Array) return false;
    Object.keys(params).forEach(key => {
        const element = params[key];
        if (!(element instanceof String || typeof element === "string" ||
            element instanceof Number || typeof element === "number")) return false;
    });
    return true;
}

export const get = async (url, params = {}, headers = getDefaultHeaders) => {
    if (!isValidParams(params)) throw new Error("Invalid parameter object");
    if (url == null) throw new Error("Invalid url object");
    if (Object.keys(params).length > 0) {
        url += "?";
        url += new URLSearchParams({ ...params })
    }

    const options = {
        method: 'GET',
        headers: headers
    }
    return fetch(url, options);
}

export const post = async (url, reqBody = {}, headers = postDefaultHeaders) => {
    if (!(reqBody instanceof Object)) throw new Error("Invalid reqBody object");
    if (url == null) throw new Error("Invalid url object");

    const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(reqBody)
    }
    return fetch(url, options);
}

export const put = async (url, reqBody = {}, headers = postDefaultHeaders) => {
    if (!(reqBody instanceof Object)) throw new Error("Invalid reqBody object");
    if (url == null) throw new Error("Invalid url object");

    const options = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(reqBody)
    }
    return fetch(url, options);
}

export const deleteHttpRequest = async (url, headers = postDefaultHeaders) => {
    if (url == null) throw new Error("Invalid url object");

    const options = {
        method: 'DELETE',
        headers: headers,
    }
    return fetch(url, options);
}
