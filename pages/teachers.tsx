import stls from '@/styles/components/general/Breadcrumbs.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import Teachers from '../components/sections/Teachers'
import { apiProgramsReqUrl, backendUrl } from '@/config/index'
import Breadcrumbs from '@/components/general/Breadcrumbs'

const teachers = ({ programs }) => {
  return (
    <>
      <NextSeo
        title={'Российские и зарубежные эксперты MBA - Moscow Business Academy'}
        description={truncate(
          'Перенимайте уникальный опыт международных экспертов, адаптированный под рынок РФ',
          120
        )}
        canonical={'https://moscow.mba/teachers'}
      />
      <section className={`jumbotron-section ${stls.jumbotronGeneral}`}>
        <div className='container'>
          <Breadcrumbs />
        </div>
      </section>
      <div className='container'>
        <Teachers atStandAlonePage />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default teachers
