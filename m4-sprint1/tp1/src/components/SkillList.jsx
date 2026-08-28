// acá va el .map()

import React from 'react'
import {skills} from '../data/skills'
import { SkillCard } from './SkillCard'
import { Button } from './Button'

export const SkillList = ({nombre}) => {
    const handleSaludar = () => { 
        alert(`Bienvenido al perfil de "${nombre}"`);
    }
    return (
        <section className="max-w-[75%] mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Habilidades Técnicas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
            <SkillCard
                key={skill.id}
                name={skill.name}
                level={skill.level}
                isFavorite={skill.isFavorite}
            />
            ))}
        </div>
        <Button onClick={handleSaludar}>Saludar</Button>
    </section>
  )
}
