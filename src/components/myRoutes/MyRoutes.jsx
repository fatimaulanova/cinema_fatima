import {lazy, Suspense} from 'react'
import {Routes, Route,} from 'react-router-dom'
import Loader from '../loader/Loader'


const Home = lazy(() => import('../../pages/Home'));
const Catalog = lazy(() => import('../../pages/Catalog'));
const Detail = lazy(() => import('../../pages/detail/Detail'));

const MyRoutes = () => {
    return (
        <>
            <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path="/" element={
                                <Home/>}/>
                        <Route path="/:category" element={
                                <Catalog/>}/>
                        <Route path="/:category/:id" element={
                                <Detail/>}/>
                        <Route path="/:category/search/:keyword" element={
                                <Catalog/>}/>
                    </Routes>
            </Suspense>
        </>
    )
}

export default MyRoutes
