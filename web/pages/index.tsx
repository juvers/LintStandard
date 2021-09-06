/* eslint-disable  @typescript-eslint/no-explicit-any */
import Head from 'next/head';
// import Image from 'next/image';
// import {GetStaticProps} from 'next';
// import {getData} from '@lib/posts';
import {HeaderLogo} from '@components/App/Header';
import {NavMenu} from '@components/App/Navigation';
import {HeroBg} from '@components/App/Hero/HeroBg';
import {HeroBackground, PlusButton, ButtonNotice} from '@components/App/Hero';
import {HeroText} from '@components/App/Hero/HeroText';
import {useState} from 'react';
import {Mouse, Scroller} from '@components/App/Hero/Mouse';
import {PlusSvg, LogoSvg} from '@assets/svgs';
import {H} from '@components/Base/Typography';
import {Row, Column, Container} from '@components/Base/Grid';
import {HR} from '@components/Base/Hr';
import {Main} from '@components/Base/Main';
import styled, {StyledComponentBase} from 'styled-components';

import {Button, LinkButton} from '../styled/button';
import {Utilities, Div} from '../styled/base';
import {Column as C, Row as R} from '../styled/grid';
import {Hero} from '../styled/hero';

// const MyComponent = styled<StyledComponentBase<'div', any, {}, never>>(Div)`
//   ${Utilities};
// `;

const createHtmlElement = (x: string, y: any) => styled<
  // eslint-disable-next-line @typescript-eslint/ban-types
  StyledComponentBase<typeof x, any, {}, never>
>(y)`
  ${Utilities};
`;

const MyComponent = createHtmlElement('div', Div);

const i = `https://hzimages.s3.us-west-2.amazonaws.com/mmp1.jpg`;
const imageArr = [
  {
    i: ``,
  },
  {
    i: `https://hzimages.s3.us-west-2.amazonaws.com/welcome-med.jpeg`,
  },
  {
    i: ``,
  },
  {
    i: `https://hzimages.s3.us-west-2.amazonaws.com/mmp3.jpg`,
  },
  {
    i: ``,
  },
  {
    i: `https://hzimages.s3.us-west-2.amazonaws.com/mmp4.jpg`,
  },
];

const sampleContent =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Illo iure, necessitatibus sunt tenetur esse asperiores voluptatem ullam debitis quo laborum repellendus exercitationem soluta autem vel at numquam dolorum maiores nisi! Aperiam, in, repudiandae et totam praesentium esse alias impedit deleniti ducimus soluta perferendis assumenda quia porro ea itaque, atque doloremque corrupti omnis natus rerum dolor. Excepturi quasi saepe atque dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda enim harum dolore iste? Amet ab dolore delectus asperiores. Maxime deserunt, harum beatae laboriosam nostrum perspiciatis illum doloremque sit est.Autem ipsam porro atque ipsa, deleniti expedita recusandae ipsum quisquam ad voluptas? Sunt eum fuga earum laboriosam, quas ducimus rerum nihil, ex deserunt suscipit, eos cum repellat voluptatibus! Repellendus, ullam.';

export default function Home(): JSX.Element {
  const [showHeader, setShowHeader] = useState(true);
  return (
    <div>
      <Head>
        <title>MMP</title>
        <meta name="description" content="MMP Concepts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <NavMenu _sx={['light']}>
          <HeaderLogo>
            <LogoSvg />
          </HeaderLogo>
        </NavMenu>

        <HeroBackground image={i}>
          <Container _sx={['opacity']}>
            {showHeader ? (
              <Row _sx={['center', 'mh100']}>
                <Column _sx={['w60', 'smallHero']} xs="12">
                  <H _sx={['center', 'uppercase', 'textShadow', 'textWhite']}>
                    Headline goes here...
                  </H>
                  <HR _sx={['white', 'smallHr']} />
                </Column>
              </Row>
            ) : (
              <Row _sx={['left', 'mh100']}>
                <Column _sx={['textWhite', 'w40', 'hideSmall', 'p5']} xs="12">
                  <H _sx={['left', 'uppercase', 'textShadow']}>2,700</H>
                  <p style={{lineHeight: '1.8'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo iure, necessitatibus sunt tenetur esse asperiores
                    voluptatem ullam debitis quo laborum repellendus
                    exercitationem soluta autem vel at numquam dolorum maiores
                    nisi! Aperiam.
                  </p>
                </Column>
              </Row>
            )}
          </Container>
          {showHeader && (
            <Mouse>
              <Scroller />
            </Mouse>
          )}

          <PlusButton
            _sx={[!showHeader && 'rotate']}
            onClick={() => setShowHeader(!showHeader)}
          >
            <PlusSvg status={!showHeader && 'rotate'} />
          </PlusButton>

          {showHeader ? (
            <ButtonNotice>{'Did you know?'}</ButtonNotice>
          ) : (
            <ButtonNotice _sx={['close']}>Close</ButtonNotice>
          )}
        </HeroBackground>
        <div>
          <Button
            primary
            outline
            // toggleCollapse
            expandSm
            onClick={() => window.alert('Clicked')}
          >
            <span>&#9776;</span>
          </Button>

          <LinkButton
            primary
            outline
            href="https://www.sanity.io/docs/getting-started-with-sanity-cli"
          >
            Link here
          </LinkButton>
          <Hero>
            <h1>Header sample</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aut
              porro perferendis, nostrum fugit qui culpa esse ipsa unde officiis
              rerum voluptates nisi vero cumque illum harum exercitationem
              molestiae consequuntur. Omnis veniam distinctio a voluptatibus
              deserunt nulla, iure, hic deleniti nemo suscipit corporis, alias
              aperiam architecto tempora perspiciatis explicabo ut
              necessitatibus quibusdam natus voluptates. Voluptate, maiores
              nesciunt. Doloremque, minima laboriosam?
            </p>
          </Hero>
          <MyComponent
            onClick={() => window.alert('clciked inside my component')}
            textRight
            p8
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum
            maiores perspiciatis beatae delectus, totam asperiores quidem!
            Aperiam eligendi omnis provident expedita ea molestiae adipisci
            voluptate? Sit officiis aliquam quasi. Nemo culpa eum sint quisquam,
            doloremque quo recusandae sapiente nulla tempore eos facere laborum
            ipsa, itaque similique quia placeat. Repellendus sapiente est,
            repellat velit impedit iste architecto possimus perferendis
            provident!
          </MyComponent>

          <R>
            <C xs={6}>{'xs={6}'}</C>
            <C xs={6}>{'xs={6}'}</C>
          </R>

          <R>
            <C>{'no props'}</C>
            <C>{'no props'}</C>
            <C>{'no props'}</C>
          </R>

          <R>
            <C xs={4}>{'xs={3}'}</C>
            <C xs={5}>{'xs={3}'}</C>
            <C xs={3}>{'xs={6}'}</C>
          </R>
        </div>
        {imageArr.map((x, y) => (
          <HeroBg key={y} image={x.i}>
            <HeroText color={'bloodred'}>
              <Row _sx={['reverse']}>
                <Column xs="12" sm="6">
                  md 8 - sm 6 xs 12
                </Column>
                <Column xs="6" md="4">
                  md 4 - xs 6
                </Column>
              </Row>
              <div>
                <h1>Title</h1>
                <p>{sampleContent}</p>
              </div>
            </HeroText>
          </HeroBg>
        ))}

        {/* <section>
          <div>{JSON.stringify(postData, null, 2)}</div>
        </section> */}
      </Main>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const postData = await getData();
//   return {
//     props: {
//       postData,
//     },
//   };
// };
