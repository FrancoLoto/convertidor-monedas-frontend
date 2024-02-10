"use client"

const CoinsList = ({ coins, error}) => {

    return (
        <div>
            {coins}
        </div>
    );

};


export default CoinsList;


export async function getStaticProps() {
    let coins = []
    let error = null;

    try {
        const response = await fetch("https://pro-api.coingecko.com/api/v3/coins/list")
        coins = await response.json()
        console.log(coins)
    } catch(err) {
        console.log('err :>> ', error)
        error = err.message ? err.message : "Algo salió mal";
    }

    return {
        props: {
            coins,
            error
        }
    }
}




