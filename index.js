async function Leer() {
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    const host = await fetch('https://api.audius.co')
        .then(r => r.json())
        .then(j => j.data)
        .then(d => sample(d))
    const api_url = `https://dn-usa.audius.metadata.fyi/v1/users/nlGNe?app_name=EXAMPLEAPP`
    buscar3(api_url);
}

const buscar3 = async (api_url) => {
    const cancion = document.getElementById("input").value;
    const data = await fetch('https://dn-usa.audius.metadata.fyi/v1/tracks/search?query=' + cancion + ' b2b&app_name=EXAMPLEAPP');
    const respuesta = await data.json();

    console.log(respuesta.data);

    if (respuesta.data != null) {
        document.getElementById("lista").innerHTML = '';
        respuesta.data.map((p) => {
            document.getElementById("lista").innerHTML += `<div style="margin-top:10px;">
            <h6>${p.title} </h6></div>`;
        })
    }
}

