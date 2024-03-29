import stls from '@/styles/components/sections/Executive.module.sass'
import Link from 'next/link'
import Image from 'next/image'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import langMenu from '@/data/translation/menu'
import imageData from '@/data/images/executive'
import Price from '@/components/costs/Price'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import ProgramSubjects from '@/components/hooks/ProgramSubjects'
import { base64pixel } from '@/config/index'

const Executive = () => {
  return (
    <section className='executive-section'>
      <div className='executive-flex'>
        <div className='executive-detail'>
          <div className='label'>
            <span>Premium</span>
          </div>
          <h2>Executive MBA</h2>
          <p className='title-desc'>{SetString(lang.executiveMBADicsFirst)}</p>
          <p className='title-desc'>{SetString(lang.executiveMBADicsSecond)}</p>
          <ul className='count-list'>
            <li>
              <TrainingPeriod type={'executive'} />
            </li>
            <li>2 {SetString(lang.executiveOfflineModules)}</li>
            <li>
              <ProgramSubjects sum={true} type={'executive'} />{' '}
              {SetString(langMenu.qtSubjects)}
            </li>
          </ul>
          <div className='price'>
            {SetString(langMenu.price)}:{' '}
            <Price discount={false} type={'executive'} />
            {/* <i className='old-price'>
              {' '}
              <Price discount={true} type={'executive'} /> Р.
            </i> */}
          </div>
          <Link href='/programs/executive/' locale='ru'>
            <a className='button empty-button'>
              {SetString(lang.learnMoreBtn)}
            </a>
          </Link>
        </div>
        <div className='dobble-images executive-images'>
          <div className='image pic-1'>
            <Image
              src={imageData.largerCircle.src}
              alt={SetString(imageData.largerCircle.alt)}
              width={401}
              height={400}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
          <div className='image pic-2'>
            <Image
              src={imageData.smallerCircle.src}
              alt={SetString(imageData.smallerCircle.alt)}
              width={221}
              height={221}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
          <div className='count'>
            <strong>200+</strong>
            <span>{SetString(lang.graduates)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Executive
