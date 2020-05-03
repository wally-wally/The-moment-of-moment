import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import SelectPage from '@/views/SelectPage.vue'
import IntroPage from '@/views/IntroPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

import ProcessIntro from '@/components/process/ProcessIntro.vue'
import Processing from '@/components/process/Processing.vue'
import TestingMessage from '@/components/process/TestingMessage.vue'
import TestingFirst from '@/components/process/TestingFirst.vue'
import TestingSecond from '@/components/process/TestingSecond.vue'
import TestingThird from '@/components/process/TestingThird.vue'
import PredictMessage from '@/components/process/PredictMessage.vue'

import Subject from '@/components/final/Subject.vue'
import Motivate from '@/components/final/Motivate.vue'
import Through from '@/components/final/Through.vue'
import Result from '@/components/final/Result.vue'

import Artist from '@/components/final/Artist.vue'

import { store } from '@/store/index.js'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/intro',
      name: 'IntroPage',
      component: IntroPage
    },
    {
      path: '/select',
      name: 'SelectPage',
      component: SelectPage
    },
    {
      path: '/process/1',
      name: 'ProcessIntro',
      component: ProcessIntro,
      beforeEnter: checkSelect
    },
    {
      path: '/process/2',
      name: 'Processing',
      component: Processing,
      beforeEnter: checkSelect
    },
    {
      path: '/process/3',
      name: 'TestingMessage',
      component: TestingMessage,
      beforeEnter: checkSelect
    },
    {
      path: '/process/4',
      name: 'TestingFirst',
      component: TestingFirst,
      beforeEnter: checkSelect
    },
    {
      path: '/process/5',
      name: 'TestingSecond',
      component: TestingSecond,
      beforeEnter: checkSelect
    },
    {
      path: '/process/6',
      name: 'TestingThird',
      component: TestingThird,
      beforeEnter: checkSelect
    },
    {
      path: '/process/7',
      name: 'PredictMessage',
      component: PredictMessage,
      beforeEnter: checkSelect
    },
    {
      path: '/final/subject',
      name: 'Subject',
      component: Subject,
      beforeEnter: checkSelect
    },
    {
      path: '/final/motivate',
      name: 'Motivate',
      component: Motivate,
      beforeEnter: checkSelect
    },
    {
      path: '/final/through',
      name: 'Through',
      component: Through,
      beforeEnter: checkSelect
    },
    {
      path: '/final/result',
      name: 'Result',
      component: Result,
      beforeEnter: checkSelect
    },
    {
      path: '/final/artist',
      name: 'Artist',
      component: Artist,
      beforeEnter: checkSelect
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})

function checkSelect (to, from, next) {
  if (store.state.selectedItem === 0) {
    next('/')
  } else {
    next()
  }
}