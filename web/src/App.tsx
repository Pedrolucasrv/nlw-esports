import { useState } from 'react'
import "./main.css"
import logo from "./assets/Logo.svg";

function App() {


  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logo} alt="" className='' />

      <h1 className="text-6xl text-white font-black my-10">Seu <span className='bg-customGradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>
      <div className="grid grid-cols-6 gap-6">
          <a href="" className="relative rounded-lg overflow-hidden" >
            <img className='' src="/game1.png" alt="" />


            <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">League of legends</strong>
                <span className="text-zinc-300 text-sm block ">4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game2.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">Dota 2</strong>
                <span className="text-zinc-300 text-sm block ">4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game3.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">CS:GO</strong>
                <span className="text-zinc-300 text-sm block ">4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game4.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">Apex Legends</strong>
                <span className="text-zinc-300 text-sm block ">4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game5.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">Fortnite</strong>
                <span className="text-zinc-300 text-sm block ">4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game6.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">Wow</strong>
                <span className="text-zinc-300 text-sm block ">4 anuncios</span>
            </div>
          </a>
      </div>

      <div className='pt-1 bg-customGradient mt-8  self-stretch rounded-lg overflow-hidden'>

        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center ">
          <div className="flex-col flex">
            <strong className="text-2xl text-white font-black">Nao encontrou seu duo?</strong>
            <span className="text-zinc-400  ">Publique um anuncio para encontrar novos players</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-colors text-white rounded">Publicar anuncio</button>
        </div>
      </div>
    </div>
  )
}

export default App
