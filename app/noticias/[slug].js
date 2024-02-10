import { useRouter } from 'next/router';
import { getArticleBySlug, getAllArticleSlugs } from '../../lib/articles'; // Suponiendo que tengas funciones para obtener los datos de las noticias

const ArticleDetail = ({ article }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>; // Muestra un indicador de carga mientras se carga la página
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            {/* Otros detalles de la noticia */}
        </div>
    );
};

export default ArticleDetail;

export async function getStaticPaths() {
    const paths = getAllArticleSlugs(); // Función para obtener todos los slugs de las noticias
    return {
        paths,
        fallback: true // Indica que otras rutas deben mostrarse aunque no hayan sido pregeneradas
    };
}

export async function getStaticProps({ params }) {
    const article = getArticleBySlug(params.slug); // Función para obtener la noticia por su slug
    return {
        props: {
            article
        }
    };
}