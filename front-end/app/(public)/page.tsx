import Home from '../../components/sections/home'
import About from '../../components/sections/about'
import Instructors from '../../components/sections/Instructors'
import Articles from '../../components/sections/articles'
import Location from '../../components/sections/location'
import Schedule from '../../components/sections/schedule'

export default function HomePage() {
    return (
        <main>
            <Home/>
            <About/>
            <Schedule/>
            <Location/>
            <Articles/>
            <Instructors/>
        </main>
    )
}