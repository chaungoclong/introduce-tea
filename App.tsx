import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GuideSteps from './components/GuideSteps';
import Gallery from './components/Gallery';
import FeedbackForm from './components/FeedbackForm';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GuideSteps />
        <Gallery />
        <FeedbackForm />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;