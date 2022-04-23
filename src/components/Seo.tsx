import Head from 'next/head'
import { SeoProps } from 'types'

const Seo = ({ title, description }: SeoProps) => {
  return (
    <Head>
      <title>{title ?? 'handleryouth.xyz - Tony David Personal Website'}</title>
      <meta name="title" content={title ?? 'handleryouth.xyz - Tony David Personal Website'} />
      <meta
        name="description"
        content={`${
          description ??
          "Tony David's personal website with a lot of frontend projects. The page is also filled with his profile and resume as frontend engineer"
        }`}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.handleryouth.xyz/" />
      <meta
        property="og:title"
        content={title ?? 'handleryouth.xyz - Tony David Personal Website'}
      />
      <meta
        property="og:description"
        content={`${
          description ??
          "Tony David's personal website with a lot of frontend projects. The page is also filled with his profile and resume as frontend engineer"
        }`}
      />
      <meta property="og:image" content="https://i.ibb.co/YWJyXBv/handleryouth-xyz.webp" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.handleryouth.xyz/" />
      <meta
        property="twitter:title"
        content={title ?? 'handleryouth.xyz - Tony David Personal Website'}
      />
      <meta
        property="twitter:description"
        content={`${
          description ??
          "Tony David's personal website with a lot of frontend projects. The page is also filled with his profile and resume as frontend engineer"
        }`}
      />
      <meta property="twitter:image" content="https://i.ibb.co/YWJyXBv/handleryouth-xyz.webp" />
    </Head>
  )
}

export default Seo
