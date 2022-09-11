import Home from '@/views/Home';
import Contact from '@/views/Contact';
import Services from '@/views/Services';
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/our_work',
    name: 'ourWork',
    component: () => import('@/views/OurWork'),
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: 'Contact Gauntlet Designs',
    },
    component: Contact,
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
    props: true,
    meta: {
      title: 'Gauntlet Designs Services',
    },
  },
];
