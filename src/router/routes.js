import Home from '@/views/Home';
import About from '@/views/About';
import Contact from '@/views/Contact';
import Services from '@/views/Services';
export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/services',
        name: 'services',
        component: Services,
    }
]
