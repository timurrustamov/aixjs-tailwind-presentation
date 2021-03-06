import { useScrollRestoration } from 'gatsby';

import Bio from '../sections/Bio';
import Intro from '../sections/Intro';
import TailwindFirstIntro from '../sections/TailwindFirstIntro';
import TailwindFirstLiveCoding from '../sections/TailwindFirstLiveCoding';
import ClassicCSS from '../sections/ClassicCSS';
import BemCSS from '../sections/BemCSS';
import TailwindCSS from '../sections/TailwindCSS';
import Utilities from '../sections/Utilities';
import AixJS from '../sections/AixJS';
import Performance from '../sections/Performance';
import Hover from '../sections/Hover';
import DemoTime from '../sections/DemoTime';
import Conclusion from '../sections/Conclusion';
import ClassicDesignWorkflow from '../sections/ClassicDesignWorkflow';
import TailwindDesignWorkflow from '../sections/TailwindDesignWorkflow';
import ThankYou from '../sections/ThankYou';
import { Ref } from 'react';

const Home = () => {
  const scrollRestoration = useScrollRestoration('home');

  return (
    <main
      ref={scrollRestoration.ref as Ref<HTMLElement>}
      onScroll={scrollRestoration.onScroll}
      className="h-full max-w-full overflow-hidden presentation">
      <AixJS />
      <Intro />
      <Bio />
      <TailwindFirstIntro />
      <ClassicCSS />
      <BemCSS />
      <TailwindCSS />
      <TailwindFirstLiveCoding />
      <ClassicDesignWorkflow />
      <TailwindDesignWorkflow />
      <Utilities />
      <Hover />
      <Performance />
      <DemoTime />
      <Conclusion />
      <ThankYou />
    </main>
  );
};

export default Home;
