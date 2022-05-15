import { slideLeftEntrance } from 'animation'
import { Button, ItemBox, Section, Seo, TimelineCard } from 'components'
import { motion } from 'framer-motion'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { confirmPopup } from 'primereact/confirmpopup'
import { Timeline } from 'primereact/timeline'
import React, { useCallback } from 'react'
import { CertificatesProps, EducationProps } from 'types'
import { client, QUERY_GET_ALL_RESUME_DATA } from 'utils'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: QUERY_GET_ALL_RESUME_DATA,
  })

  return {
    props: {
      resumeData: data,
    },
  }
}

const Resume = ({ resumeData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  const { theme } = useTheme()

  const confirmExternalLink = useCallback(
    event => {
      confirmPopup({
        className: 'prose text-black',
        target: event.currentTarget,
        message: 'This will redirect to another page. Proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => router.push(process.env.NEXT_PUBLIC_CV_EXTERNAL!),
      })
    },
    [router]
  )

  return (
    <>
      <Seo title="handleryouth.xyz - Resume" description="Tony David Resume" />
      <main className="pt-32 w-11/12 mx-auto max-w-[68rem]">
        <h1>Resume</h1>
        <motion.div
          variants={slideLeftEntrance}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.5,
            duration: 0.3,
            staggerChildren: 0.2,
            when: 'beforeChildren',
          }}
          className="flex flex-col justify-center min-h-screen"
        >
          <Section
            title="Education"
            body={
              <div>
                <div className="hidden md:block">
                  <Timeline
                    value={resumeData.getAllEducation}
                    align="alternate"
                    content={TimelineCard}
                  />
                </div>
                <div className="flex flex-wrap gap-4 md:hidden">
                  {(resumeData.getAllEducation as EducationProps[]).map(item => (
                    <ItemBox key={item.id} {...item} />
                  ))}
                </div>
              </div>
            }
          />

          <Section
            title="Experience"
            body={
              <div>
                <div className="hidden md:block">
                  <Timeline
                    value={resumeData.getAllExperiences}
                    align="alternate"
                    content={TimelineCard}
                  />
                </div>
                <div className="flex flex-wrap gap-4 md:hidden">
                  {(resumeData.getAllExperiences as EducationProps[]).map(item => (
                    <ItemBox key={item.id} {...item} />
                  ))}
                </div>
              </div>
            }
          />

          <Section
            title="Certificates"
            body={
              <div className="flex flex-wrap gap-4">
                {(resumeData.getAllCertificate as CertificatesProps[]).map(certificate => (
                  <ItemBox key={certificate.id} {...certificate} />
                ))}
              </div>
            }
          />

          <section className="text-center py-52">
            <h1>Resume</h1>
            <Button
              label="Show Resume"
              className={`p-button-outlined  ${theme === 'light' && 'p-button-info'}`}
              onClick={confirmExternalLink}
            />
          </section>
        </motion.div>
      </main>
    </>
  )
}

export default Resume
