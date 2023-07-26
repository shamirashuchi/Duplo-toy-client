import React from 'react';
const Slider = () => {
    return (
        <div className='bg-pink-100'>
            <h2  style={{ fontStyle: 'italic' }} className="text-center text-6xl text-pink-500 mt-60 md:mt-40 mb-10 font-bold">
            Popular Toys
            </h2>


            <div className="carousel rounded-box mx-auto px-4 md:px-8 lg:px-16 xl:px-20" style={{ maxWidth: '1000px' }}>
            <div className="carousel-item">
                <img  src="fotor-ai-2023071713047_1.jpg" alt="Burger" className='ml-10 h-40 w-40' />
            </div> 
            <div className="carousel-item">
                <img src="public/fotor-ai-2023071713047_2.jpg" alt="Burger" className='ml-10 h-40 w-40' />
            </div> 
            <div className="carousel-item">
                <img src="pink-background-and-toy-image.png" alt="Burger" className='ml-10 h-40 w-40' />
            </div> 
            <div className="carousel-item">
                <img src="public/fotor-ai-202307171398_1.jpg" alt="Burger" className='ml-10 h-40 w-40' />
            </div> 
            <div className="carousel-item">
                <img src="public/fotor-ai-202307171398_2.jpg" alt="Burger" className='ml-10 h-40 w-40' />
            </div> 
            <div className="carousel-item">
                <img src="pink-background-and-toy-engineering--image.png" alt="Burger" className='ml-10 h-40 w-40' />
            </div> 
            <div className="carousel-item">
                <img src="pink-background-and-toy-engineering--image (3).png" alt="Burger" className='ml-5 h-40 w-40' />
            </div>
         </div>
        <div className='flex justify-center'>
        <button className="btn bg-pink-400 text-white rounded-full mt-10 ml-10 text-2xl font-semibold">Shop       <span className=' ml-5 md:ml-20'>Popular  </span>       <span className=' ml-5 md:ml-20'>Toys  </span></button>
        </div>
        </div>
    );
};

export default Slider;