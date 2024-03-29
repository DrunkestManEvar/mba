import stls from '@/styles/components/layout/Header.module.sass'
import Link from 'next/link'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import { useRouter } from 'next/router'
import lang from '@/data/translation/header'
import langMenu from '@/data/translation/menu'
import SetString from '@/components/hooks/SetString'
import HeaderLangLink from '@/components/btns/HeaderLangLink'
import Until from '@/components/costs/Until'
import Price from '@/components/costs/Price'
import useAt from '@/components/hooks/useAt'
import ProgramSubjects from '@/components/hooks/ProgramSubjects'
import ProgramsQty from '@/components/general/ProgramsQty'
import Script from 'next/script'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import contactData from '@/data/contactData'
import {
  IconLocation,
  IconLogo,
  IconLogoTitle,
  IconCheckCircle,
  IconScreen,
  IconPaperCorner,
  IconClock,
  IconMobilePhone
} from '@/components/icons'
import Image from 'next/image'
import ProgramsColumn from '@/components/general/ProgramsColumn'
import Discount from '@/components/costs/Discount'

const Header = ({ programs }) => {
  let data = programs || []

  const { isOpen, openMenu, closeMenu, toggleMenu } = useContext(MenuContext)
  // console.log(isOpen)

  const contactInfo = contactData()

  const router = useRouter()

  const at = useAt()

  return (
    <>
      <header>
        {/* <button onClick={openMenu}>open</button>
        <button onClick={closeMenu}>close</button>
        <button onClick={toggleMenu}>toggle</button> */}
        <div className='container'>
          <div className='header-top'>
            <Link href='/'>
              <a className='main-logo' aria-label='Moscow Business Academy'>
                <span className='pic'>
                  <IconLogo />
                </span>
                <span className='text'>
                  <IconLogoTitle />
                </span>
              </a>
            </Link>
            <div className='header-logos'>
              <span className='rabo'>
                <Image
                  src='/assets/images/logo_rabo.png'
                  alt='Российская ассоциация бизнес-образования'
                  width={117}
                  height={30}
                />
              </span>
              <span className='dep'>
                <Image
                  src='/assets/images/logo_department.png'
                  alt='Департамент образования города Москва'
                  width={105}
                  height={31}
                />
              </span>
            </div>
            <div className='header-place'>
              <IconLocation />
              {SetString(contactInfo.ru.address.city)},{' '}
              {SetString(contactInfo.ru.address.street)}
            </div>
            <div className='header-phones'>
              <a
                href={contactInfo.ru.tels[0].href}
                className='iconMainNumHeader'>
                {contactInfo.ru.tels[0].val}
              </a>
              <a href={contactInfo.ru.tels[1].href}>
                {contactInfo.ru.tels[1].val}
              </a>
              <a href={contactInfo.ru.tels[0].href} className='iconPhoneHeader'>
                <IconMobilePhone large fill={'#000'} />
              </a>
            </div>
            {at.index || at.about || at.contact ? <HeaderLangLink /> : null}
            <div className='header-buter'>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className='header-bottom'>
            <div className='header-podmenu-outer'>
              <div className='header-podmenu-toggle'>
                <div className='pic'>
                  <i></i>
                  <i></i>
                </div>
                <span>{SetString(lang.programsBtn)}</span>
              </div>
            </div>
            <ul className='header-menu'>
              <li>
                <Link href='/about'>
                  <a className={at.about ? 'red' : ''}>
                    {SetString(lang.linkAbout)}
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/teachers' locale='ru'>
                  <a className={at.teachers ? 'red' : ''}>
                    {SetString(lang.linkTeachers)}
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/webinars' locale='ru'>
                  <a className={at.webinars ? 'red' : ''}>
                    {SetString(lang.linkWebinars)}
                  </a>
                </Link>
              </li>
              {/* <li>
              <a href=''>Журнал</a>
            </li> */}
              {/* <li>
              <a href=''>Контакты</a>
            </li> */}
              {/* <li>
              <Link href='/articles' locale='ru'>
                <a className={at.articles ? 'red' : ''}>
                  {SetString(lang.linkNews)}
                </a>
              </Link>
            </li> */}

              <li>
                <Link href='/contact'>
                  <a className={at.contact ? 'red' : ''}>
                    {SetString(lang.linkContacts)}
                  </a>
                </Link>
              </li>

              <li className='widescreen-only'>
                <Link href='/legal' locale='ru'>
                  <a className={at.legal ? 'red' : ''}>
                    {SetString(lang.linkLegal)}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='header-podmenu'>
          <div className='container'>
            <div className='header-podmenu-flex'>
              <div className='header-podmenu-left'>
                <ul className='header-podmenu-tabs'>
                  <li>
                    <Link href='/programs/mini/online' locale='ru'>
                      <a
                        data-tab='#header-podmenu-1'
                        className='active-tab headerMenuTabs'>
                        Mini MBA
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/programs/professional/online' locale='ru'>
                      <a
                        data-tab='#header-podmenu-2'
                        className='headerMenuTabs'>
                        Professional MBA
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/programs/industry/online' locale='ru'>
                      <a
                        data-tab='#header-podmenu-3'
                        className='headerMenuTabs'>
                        Industry MBA
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/programs/mini/online' locale='ru'>
                      <a>{SetString(langMenu.allPrograms)}</a>
                    </Link>
                  </li>
                </ul>
                <div className='header-podmenu-premium'>
                  <div className='label'>
                    <span>Premium</span>
                  </div>
                  <Link href='/programs/executive' locale='ru'>
                    <a>Executive MBA</a>
                  </Link>
                </div>
              </div>
              <div className='header-podmenu-right'>
                <ProgramsColumn
                  data={data}
                  id={'header-podmenu-1'}
                  type={'mini'}
                />
                <ProgramsColumn
                  data={data}
                  id={'header-podmenu-2'}
                  type={'professional'}
                />
                <ProgramsColumn
                  data={data}
                  id={'header-podmenu-3'}
                  type={'industry'}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='header-overlay'></div> */}

        {/* mobile menu */}
        <div className='header-mobile-podmenu'>
          {/* first */}
          <div className='header-mobile-first'>
            <div className='container'>
              <ul className='header-mobile-menu'>
                <li>
                  <a href='' className='mobile-second-toggle'>
                    <strong>{SetString(lang.programsBtn)}</strong>
                  </a>
                </li>
                <li>
                  <Link href='/about'>
                    <a className='onClickCloseMobileMenu'>
                      {SetString(lang.linkAbout)}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/teachers' locale='ru'>
                    <a className='onClickCloseMobileMenu'>
                      {SetString(lang.linkTeachers)}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/webinars' locale='ru'>
                    <a className='onClickCloseMobileMenu'>
                      {SetString(lang.linkWebinars)}
                    </a>
                  </Link>
                </li>
                {/* <li>
                <a href=''>Журнал</a>
              </li>
              <li>
                <a href=''>Контакты</a>
              </li> */}
                {/* <li>
                <Link href='/articles' locale='ru'>
                  <a className='onClickCloseMobileMenu'>
                    {SetString(lang.linkNews)}
                  </a>
                </Link>
              </li> */}
                <li>
                  <Link href='/contact'>
                    <a className='onClickCloseMobileMenu'>
                      {SetString(lang.linkContacts)}
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/legal' locale='ru'>
                    <a
                      className={`onClickCloseMobileMenu ${
                        at.legal ? 'red' : ''
                      }`}>
                      {SetString(lang.linkLegal)}
                    </a>
                  </Link>
                </li>

                {router.pathname === '/' ||
                router.pathname === '/about' ||
                router.pathname === '/contact' ? (
                  <li>
                    <a href='' className='mobile-lang-toggle'>
                      {SetString(lang.linkLang)}
                    </a>
                  </li>
                ) : null}
              </ul>
              <div className='header-logos'>
                <span className='rabo'>
                  <Image
                    src='/assets/images/logo_rabo.png'
                    alt='Российская ассоциация бизнес-образования'
                    width={117}
                    height={30}
                  />
                </span>
                <span className='dep'>
                  <Image
                    src='/assets/images/logo_department.png'
                    alt='Департамент образования города Москва'
                    width={105}
                    height={31}
                  />
                </span>
              </div>
              <div className='header-place'>
                <IconLocation />
                <span>{SetString(lang.address)}</span>
              </div>
            </div>
          </div>
          {/* //first */}

          {/* second */}
          <div className='header-mobile-second js-header-mobile'>
            <div className='container'>
              <div className='menu-back-link'>
                <i></i>
                {SetString(langMenu.backBtn)}
              </div>
              <h3>{SetString(lang.programsBtn)}</h3>
              <ul className='header-mobile-menu'>
                <li>
                  <a href='' className='mobile-third-toggle'>
                    Mini MBA
                  </a>

                  {/* third */}
                  <div className='header-mobile-third js-header-mobile'>
                    <div className='container'>
                      <div className='menu-back-link'>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                      <h3>Mini MBA</h3>
                      <div className='program-tabs-content'>
                        <ul className='program-options-block-tabs'>
                          <li>
                            <a href='#program-mobile-1-1' className='active'>
                              ONLINE
                            </a>
                          </li>
                          <li>
                            <a href='#program-mobile-1-2'>BLENDED</a>
                          </li>
                        </ul>
                        <div className='program-options-detail'>
                          <div
                            id='program-mobile-1-1'
                            className='program-options-block'>
                            <div className='name'>
                              {SetString(langMenu.onlineTitle)}
                              <div className='discount'>
                                <div className='size'>
                                  <Discount />
                                </div>
                                <span>
                                  <Until />
                                </span>
                              </div>
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'mini'}
                              format={'online'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={true}
                                type={'mini'}
                                format={'online'}
                              />{' '}
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatRemote)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects type='mini' sum={true} />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'mini' &&
                                  item.mbaFormat === 'online'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a>{SetString(item, true)}</a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                          <div
                            id='program-mobile-1-2'
                            className='program-options-block'>
                            <div className='name'>
                              {SetString(langMenu.blendedTitle)}
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'mini'}
                              format={'blended'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={false}
                                type={'mini'}
                                format={'blended'}
                              />
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatBlended)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects type='mini' sum={true} />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'mini' &&
                                  item.mbaFormat === 'blended'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a>{SetString(item, true)}</a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='header-podmenu-info'>
                        <div className='name'>Mini MBA</div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconClock fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <TrainingPeriod type='mini' />
                          </span>
                        </div>
                        <p>{SetString(langMenu.categoryDiscMini)}</p>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects type='mini' subjects='base' />{' '}
                            {SetString(langMenu.categoryAboutManagement)}
                          </span>
                        </div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects type='mini' subjects='specialty' />{' '}
                            {SetString(langMenu.categorySpecializedSubjects)}
                          </span>
                        </div>
                      </div>
                      <div className='menu-back-link last'>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                    </div>
                  </div>
                  {/* //third */}
                </li>
                <li>
                  <a href='' className='mobile-third-toggle'>
                    Professional MBA
                  </a>

                  {/*third */}
                  <div className='header-mobile-third js-header-mobile'>
                    <div className='container'>
                      <div className='menu-back-link'>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                      <h3>Professional MBA</h3>
                      <div className='program-tabs-content'>
                        <ul className='program-options-block-tabs'>
                          <li>
                            <a href='#program-mobile-2-1' className='active'>
                              ONLINE
                            </a>
                          </li>
                          <li>
                            <a href='#program-mobile-2-2'>BLENDED</a>
                          </li>
                        </ul>
                        <div className='program-options-detail'>
                          <div
                            id='program-mobile-2-1'
                            className='program-options-block'>
                            <div className='name'>
                              {SetString(langMenu.onlineTitle)}
                              <div className='discount'>
                                <div className='size'>
                                  <Discount />
                                </div>
                                <span>
                                  <Until />
                                </span>
                              </div>
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'professional'}
                              format={'online'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={true}
                                type={'professional'}
                                format={'online'}
                              />{' '}
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatRemote)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects
                                    type='professional'
                                    sum={true}
                                  />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'professional' &&
                                  item.mbaFormat === 'online'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a>{SetString(item, true)}</a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                          <div
                            id='program-mobile-2-2'
                            className='program-options-block'>
                            <div className='name'>
                              {SetString(langMenu.blendedTitle)}
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'professional'}
                              format={'blended'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={false}
                                type={'professional'}
                                format={'blended'}
                              />
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatBlended)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects
                                    type='professional'
                                    sum={true}
                                  />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'professional' &&
                                  item.mbaFormat === 'blended'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a>{SetString(item, true)}</a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='header-podmenu-info'>
                        <div className='name'>Professional MBA</div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconClock fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <TrainingPeriod type='professional' />
                          </span>
                        </div>
                        <p>{SetString(langMenu.categoryDiscProfessional)}</p>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects
                              type='professional'
                              subjects='base'
                            />{' '}
                            {SetString(langMenu.categoryAboutManagement)}
                          </span>
                        </div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects
                              type='professional'
                              subjects='specialty'
                            />{' '}
                            {SetString(langMenu.categorySpecializedSubjects)}
                          </span>
                        </div>
                      </div>
                      <div className='menu-back-link last'>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                    </div>
                  </div>
                  {/* //third */}
                </li>
                <li>
                  <a href='' className='mobile-third-toggle'>
                    Industry MBA
                  </a>

                  {/* third */}
                  <div className='header-mobile-third js-header-mobile'>
                    <div className='container'>
                      <div className='menu-back-link'>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                      <h3>Industry MBA</h3>
                      <div className='program-tabs-content'>
                        <ul className='program-options-block-tabs'>
                          <li>
                            <a href='#program-mobile-3-1' className='active'>
                              ONLINE
                            </a>
                          </li>
                          <li>
                            <a href='#program-mobile-3-2'>BLENDED</a>
                          </li>
                        </ul>
                        <div className='program-options-detail'>
                          <div
                            id='program-mobile-3-1'
                            className='program-options-block'>
                            <div className='name'>
                              {SetString(langMenu.onlineTitle)}
                              <div className='discount'>
                                <div className='size'>
                                  <Discount />
                                </div>
                                <span>
                                  <Until />
                                </span>
                              </div>
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'industry'}
                              format={'online'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={true}
                                type={'industry'}
                                format={'online'}
                              />{' '}
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatRemote)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects type='industry' sum={true} />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'industry' &&
                                  item.mbaFormat === 'online'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a>{SetString(item, true)}</a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                          <div
                            id='program-mobile-3-2'
                            className='program-options-block'>
                            <div className='name'>
                              {SetString(langMenu.blendedTitle)}
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'industry'}
                              format={'blended'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={false}
                                type={'industry'}
                                format={'blended'}
                              />
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatBlended)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects type='industry' sum={true} />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'industry' &&
                                  item.mbaFormat === 'blended'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a>{SetString(item, true)}</a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='header-podmenu-info'>
                        <div className='name'>Industry MBA</div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconClock fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <TrainingPeriod type='industry' />
                          </span>
                        </div>
                        <p>{SetString(langMenu.categoryDiscIndustry)}</p>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects type='industry' subjects='base' />{' '}
                            {SetString(langMenu.categoryAboutManagement)}
                          </span>
                        </div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects
                              type='industry'
                              subjects='specialty'
                            />{' '}
                            {SetString(langMenu.categorySpecializedSubjects)}
                          </span>
                        </div>
                      </div>
                      <div className='menu-back-link last'>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                    </div>
                  </div>
                  {/* //third */}
                </li>
                <li>
                  <Link href='/programs/mini/online' locale='ru'>
                    <a className='mobileAllProgramsLink'>
                      {SetString(langMenu.allPrograms)}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* //second */}

          {/* header-mobile-lang */}
          <div className='header-mobile-lang js-header-mobile'>
            <div className='container'>
              <div className='menu-back-link'>
                <i></i>
                {SetString(langMenu.backBtn)}
              </div>
              <ul className='header-mobile-menu'>
                <li>
                  <Link href={`${router.pathname}`} locale='ru'>
                    <a id='switchToRuBtn'>🇷🇺&nbsp;Русский</a>
                  </Link>
                </li>
                <li>
                  <Link href={`${router.pathname}`} locale='en-US'>
                    <a id='switchToEnBtn'>🇺🇸&nbsp;English</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* //header-mobile-lang */}
        </div>
        {/* //mobile menu */}
      </header>
      <Script src='/assets/js/header.js' strategy='lazyOnload' />
    </>
  )
}

export default Header
