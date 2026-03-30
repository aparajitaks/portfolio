import React from 'react'

export default function ProjectCard({title, desc, stack, link, repo}){
  return (
    <article className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-[1.02] transition-transform">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
      <div className="mt-3 text-xs text-gray-500">Stack: {stack}</div>
      <div className="mt-4 flex gap-3">
        {repo && <a className="text-sm text-primary" href={repo}>Code</a>}
        {link && <a className="text-sm" href={link}>Live</a>}
      </div>
    </article>
  )
}
