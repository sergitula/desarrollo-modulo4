
import { enlaces } from '../../data/enlaces.js';
import { NavLink } from './NavLink.jsx';

export const Navbar = () => {
    return (
        <header className=''>
            <nav className="flex justify-between"> 
                <div> 
                    <a href="#">RETROCUP '26</a>
                </div>
                <div className="flex gap-4"> 
                    {enlaces.map((enlace) => (
                        <NavLink 
                            key={enlace.id}
                            texto={enlace.texto}
                            url={enlace.url}
                            isBoton={enlace.isBoton}
                        />
                    ))}
                </div>

            </nav>
        </header>
    )
}
