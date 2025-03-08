import React from 'react';

import Hero from './components/Hero';
import CourseDetails from './components/Course';
import Testimonials from './components/Testimonials';
import ExtraFeatures from './components/Extrafeatures';
import EnrollSection from './components/Enrollment';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import BelowHero from './components/Belowhero';
import WithoutTraining from './components/Withouttraining';
import Bubble from './components/Bubbletext';
import './App.css';

function App() {
  return (
    <div className="app-container">
   
      <Hero />
      <BelowHero />
      <WithoutTraining />
      <CourseDetails />
      <Testimonials />
      <Bubble />
      <ExtraFeatures />
      <EnrollSection />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

export default App;
