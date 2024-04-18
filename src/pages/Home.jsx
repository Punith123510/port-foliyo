import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

function Home() {
  const params = useParams();
  const navigate = useNavigate();
  const userId = '65b3a22c01d900e96c4219ae';
  const BASE_URL = 'https://portfolio-backend-30mp.onrender.com/api/v1';
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Define helper functions before they are called within the component
  const getSortedFilteredItems = (items) => {
    return items?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence) || [];
  };

  const getFilteredItems = (items, isEducation = null) => {
    return items?.filter((item) => item.enabled && (isEducation === null || item.forEducation === isEducation)) || [];
  };

  useEffect(() => {
    document.cookie = `portfolio-name=portfolio1`;

    const fetchUserData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/get/user/${params?.user ?? userId}`);
        const userData = await response.json();
        document.title = `${userData?.user?.about?.name} - ${userData?.user?.about?.title}`;
        setUser(userData?.user);
        setIsLoading(false);
        document.body.classList.remove('loaded');
      } catch (error) {
        navigate('/');
        setIsLoading(false);
        console.error('Error fetching user data:', error)
        
      }
    };

    fetchUserData();
  }, [params?.user, userId, navigate]);

  const sortedFilteredSkills = getSortedFilteredItems(user?.skills);
  const sortedFilteredProject = getSortedFilteredItems(user?.projects);
  const filteredServices = getFilteredItems(user?.services);
  const filteredTestimonials = getFilteredItems(user?.testimonials);
  const filteredSocialHandles = getFilteredItems(user?.social_handles);
  const filteredEducation = getFilteredItems(user?.timeline, true);
  const filteredExperience = getFilteredItems(user?.timeline, false);

  


  if (isLoading) {
    return <div className="w-full h-screen bg-black flex items-center justify-center text-center">Loading...</div>;
  }

  return (
    <>
      <Header socialHandles={filteredSocialHandles} />
      <Hero heroData={user?.about} />
      <About aboutData={user?.about} />
      <Skills skills={sortedFilteredSkills} />
      <Projects projects={sortedFilteredProject} />
      <Services services={filteredServices} />
      <Timeline education={filteredEducation} experience={filteredExperience} />
      <Testimonial testimonials={filteredTestimonials} />
      <Contact contactData={user?.about} />
    </>
  );
}

export default Home;
