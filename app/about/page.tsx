import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-[#f59e0b]">Teamify</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Empowering teams to achieve more through seamless collaboration and innovative solutions.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-black/30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="text-[#f59e0b]">Mission</span>
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  At Teamify, we believe in the power of collaboration. Our mission is to break down barriers and create a workspace where teams can thrive, innovate, and achieve their goals together.
                </p>
                <p className="text-gray-300 text-lg">
                  We're dedicated to providing cutting-edge tools that make teamwork effortless, enabling organizations of all sizes to reach their full potential.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-[#f59e0b]">Values</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Innovation */}
              <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20 hover:border-white/30 transition-all">
                <div className="w-12 h-12 bg-[#f59e0b]/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push boundaries to create solutions that revolutionize how teams work together.
                </p>
              </div>

              {/* Collaboration */}
              <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20 hover:border-white/30 transition-all">
                <div className="w-12 h-12 bg-[#f59e0b]/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork and creating tools that bring people together.
                </p>
              </div>

              {/* Excellence */}
              <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20 hover:border-white/30 transition-all">
                <div className="w-12 h-12 bg-[#f59e0b]/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, from product quality to customer support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-black/30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Meet Our <span className="text-[#f59e0b]">Team</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  name: 'Sarah Johnson', 
                  role: 'CEO & Founder', 
                  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80'
                },
                { 
                  name: 'Michael Chen', 
                  role: 'CTO', 
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
                },
                { 
                  name: 'Emma Davis', 
                  role: 'Head of Design', 
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
                },
                { 
                  name: 'James Wilson', 
                  role: 'Head of Product', 
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
                },
              ].map((member, index) => (
                <div key={index} className="group">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#f59e0b] transition-all">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-[#f59e0b]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 