import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PageHeader from '../components/page-header/PageHeader'
import { category as cate } from '../config/config'
import MovieGrid from '../components/movie-grid/MovieGrid'

const Catalog = (props) => {
  const { category } = useParams()

  const pageTitle = category === cate.movie ? 'Movies' : 'TV Series'

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta content="Catalog" description="Catalog" />
      </Helmet>
      <PageHeader>
        {pageTitle}
      </PageHeader>
      <div className="main">
        <MovieGrid category={category} />
      </div>
    </div>
  )
}

export default Catalog
