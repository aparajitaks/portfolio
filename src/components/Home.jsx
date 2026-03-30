import React from 'react'

export default function Home(){
  return (
    <section id="home" className="pt-8 pb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Hi, I'm Aparajita — Full Stack Developer</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">I build modern web apps and explore machine learning. I'm focused on end-to-end product thinking, clean code, and delivering value. Looking for internships and collaborative projects.</p>
          <div className="flex gap-4 mt-4">
            <a href="#projects" className="inline-block bg-primary text-white px-4 py-2 rounded-md shadow hover:shadow-lg transition">See Projects</a>
            <a href="#contact" className="inline-block border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-md">Contact me</a>
          </div>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">GitHub: <a className="text-primary" href="https://github.com/">github.com/aparajita</a></div>
        </div>
        <div className="rounded-xl p-6 bg-gray-50 dark:bg-gray-800 shadow-md">
          <div className="h-48 flex items-center justify-center text-gray-400">Profile image / illustration</div>
        </div>
      </div>
    </section>
  )
}
