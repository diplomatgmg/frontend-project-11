import React, { type ReactElement, Suspense, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RssForm from '../components/RssForm'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../components/LanguageSelector'

const HeaderSection = (): ReactElement => {
  const { t } = useTranslation()
  const [isUrlValid, setIsUrlValid] = useState<boolean | null>(null)
  const [isRssLoaded, setIsRssLoaded] = useState<boolean>(false)

  return (
    <section className="container-fluid bg-dark p-5">
      <Container>
        <Row>
          <Col md={10} lg={8} className="mx-auto text-white">
            <h1 className="display-3">{t('rssAggregator')}</h1>
            <p className="lead">{t('startReadingRss')}</p>
            <RssForm setIsUrlValid={setIsUrlValid} setIsRssLoaded={setIsRssLoaded}/>
            <p className="mt-2 opacity-50">{t('example')}: https://lorem-rss.hexlet.app/feed?unit=second&interval=5</p>

            {isUrlValid !== null && !isUrlValid && (
              <p className="feedback position-absolute small text-danger">
                {t('LinkMustBeValidUrl')}
              </p>
            )}

            {isRssLoaded && isUrlValid !== null && isUrlValid && (
              <p className="feedback m-0 position-absolute small text-success">
                {t('rssSuccessfullyLoaded')}
              </p>
            )}

          </Col>
          <Suspense fallback="...loading">
            <LanguageSelector/>
          </Suspense>
        </Row>
      </Container>
    </section>
  )
}

export default HeaderSection
