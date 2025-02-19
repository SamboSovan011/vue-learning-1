import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobListingsView from '@/views/JobListingsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';
import AddJobView from '@/views/AddJobView.vue';
import EditJobView from '@/views/EditJobView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobListingsView
    },
    {
      path: '/jobs/:jobId',
      name: 'job-detail',
      component: JobView
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJobView
    },
    {
      path: '/jobs/edit/:jobId',
      name: 'edit-job',
      component: EditJobView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
  ]
});

export default router;