// app/page.tsx
'use client'
import Banner from '@/components/Banner';
import AboutUsDemo from '../components/About';
import AudioStoriesDemo from '../components/AudioStoriesDemo';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HistoryDemo from '../components/History';
import LeadershipSection from '../components/Leaders';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="relative">
        <Hero />
        {/* <InteractiveMap /> */}
        <AboutUsDemo />
        
        <HistoryDemo />
        <AudioStoriesDemo />
        <Banner />
        {/* <LeadershipSection /> */}
        <Footer />
        {/* 
        <AudioStorytelling />
        <FestivalCalendar />
        <Leadership />
        <VisitPlanner />
        <LearnMode />
        <DailyDiscovery />
        <TravelerJournal />
        <Gallery />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}