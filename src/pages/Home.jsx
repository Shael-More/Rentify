import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const trustFeatures = [
  {
    icon: 'solar_power',
    label: 'Solar-Ready',
    desc: 'Off-grid power for all your devices',
  },
  {
    icon: 'pets',
    label: 'Pet-Friendly',
    desc: 'Bring your four-legged co-pilot',
  },
  {
    icon: 'verified_user',
    label: '24/7 Roadside',
    desc: 'Support wherever the road takes you',
  },
  {
    icon: 'handshake',
    label: 'Free Cancellation',
    desc: 'Plans change — we get it',
  },
];

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className='hero-section'>
        {/* Parallax Background */}
        <div ref={heroRef} className='parallax' />
        {/* Gradient Overlay */}
        <div className='gradient-overlay' />

        {/* Hero Content */}
        <div className='hero-content'>
          <div className='social-container'>
            {/* Social proof badge */}
            <div className='social-proof-badge'>
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className='material-symbols-outlined'>
                  star
                </span>
              ))}
              <span>4.9/5 · 2,400+ road trips</span>
            </div>

            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>
              Premium campervans built for every terrain. Sleep under stars in
              Moab, surf mornings in Big Sur, or work remotely from a mountain
              meadow.
            </p>

            <div className='cta-container'>
              <Link to='/vans' className='home-container-btns find-btn '>
                <span
                  className='material-symbols-outlined'
                  style={{ fontSize: 20 }}
                >
                  rv_hookup
                </span>
                Find your van
              </Link>
              <Link
                to='/adventures'
                className='home-container-btns explore-btn'
              >
                <span
                  className='material-symbols-outlined'
                  style={{ fontSize: 20 }}
                >
                  explore
                </span>
                Explore routes
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='scroll-indicator'>
          <span>Scroll</span>
          <div className='scroll' />
        </div>
      </section>

      {/* Trust Strip */}
      <section className='trust-section'>
        <div className='trust-points'>
          {trustFeatures.map((feat) => (
            <div key={feat.label} className='trust-container'>
              <div className='trust-feature'>
                <span className='feat-icon material-symbols-outlined'>
                  {feat.icon}
                </span>
              </div>
              <div>
                <div className='feat-label'>{feat.label}</div>
                <div className='feat-desc'>{feat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
