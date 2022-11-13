import '../App.css';
import '../index.css';
import NavbarComponent from '../components/NavbarComponent';
import Carousel from '../containers/CarouselContainer';
import ArtikelComponent from '../components/ArtikelComponent';

function Home() {
  return (
    <body>
      <NavbarComponent />
      <Carousel />
      <h1 class="mt-16 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Artikel</h1>
      <p class="mt-6 mb-12 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Artikel-Artikel Seputar Kesehatan</p>
      <ArtikelComponent/>
    </body>
  );
}

export default Home;
