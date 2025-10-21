import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';
import { PageNotFound } from '@/ui/PageNotFound';
import { HomeView } from '@/views/HomeView';
import { DetailView } from '@/views/DetailView';

export default function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<HomeView />} index />
            <Route path='/link-1' element={<h1>link 1</h1>} />
            <Route path='/link-2' element={<h1>link 2</h1>} />
            <Route path='/:id' element={<DetailView />} />
          </Route>

          <Route path='/404' element={<PageNotFound />} />
          <Route path='/*' element={<Navigate to='/404' />} />
        </Routes>
      </BrowserRouter>
  );
}
