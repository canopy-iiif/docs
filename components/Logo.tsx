import Image from "next/image";
import React from "react";

const Logo = () => (
  <div>
    <Image
      id="canopy-iiif-logo"
      data-name="canopy-iiif-icon"
      src="/docs/assets/canopy-iiif-icon.png"
      alt="Canopy IIIF"
      width="32"
      height="32"
    />
    <span>Canopy IIIF</span>
    <style jsx>{`
      span {
        display: block;
        margin-left: 0.618rem;
        font-weight: 400;
        font-size: 1.382rem !important;
        font-family: var(--canopy-display-font);
        color: var(--gray-12);
      }
      div {
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
);

export default Logo;
