import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import shyanPfp from '../assets/shyan-pfp.png';
import gayanPfp from '../assets/gayan-pfp.jpeg';
import dunalPfp from '../assets/dunal-pfp.jpeg';
import akithPfp from '../assets/akith-pfp.jpeg';
import sanupaPfp from '../assets/sanupa-pfp.jpeg';

gsap.registerPlugin(ScrollTrigger);
export function Team() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const teamMembers = [
  {
    name: 'Akith Nanayakkara',
    role: t.team.roles.lead,
    image: akithPfp,
    linkedin: 'https://www.linkedin.com/in/akith-nanayakkara-0abb10332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/akith20233080-del',
    email: 'Akithnanayakkara2021@gmail.com'
  },
  {
    name: 'Raphael Wijesekera',
    role: t.team.roles.frontend,
    image: shyanPfp,
    linkedin: 'https://www.linkedin.com/in/shyan-wijesekera',
    github: 'hhttps://github.com/shyanraphael',
    email: 'shyanraphael@gmail.com'
  },
  {
    name: 'Sanupa Indigahawela',
    role: t.team.roles.backend,
    image: sanupaPfp,
    linkedin: 'https://www.linkedin.com/in/sanupa-indigahawela',
    github: 'https://github.com/SanviduIndi',
    email: 'sanupasanviduindi@gmail.com'
  },
  {
    name: 'Dunal Senara',
    role: t.team.roles.designer,
    image: dunalPfp,
    linkedin: 'https://www.linkedin.com/in/dunal-senara-00034b39a/',
    github: 'https://github.com/dunalsenara',
    email: 'senaradunal@gmail.com'
  },
  {
    name: 'Gayan Nanayakkara ',
    role: t.team.roles.mobile,
    image: gayanPfp,
    linkedin: 'https://www.linkedin.com/in/gayan-sampath-58715b283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/gayannanayakkara',
    email: 'gsnanayakkara345@gmail.com'
  },
  {
    name: 'Danith Bandara',
    role: t.team.roles.qa,
    image:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'sanduni@srimaps.lk'
  }];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%'
            }
          }
        );
      }
      // Team cards stagger
      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 80,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%'
            }
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const socialIcons = card.querySelector('[data-social-icons]');
    gsap.to(card, {
      y: -10,
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });
    if (socialIcons) {
      gsap.to(socialIcons.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: 'back.out(2)'
      });
    }
  };
  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const socialIcons = card.querySelector('[data-social-icons]');
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
    if (socialIcons) {
      gsap.to(socialIcons.children, {
        opacity: 0,
        y: 10,
        duration: 0.2
      });
    }
  };
  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 bg-[var(--bg-secondary)]">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-[var(--text-primary)] mb-4">
            {t.team.title}
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {teamMembers.map((member, index) =>
          <div
            key={index}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
            className="relative glass rounded-2xl overflow-hidden border border-[var(--border-color)] cursor-pointer">

              {/* Profile Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--accent-primary)] font-semibold mb-4">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div data-social-icons className="flex items-center space-x-3">
                  <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 transform translate-y-2 w-10 h-10 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                  aria-label={`${member.name} LinkedIn`}>

                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 transform translate-y-2 w-10 h-10 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                  aria-label={`${member.name} GitHub`}>

                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                  href={`mailto:${member.email}`}
                  className="opacity-0 transform translate-y-2 w-10 h-10 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                  aria-label={`Email ${member.name}`}>

                    <MailIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
