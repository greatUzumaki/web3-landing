export default function Logo() {
  return (
    <svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
      <rect width='40' height='40' rx='12' fill='url(#logoGradient)' />
      <path d='M28 14L20 8L12 14L20 20L28 14Z' fill='white' fillOpacity='0.9' />
      <path
        d='M28 26L20 20L12 26L20 32L28 26Z'
        fill='white'
        fillOpacity='0.9'
      />
      <path d='M12 14L20 20L12 26L12 14Z' fill='white' fillOpacity='0.4' />
      <path d='M28 14L20 20L28 26L28 14Z' fill='white' fillOpacity='0.4' />
      <defs>
        <linearGradient
          id='logoGradient'
          x1='0'
          y1='0'
          x2='40'
          y2='40'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--primary)' />
          <stop offset='1' stopColor='var(--primary-dark)' />
        </linearGradient>
      </defs>
    </svg>
  );
}
