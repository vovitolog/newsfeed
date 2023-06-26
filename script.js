
export const api = () => {
    fetch('https://frontend.karpovcourses.net/api/v2/ru/news')
        .then((res)=> res.json())
        .then(console.log)
}


