const getOrigamis = async (userId, length) =>{

    const url = userId ? `http://localhost:9999/api/origami?userId=${userId}` :
                         `http://localhost:9999/api/origami`;

    const promise = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            length
        }
    });

   return await promise.json();
};

export default getOrigamis;