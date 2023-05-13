import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MyRoutes from './components/myRoutes/MyRoutes';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <MyRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
