import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

export const App = (appInfo) =>{
    return(
        <>
        <Header/>
        {appInfo.children}
        <Footer/>
        </>
    );
}