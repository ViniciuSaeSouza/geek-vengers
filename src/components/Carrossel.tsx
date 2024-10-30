"use client"
import Image from 'next/image'
import img1 from '../../public/image/carrossel/img1.png'
import img2 from '../../public/image/carrossel/img2.png'
import img3 from '../../public/image/carrossel/img3.png'
import img4 from '../../public/image/carrossel/img4.png'
 
import { useState } from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
 
 
const slides = [img1, img2, img3, img4]
 
export default function Carrossel() {
 
    const [atual, setAtual] = useState(0)
 
    const prev = () => setAtual(atual === 0 ? slides.length - 1 : atual - 1)
    const next = () => setAtual(atual === slides.length - 1 ? 0 : atual + 1)
 
    return (
        <div  className= "max-w-[100%]">
            <div className='overflow-hidden relative'>
                <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${atual * 100}%)` }}>
                    {slides.map((s, i) => (
                        <Image key={i} src={s} alt='' height={800}/>
                    ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <button onClick={prev} className='text-3xl font-black p-1 rounded-full shadow bg-white/80 text-redMain hover:bg-white'><IoIosArrowDropleftCircle /></button>
                    <button onClick={next} className='text-3xl font-black p-1 rounded-full shadow bg-white/80 text-redMain hover:bg-white'><IoIosArrowDroprightCircle /></button>
                </div>
                <div className='absolute bottom-4 right-0 left-0'>
                    <div className='flex items-center justify-center gap-2'>
                        {slides.map((_, i)=> (
                            <div key={i} onClick={() => setAtual(i)} className={`transition-all w-3 h-3 bg-redMain rounded-full ${atual === i ? "p-2" : "bg-opacity-50"}`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}