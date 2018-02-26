import React from 'react'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Fill,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import preloader from './preloader'

const images = {
  aframe: require('./assets/aframe.png'),
  ecs: require('./assets/ecs.png'),
  html: require('./assets/html.png'),
  lightsOut: require('./assets/lights-out.png'),
  lightsOutCode: require('./assets/lights-out-render.png'),
  linus: require('./assets/linus.png'),
  pointless: require('./assets/pointless.png'),
  pointlessLogo: require('./assets/pointless-logo.svg'),
  preact: require('./assets/preact.svg'),
  preactCode: require('./assets/preactCode.png'),
  progressive: require('./assets/progressive.png'),
  react: require('./assets/react.png'),
  reactAframe: require('./assets/react-aframe.svg'),
  reactCode: require('./assets/react-code.png'),
  tutorial: require('./assets/tutorial.png'),
  vigeverse: require('./assets/vigeverse.jpg')
}

const theme = createTheme(
  {
    primary: '#fafafa',
    secondary: 'hsl(60, 1%, 16%)',
    tertiary: '#03A9FC',
    quaternary: '#ef2d5e',
    quarternary: '#ef2d5e'
  },
  {
    primary: {
      name: 'Lato',
      googleFont: true,
      styles: ['200', '400', '700']
    }
  }
)

const TEXT_BMARGIN = '0.25em'

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transitionDuration={420}
        theme={theme}
        progress="bar"
        controls={false}
      >
        <Slide transition={['fade']} bgColor="primary">
          <Heading textSize="2em" textColor="quaternary" lineHeight="1.25em">
            Building WebVR Apps with React and A-Frame
          </Heading>
          <br />
          <br />

          <Image width="40%" src={images.reactAframe} />

          <br />
          <br />
          <br />

          <Text textColor="quaternary" textSize="1em">
            Prayash Thapa <span class="spacer">|</span> Developer{' '}
            <span class="spacer">|</span>
            <Link href="https://prayash.io">prayash.io</Link>
          </Text>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading textSize="2em">
            Hi, I'm Prayash.{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
          </Heading>
          <br />
          <br />

          <Heading textSize="1.5em" textColor="#555">
            I make things at{' '}
            <Link href="http://viget.com" textColor="#f26b21">
              Viget
            </Link>
          </Heading>
        </Slide>

        <Slide transition={['slide', 'fade']} align="center center">
          <Heading textSize="2em">Sometimes we make Pointless things.</Heading>
          <br />
          <br />

          <Image width="60%" src={images.pointlessLogo} />
          <br />
          <br />

          <Text>
            <Link href="http://pointlesscorp.com">pointlesscorp.com</Link>
          </Text>
        </Slide>

        <Slide
          transition={['fade']}
          bgImage={images.pointless}
          bgSize="contain"
          bgRepeat="no-repeat"
        />

        <Slide transition={['fade']}>
          <Link href="http://code.viget.com/lights-out-vr">
            code.viget.com/lights-out-vr
          </Link>
          <br />
          <br />
          <Image width="100%" src={images.lightsOut} />
        </Slide>

        <Slide transition={['fade']}>
          <Link href="http://code.viget.com/vigeverse">
            code.viget.com/vigeverse
          </Link>
          <br />
          <br />

          <Image width="100%" src={images.vigeverse} />
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="quaternary">
          <Heading textSize="2em" textAlign="left" textColor="primary">
            What is WebVR?{' '}
            <span role="img" aria-label="wave">
              🤔
            </span>
          </Heading>
          <br />

          <Text
            textSize="1.5em"
            textAlign="left"
            textColor="primary"
            margin="0 0 0 1em"
          >
            – An open specification that makes it possible to experience VR in
            your browser.
          </Text>

          <br />

          <Text
            textSize="1.5em"
            textAlign="left"
            textColor="primary"
            margin="0 0 0 1em"
          >
            – An experimental JavaScript API that provides support for VR
            devices.
          </Text>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading textSize="2em" textAlign="left">
            A-Frame + React: A Match Made in Heaven
          </Heading>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – A-Frame's declarative API + React's architecture
          </Text>

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Tutorial that guides you from idea -> deployment.
          </Text>
          <Text textSize="1em" margin={`0 0 ${TEXT_BMARGIN} 1em`}>
            {'\t – '}
            <Link href="https://www.viget.com/articles/creating-your-first-webvr-app/">
              viget.com/articles/creating-your-first-webvr-app/
            </Link>
          </Text>
          <br />
          <br />

          <Layout>
            <Fill>
              <Image width="100%" src={images.aframe} />
            </Fill>
            <Fill>
              <Image width="87%" src={images.react} />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          transition={['fade']}
          bgImage={images.tutorial}
          bgSize="contain"
          bgRepeat="no-repeat"
        />

        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Heading
            bold={true}
            textSize="2em"
            textAlign="left"
            textColor="quaternary"
          >
            Why A-Frame?
          </Heading>
          <br />

          <Text
            textColor="secondary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Transforms custom HTML tags into 3D elements.
          </Text>
          <Text
            textColor="secondary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Provides a declarative interface to create 3D scenes.
          </Text>
          <Text
            textColor="secondary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Exposes the <Link href="three.js">three.js</Link> API to allow
            endless customization.
          </Text>
          <Text
            textColor="secondary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Hides away WebGL boilerplate and cross-platform code.
          </Text>
          <br />

          <Image width="100%" src={images.html} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading textSize="2em" textAlign="left">
            HTML is excellent at representing hierarchy and structure.
          </Heading>
          <br />

          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – It makes it easy to visualize a 3D scene.
          </Text>
          <Text
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Its declarative nature keeps the focus on{' '}
            <span class="bold">composition</span> rather than procedure.
          </Text>
          <br />
        </Slide>

        <Slide transition={['fade']}>
          <Heading textSize="2em" textAlign="left">
            ECS is a common pattern in 3D that follows the composition over
            inheritance principle.
          </Heading>
          <br />
          <br />
          <Image width="100%" src={images.ecs} />
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="secondary">
          <Heading
            bold={true}
            textSize="2em"
            textAlign="left"
            textColor="tertiary"
          >
            Why React?
          </Heading>
          <br />

          <Text
            textColor="primary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Makes state management ergonomic.
          </Text>
          <Text
            textColor="primary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Makes dynamic behavior on top of the DOM *too easy*.
          </Text>
          <Text
            textColor="primary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Transforms JSX into custom A-Frame elements.
          </Text>
          <Text
            textColor="primary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Gives us excellent architecture to build apps.
          </Text>
          <br />

          <Image width="100%" src={images.reactCode} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote textSize="1.5em">
              React is such a good idea that we will spend the rest of the
              decade continuing to explore its implications and applications.
            </Quote>
            <Cite margin="1em 0 0 1em" textColor="primary">
              Guillermo Rauch (@rauchg)
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="#2b313c">
          <Image width="40%" src={images.preact} align="left" alt="preact" />
          <br />

          <Heading
            textColor="primary"
            textSize="1.25em"
            textAlign="left"
            lineHeight="1.25em"
          >
            Give Preact a try! Smaller bundles FTW. 📦
          </Heading>
          <br />

          <Image width="80%" src={images.preactCode} alt="preact" />
        </Slide>

        <Slide
          transition={['fade']}
          bgImage={images.lightsOutCode}
          bgSize="contain"
          bgRepeat="no-repeat"
        />

        <Slide transition={['slide', 'fade']}>
          <Heading textSize="2em" textAlign="left">
            Performance
          </Heading>
          <br />

          <Text
            textColor="secondary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Lots of devices to support so older gen phones will struggle.
          </Text>
          <Text
            textColor="secondary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Benchmarking at runtime can help optimize per device.
          </Text>
          <Text
            textColor="secondary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Possible to hit 60-90 FPS on modern devices (and headsets)
          </Text>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading textSize="2em">Progressive Enhancement</Heading>
          <br />
          <br />

          <Image width="90%" src={images.progressive} />
          <Link
            textSize="0.75em"
            href="https://unboring.net/workflows/progressive-enhancement/"
          >
            [source]
          </Link>
        </Slide>

        <Slide transition={['fade']}>
          <Heading textSize="2em" textAlign="left">
            Rich Component Registry
          </Heading>

          <List>
            <ListItem textSize="1em">
              <Link href="https://etiennepinchon.github.io/aframe-material/">
                aframe-material
              </Link>
            </ListItem>
            <ListItem textSize="1em">E B D# F# B D#</ListItem>
            <ListItem textSize="1em">C G E G B D</ListItem>
            <ListItem textSize="1em">C G D G B C (capo 1)</ListItem>
            <ListItem textSize="1em">D F# A E A D (capo 3)</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading textSize="2em" textAlign="left">
            Caveats
          </Heading>

          <br />

          <Text
            textColor="secondary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Web Audio API is still experiment (audio sucks on mobile)
          </Text>
          <Text
            textColor="secondary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – WebGL perf is hard! Super tedious to optimize
          </Text>
          <Text
            textColor="secondary"
            textSize="1em"
            textAlign="left"
            margin={`0 0 ${TEXT_BMARGIN} 1em`}
          >
            – Sometimes A-Frame's abstraction hurts more than helps
          </Text>
        </Slide>

        <Slide transition={['fade']}>
          <Image width="80%" src={images.linus} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading textSize="2em">Fin.</Heading>
        </Slide>
      </Deck>
    )
  }
}
