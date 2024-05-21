import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

function Home() {
    return (
        <>
            <Header/>
                <main className="text-4xl text-green-600">
                    <a href="/register" className={"hover:underline"}> Registrarse</a><br/>
                    <a href="login" className={"hover:underline"}>Inicia sesion</a>
                </main>
            <Footer/>
        </>
    )

}

export default Home;