import { slideLeftEntrance } from 'animation'
import { Card, Seo } from 'components'
import { motion } from 'framer-motion'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ProjectData } from 'types'
import { client, QUERY_GET_ALL_PROJECTS } from 'utils'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: QUERY_GET_ALL_PROJECTS,
  })

  return {
    props: {
      staticProject: data,
    },
  }
}

const Project = ({ staticProject }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo
        title="handleryouth.xyz - Web Projects"
        description="Personal projects that you can use as ideas for web developer"
      />
      <main className="w-11/12 mx-auto max-w-[68rem]">
        <h1 className="pt-32">Web Projects</h1>
        <div className="flex flex-wrap justify-center md:justify-between gap-x-4 gap-y-5  pb-16  min-h-screen">
          {staticProject.getAllProject.length ? (
            (staticProject.getAllProject as ProjectData[]).map(item => {
              return (
                <motion.div
                  key={item.id}
                  variants={slideLeftEntrance}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <Card
                    description={item.description}
                    image={item.image}
                    linkDemo={item.linkDemo}
                    linkRepo={item.linkRepo}
                    title={item.title}
                  />
                </motion.div>
              )
            })
          ) : (
            <div className="min-h-screen flex items-center justify-center">
              <p>No Project for now</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default Project
