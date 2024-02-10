

const Login = () => {
    return(
        <div className="mt-12 mb-20">
            <form className="max-w-sm mx-auto">
            <div className="text-center text-4xl font-semibold mb-10">
                <h1>Ingrese a su cuenta</h1>
            </div>
            <div className="mb-5">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="nombre@ejemplo.com" required />
            </div>
            <div className="mb-5">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="***************" required />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                </div>
                <label for="remember" className="ms-2 text-sm font-medium text-gray-900">Recuérdame</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Ingresar</button>
            </form>

        </div>
    )
}

export default Login