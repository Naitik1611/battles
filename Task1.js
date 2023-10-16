API_URL="https://raw.githubusercontent.com/Naitik1611/battles/main/battles.json"
async function getData(){
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log('Fetched data:');
        console.log(JSON.stringify(data, null, 2));
    }
    catch(err) {
        console.error(err);
    }
}

getData();