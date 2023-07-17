import React from 'react';

const Gallery = () => {
    return (
       <div>
        <h2  style={{ fontStyle: 'italic' }} className="text-center text-6xl text-pink-500 mb-0 mt-40 font-bold">
            Welcome to Barbie World
            </h2>
         <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="pink-background-and-toy--Barbie--image-0 (1).png" />
                </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="pink-background-and-toy--Barbie--image-1 (1).png" />
                </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="pink-background-and-toy--Barbie--image-2.png" />
                </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="pink-background-and-toy--Barbie--image.png" />
                </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="pink-background-and-toy--Barbie--image (1).png" />
                </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="pink-background-and-toy--Barbie--image (2).png" />
                </div>
                </div>
            </div>
</div>
<button className="btn bg-pink-400 text-white rounded-full mt-2 ml-10 md:ml-96 text-2xl font-semibold">Shop       <span className=' ml-5 md:ml-20'>Barbie  </span>       <span className=' ml-5 md:ml-20'>Dolls  </span></button>
       </div>
    );
};

export default Gallery;