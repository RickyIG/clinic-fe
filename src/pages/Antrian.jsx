import '../App.css';
import '../index.css';
import NavbarComponent from '../components/NavbarComponent';
import TabelAntrian from '../components/TabelAntrianComponent';
import AntrianContainer from '../containers/AntrianContainer';

function Home() {
  return (
    <body>
      <NavbarComponent />
      <h1 class="mt-12 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Daftar Antrian</h1>
      <p class="mt-6 mb-16 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Klinik Medika berfokus kepada pelayanan pasien yang dengan bersungguh-sungguh, terbaik dan memuaskan.</p>
      
      <TabelAntrian/>
      
      <h1 class="mt-12 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white rounded">Antrian Saat Ini</h1>
      <AntrianContainer/>
      <button class="block uppercase my-12 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Daftar Disini!</button>
      
    </body>
  );
}

export default Home;
