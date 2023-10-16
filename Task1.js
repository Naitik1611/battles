API_URL=""
async function getData(){
    try {
        const response = await fetch("");
        const data = await response.json();
        console.log('Fetched data:');
        console.log(JSON.stringify(data, null, 2));
    }
    catch(err) {
        console.error(err);
    }
}

getData();