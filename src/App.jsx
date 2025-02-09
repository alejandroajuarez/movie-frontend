import { Header } from './Header';
import { Footer } from './Footer';
import { ActorsPage } from './ActorsPage';

function App() {
  return (
    <div>
      <Header />
      <div className="containter">
        <Recipes />
      </div>
      <Footer />
    </div>
  )
}