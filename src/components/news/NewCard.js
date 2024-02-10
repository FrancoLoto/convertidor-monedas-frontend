import Image from "next/image";
import Link from "next/link";

const NewCard = ({ article }) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) +'...';
        } else {
            return text;
        }
    }

    return (
        <div className="h-full bg-white shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href={`/${article.slug}`}>
            <div className="relative w-full h-60">
                <Image  
                src={'https://res.cloudinary.com/dvf7opqxb/' + article.thumbernail}
                layout="fill"
                alt="Imágen de artículo" 
                >
                </Image>
            </div>

            <div className="p-5">         
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncateText(`${article.content}`, 125)}</p>
                <p className="text-gray-400">{article.time_read} min lectura.</p>
            </div>
        </Link>
        </div>
    )
}

export default NewCard