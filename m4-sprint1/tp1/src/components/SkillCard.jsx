// una skill (recibe props)

import React from 'react'

export const SkillCard = ({ name, level, isFavorite }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-800 text-base">{name}</h3>
        {isFavorite && (
          <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full">
            ★ Favorita
          </span>
        )}
      </div>
      
      <p className="text-xs text-gray-500 mt-3">
        Nivel: <span className="font-medium text-gray-700">{level}</span>
      </p>
    </div>
  )
}