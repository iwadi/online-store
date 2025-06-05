import './css/App.css'
import './css/fonts.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <div className="body-wraper">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}

export default App;