import { createRouter, createWebHashHistory } from 'vue-router' // ✅ ubah di sini
const HomeView = () => import('../views/HomeView.vue')
const AboutView = () => import('../views/AboutView.vue')
const AksaraOverview = () => import('../views/AksaraOverview.vue')
const PageLatihan = () => import('../views/PageLatihan.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/belajar',
    name: 'BelajarAksara',
    component: AksaraOverview,
  },
  {
    path: '/latihan',
    name: 'LatihanSoal',
    component: PageLatihan,
  }
]

const router = createRouter({
  history: createWebHashHistory(), // ✅ ganti dari createWebHistory()
  routes
})

export default router
