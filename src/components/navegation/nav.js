import Link from "next/link";

const Navbar = () => {
    return(
        <>
        <nav className="bg-gray-700 border-gray-200 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://i.postimg.cc/CKXR9LKK/zona-defi-logo.webp" className="h-8 w-10 lg:h-9 lg:w-11" alt="ZonaDefi logo" />
                    <span className="font-onest self-center text-2xl md:text-3xl lg:text-3xl font-bold whitespace-nowrap text-white">ZonaDefi</span>
                </Link>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                    <Link href="/ingresar" className="text-sm md:text-md lg:text-lg xl:text-lg  text-white hover:text-orange-300">Ingresar</Link>
                    <Link href="/registro" className="text-sm md:text-md lg:text-lg xl:text-lg  text-white hover:text-orange-300">Registro</Link>
                </div>
            </div>
        </nav>
        <nav className="bg-gray-900">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link href="/" className="text-white text-sm md:text-md lg:text-lg xl:text-lg hover:text-orange-300" aria-current="page">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/crypto" className="text-white text-sm md:text-md lg:text-lg xl:text-lg hover:text-orange-300">Crypto</Link>
                        </li>
                        <li>
                            <Link href="/noticias" className="text-white text-sm md:text-md lg:text-lg xl:text-lg hover:text-orange-300">Noticias</Link>
                        </li>
                        <li>
                            <Link href="/convertidor" className="text-white text-sm md:text-md lg:text-lg xl:text-lg hover:text-orange-300">Convertidor</Link>
                        </li>
                        <li>
                            <Link href="/contacto" className="text-white text-sm md:text-md lg:text-lg xl:text-lg hover:text-orange-300">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>    
      </>  
    )
}

export default Navbar