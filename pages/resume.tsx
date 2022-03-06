import { Timeline } from 'primereact/timeline';
import Head from 'next/head';
import { ItemBox, Section, TimelineCard } from 'components';
import { confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { ItemBoxProps } from 'types';

const Resume = () => {
  const router = useRouter();
  const events = [
    {
      title: 'Saint Thomas 1 Medan Senior High School',
      time: '2016 - 2019',
      description:
        'Here I focus on science. When I was in high school, I was active in several organizations such as the choir and the Olympic committee. I also won several Olympic medals in the computer branch',
    },
    {
      title: 'Sepuluh Nopember Institute of Technology',
      time: '2019 - 2023',
      description:
        'Here I majored in electrical engineering with a focus on the topic of telecommunications. here I follow several organizations such as IEEE ITS, KMK ITS, and also Evolution ITS. when I was in college I was also active in the world of frontend engineering and liked to experiment with new projects',
    },
  ];

  const experienceEvents = [
    {
      title: 'Frontend Engineer at PT. Super Giga Generasi',
      time: '2021 - Present',
      description:
        'I was assigned to develop a content management system (CMS) using React as the main framework',
    },
  ];

  const certificateEvents: ItemBoxProps[] = [
    {
      title: 'GUI Development with Python and Tkinter',
      company: 'Udemy',
      time: 'October 2020',
    },
    {
      title: 'The Complete Python Course | Learn Python by doing',
      company: 'Udemy',
      time: 'September 2020',
    },
    {
      title: 'Scientific Paper Training',
      company: 'Science Hunter Indonesia',
      time: 'May 2020',
    },
  ];

  const confirmExternalLink = useCallback(
    event => {
      confirmPopup({
        className: 'prose text-black',
        target: event.currentTarget,
        message: 'This will redirect to another page. Proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () =>
          router.push(
            'https://drive.google.com/file/d/1cK6ETW4kmdUYgf1eW8cfMEfSFljuJa82/view?usp=sharing'
          ),
      });
    },
    [router]
  );

  return (
    <>
      <Head>
        <title>Tony David Personal Website</title>
        <meta name="description" content="Tony David Resume" />
        <meta
          name="keywords"
          content="NextJS, Tailwind, React, Redux, Tony David, handleryouth, Resume"
        />
      </Head>
      <main className="pt-32 w-11/12 mx-auto max-w-[68rem]">
        <h1>Resume</h1>

        <div className="min-h-screen flex flex-col  justify-center">
          <Section
            title="Education"
            body={
              <div>
                <div className="hidden md:block">
                  <Timeline value={events} align="alternate" content={TimelineCard} />
                </div>
                <div className="flex flex-wrap gap-4 md:hidden">
                  {events.map((item, index) => (
                    <ItemBox key={index} {...item} />
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
                  <Timeline value={experienceEvents} align="alternate" content={TimelineCard} />
                </div>
                <div className="flex flex-wrap gap-4 md:hidden">
                  {experienceEvents.map((item, index) => (
                    <ItemBox key={index} {...item} />
                  ))}
                </div>
              </div>
            }
          />

          <Section
            title="Certificates"
            body={
              <div className="flex flex-wrap gap-4">
                {certificateEvents.map((certificate, index) => (
                  <ItemBox key={index} {...certificate} />
                ))}
              </div>
            }
          />

          <section className="text-center py-52">
            <h1>Resume</h1>
            <Button
              label="Show Resume"
              className="p-button-raised p-button-info p-button-text"
              onClick={confirmExternalLink}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default Resume;
