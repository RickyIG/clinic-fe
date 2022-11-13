import React from 'react';
import 'flowbite';

function HelpComponent() {
    return (
        <div class="py-16 bg-white">  
            <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div class="md:5/12 lg:w-5/12">
                    <img src={require('../tutor.png')}  alt="image" loading="lazy" width="" height=""/>
                    </div>
                    <div class="md:7/12 lg:w-6/12">
                    <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">1. Klik pada tombol Sign Up</h2>
                    <p class="mt-6 text-gray-600">Pertama-tama, kita perlu membuat akun terlebih dahulu dengan cara mengeklik tombol Sign Up pada pojok kanan atas laman web.</p>
                    {/* <p class="mt-4 text-gray-600">Isi dengan data diri Anda dengan benar.</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HelpComponent;