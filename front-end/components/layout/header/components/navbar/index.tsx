import Image from "next/image"
import Link from "next/link"

import Logo from '@/public/imgs/svg/Logo.svg'

import './style.css'

export default function NavBar() {
    return (
        <nav id="navbar">
            <ul id="menu">
                <li className="text-large text-secondary"><Link href={'#home'}>Início</Link></li>
                <li className="text-large text-secondary"><Link href={'#schedule'}>horários</Link></li>
                <li className="text-large text-secondary"><Link href={'#about'}>Sobre</Link></li>
                <li className="text-large text-secondary"><Link href={'#instructors'}>Professores</Link></li>
                <li className="text-large text-secondary"><Link href={'#location'}>Localização</Link></li>
                <li className="text-large text-secondary"><Link href={'#articles'}>Artigos</Link></li>
                <li className="text-large text-secondary"><Link href={'#contact'}>Contato</Link></li>
            </ul>
            <div id="logo">
                <Link href={"/"}><Image className="logo-img" loading={"eager"} src={Logo} alt="Logo do Jiu Jitsu Hub, onde é duas pessoas lutando jiu jitsu."/></Link>
            </div>
            <div id="navigation">
                <div id="buttons">
                    <Link href={"/articles"}><button className="btn btn-transparent">Artigos</button></Link>
                    <Link href={'/aluno'}><button className="btn btn-default">Área do aluno</button></Link>
                </div>
                <div id="bars">
                    <span className="bar-white"></span>
                    <span className="bar-white"></span>
                    <span className="bar-white"></span>
                    <span className="bar-white"></span>
                </div>
            </div>
        </nav>
    )
}