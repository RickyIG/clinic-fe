import '../App.css';
import '../index.css';
import NavbarComponent from '../components/NavbarComponent';
import AboutComponent from '../components/AboutComponent';

function Home() {
  return (
    <body>
        
      <NavbarComponent />
      <h1 class="mt-12 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tentang Kami</h1>
      <p class="mt-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Klinik Medika berfokus kepada pelayanan pasien yang dengan bersungguh-sungguh, terbaik dan memuaskan.</p>
      <AboutComponent/>

    </body>
  );
}

export default Home;
