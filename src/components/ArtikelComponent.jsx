import React from 'react';
import 'flowbite';

function ArtikelComponent() {
    return (
        <div class="py-16 bg-white">  
            <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div class="md:5/12 lg:w-5/12">
                    <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""/>
                    </div>
                    <div class="md:7/12 lg:w-6/12">
                    <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Pentingnya Tanaman Keluarga</h2>
                    <p class="mt-6 text-gray-600">Tanaman keluarga itu sangat penting</p>
                    <button class="block uppercase mt-4 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Selengkapnya</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ArtikelComponent;