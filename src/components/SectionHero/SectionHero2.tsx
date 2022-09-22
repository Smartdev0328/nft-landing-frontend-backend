import React, { FC } from 'react';
import ButtonPrimary from 'shared/Button/ButtonPrimary';
import HeroSearchForm from 'components/HeroSearchForm/HeroSearchForm';

export interface SectionHero2Props {
  children?: React.ReactNode;
  className?: string;
}

const SectionHero2: FC<SectionHero2Props> = ({ className = '', children }) => {
  return (
    <div className={`nc-SectionHero2 flex flex-col-reverse lg:flex-col relative ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-36 xl:pb-60 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%] ">
            <b>NEXUS Store</b>
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Get your 1st collector’s edition Buddies egg while egg last.
          </span>
          <div
            style={{
              display: 'flex',
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'white',
              alignItems: 'center',
              marginTop: '8px',
              marginBottom: '18px'
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.541"
              height="28.928"
              viewBox="0 0 32.541 28.928">
              <g id="FYN-icon" transform="translate(-809 -242.387)">
                <path
                  id="Path_4527"
                  data-name="Path 4527"
                  d="M706.453,5097.035l-13.518-20.705-16.047,28.928h32.541l-7.675-3.789H683.083l9.852-16.793,5.68,9.053-8.184,3.886Z"
                  transform="translate(132.112 -4833.943)"
                  fill="#fff"
                />
              </g>
            </svg>
            2,995 FYN
          </div>
          <div className="items-center button-wrapper">
            <ButtonPrimary>
              <span>Please login to purchase your buddies</span>
            </ButtonPrimary>
          </div>
        </div>
      </div>

      <div className="z-10 mb-12 lg:mb-0 lg:-mt-20 xl:-mt-48 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero2;
