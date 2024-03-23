import axios from 'axios';


// Fetch list news
export async function fetchNews() {
    try {
        const response = await axios.get('http://localhost:8000/api/news/');
        const news = response.data.news;
        return {
            props: { news }
        };
    } catch (error) {
        console.error('Error fetching news: ', error);
        return {
            props: { news: [] } // Retorna un arreglo vacío en caso de error
        }
    };
}

// Fetch detail new
export async function fetchNewDetail(slug) {
    try{
        const response = await axios.get(`http://localhost:8000/api/news/${slug}/`);
        const newDetail = response.data.new;
        console.log(newDetail)
        return {
            props: { newDetail }
        };
    } catch(error) {
        console.error('Error fetching new detail: ', error);
        return {
            props: { newDetail: [] } // Retorna un arreglo vacío en caso de error
        }
    };
}
