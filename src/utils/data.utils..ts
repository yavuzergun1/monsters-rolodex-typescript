export const getData = async <T> (url:string): Promise<T> => { /* Aşağıda await döndürdüğümüz için bunun type'ı promise oldu */
    const response = await fetch(url);
    return await response.json();
}