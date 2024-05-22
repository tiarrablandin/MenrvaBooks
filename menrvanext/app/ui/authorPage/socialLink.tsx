// components/socialLink.tsx
import { FontAwesomeIcon, GlobeAltIcon, faAmazon, faFacebook, faGoodreads, faInstagram, faTiktok } from '@/providers';
import React from 'react';

interface SocialLinkProps {
  name: string;
  link: string;
}

const socialIconMap: Record<string, { icon: any; type: 'fa' | 'hero' }> = {
  'TikTok': { icon: faTiktok, type: 'fa' },
  'Goodreads': { icon: faGoodreads, type: 'fa' },
  'Facebook': { icon: faFacebook, type: 'fa' },
  'Website': { icon: GlobeAltIcon, type: 'hero' },
  'Instagram': { icon: faInstagram, type: 'fa' },
  'Amazon': { icon: faAmazon, type: 'fa' },
};

const SocialLink: React.FC<SocialLinkProps> = ({ name, link }) => {
  const IconComponent = socialIconMap[name];
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
      {IconComponent.type === 'fa' ? (
        <FontAwesomeIcon icon={IconComponent.icon} className="h-6 w-6 text-gray-600 hover:text-gray-800" />
      ) : (
        <IconComponent.icon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
      )}
    </a>
  );
};

export default SocialLink;
