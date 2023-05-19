import React from 'react';

const Gallery = () => {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/ZN4cqL1/Magna-Tiles-Builder.jpg" />
                </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/gy9CQXn/Lego-chain-reaction.jpg" />
                </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/CwK5Lds/Read-to-me.webp" />
                </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/3z6v5YK/Montessori.webp" />
                </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/k2PpR36/Mathwhiz.webp" />
                </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://i.ibb.co/0YBzhzt/Mathshark.webp" />
                </div>
                </div>
            </div>
</div>
    );
};

export default Gallery;