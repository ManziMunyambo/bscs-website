import React from 'react';
import Navbar from '../components/Navbar';
import discordLogo from '../assets/discord-logo-trans.png';
import instagramLogo from '../assets/instagram-logo-trans.png';
import linkedinLogo from '../assets/linkedin-logo-trans.png';

export default function Socials() {
    const socialLinks = [
        {
            name: 'Join the Discord',
            url: 'https://discord.gg/sRmS5hKqqQ',
            bgColor: 'bg-[#ea3231] hover:opacity-90',
            logo: discordLogo,
            alt: 'Discord Logo',
        },
        {
            name: 'Follow Our Instagram',
            url: 'https://www.instagram.com/uwinbscs?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==',
            bgColor: 'bg-[#f1c200] hover:opacity-90',
            logo: instagramLogo,
            alt: 'Instagram Logo',
        },
        {
            name: 'Check Out the LinkedIn',
            url: 'https://www.linkedin.com/company/uwindsor-bscs/posts/?feedView=all',
            bgColor: 'bg-[#216831] hover:opacity-90',
            logo: linkedinLogo,
            alt: 'LinkedIn Logo',
        },
    ];

    return (
        <div className="min-h-screen bg-[#1e1e1e] text-white">
            <Navbar />

            <main className="max-w-xl mx-auto px-4 py-16 text-center flex flex-col items-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-10">
                    Follow Our Socials!
                </h1>

                <div className="w-full flex flex-col gap-6">
                    {socialLinks.map((item) => (
                        <a
                          key={item.name}
                          href={item.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`w-full py-4 px-6 rounded-lg flex items-center justify-start gap-4 text-white font-bold text-lg shadow-md transition-transform duration-150 active:scale-95 ${item.bgColor}`}
                        >
                            <div className='p-2 rounded flex items-center justify-center w-20 h-20 flex-shrink-0'>
                                <img
                                  src={item.logo}
                                  alt={item.alt}
                                  className='w-full h-full object-contain'
                                />
                            </div>

                            <span className='flex-1 text-center pr-12'>
                                {item.name}
                            </span>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}