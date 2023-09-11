export function get(url)
{
    return(
        fetch (url,{
        headers:{
            Authorization://error de acceso con metodo OPTIONS por poner Authorithation.
                          //Implicacion:Al acceder con OPTIONS no se obtiene RESPONSE(no se descarga los que se le solicita al server API) en el XHR del webdeveloper 
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDhjMGJjNTkzNmZlODVhZDE5NDFmOThkZjA3MGZkZiIsInN1YiI6IjYyZDgxY2MzYWJmOGUyMDA1NTZjMTBhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oo3WrYjytdAAUkkGKZIHiuw7PAOjTNmFIfrMMFVIWWU",
            "Content-Type": "application/json;charser=utf-8",
        },
    })
    .then(result=>result.json())


    )



}