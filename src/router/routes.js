import Home from '@/views/Home';
import Contact from '@/views/Contact';
import Services from '@/views/Services';
import OurWork from "@/views/OurWork";
export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/our_work',
        name: 'ourWork',
        component: OurWork,
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
        props: true,
    }
]
