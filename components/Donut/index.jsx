import styles from './donut.module.scss'

const Donut = () => {

  return <svg width="100%" height="100%" viewBox="0 0 42 42" className={`${styles.donut}`}>
    <circle className={`${styles.donutRing}`} cx="21" cy="21" r="15.91549430918954" fill="transparent" strokeWidth="8"></circle>
    <circle className={`${styles.donutSegment}`} cx="21" cy="21" r="15.91549430918954" fill="transparent" strokeWidth="8" strokeDasharray="80 20" strokeDashoffset="0">
    </circle>
    <g transform="translate(110,110)">
      <path d="M2862 161l-18-18c14-9 18-23 20-36 3-23 0-45-11-65-7-13-15-23-27-30s-25-12-39-12h-167v307h175c8 0 16-5 25-3 15-7 32-13 44-27 12-15 19-32 22-50 3-25-5-48-24-66zM2681 61h92a30 30 0 0122 10 30 30 0 010 41c-5 6-13 10-22 10h-92V61zm135 183a23 23 0 01-2 2 23 23 0 01-2 2 30 30 0 01-4 2 31 31 0 01-4 2 15 15 0 01-1 1h-2c-3 2-7 2-11 2h-109v-69h109a35 35 0 0126 58zm-340-39c0 9-3 16-6 24-8 14-12 22-19 30a131 131 0 01-73 44c-11 2-23 4-36 4h-1a127 127 0 01-4 0c-65-3-117-44-127-97v-2-2l-1-4v-3V0h64v183c0 26 20 48 47 56a81 81 0 0047 0c17-5 30-15 39-28a53 53 0 008-31V0h62v205zm-472-85V0h60v307h-60V179h-144v128h-61V0h61v120h144zm-414 13l-17 21-73 83-90-104v174h-61V1h21l128 153L1630 0h21v307h-61V133zm-383 119v55H987V0h58v252h162zM837 0v307h-59V0h59zM493 59v64h117v59H493v125h-58V0h215v59H493zM234 242c-3-3-3-8 0-11a7 7 0 0110 0c3 3 3 8 0 11a7 7 0 01-10 0zM44 149a7 7 0 100 14 7 7 0 000-14zm28 82c-3 3-3 8 0 10a7 7 0 0010 0c3-2 3-7 0-10a7 7 0 00-10 0zM244 80c3-3 3-8 0-11-3-2-8-2-10 0a7 7 0 000 11c2 2 7 2 10 0zM73 69c-3 3-3 8 0 11 2 2 7 2 10 0 3-3 3-8 0-11-3-2-8-2-10 0zm241-7v187c0 34-28 62-62 62H62c-34 0-62-28-62-62V62C0 28 28 0 62 0h190c34 0 62 28 62 62zm-25 94a17 17 0 00-33-4h-39c-1-13-7-26-15-35l28-28a17 17 0 10-5-5l-28 28c-10-9-22-14-35-15V58a17 17 0 10-7 0v39c-13 1-26 6-35 15L92 84a17 17 0 10-5 4l28 28c-9 10-14 23-15 36H60a17 17 0 00-33 4 17 17 0 0033 3h40a58 58 0 0014 35l-28 28a17 17 0 105 5l28-28c10 9 22 14 36 15v40a17 17 0 107 0v-40c13-1 25-6 35-14l28 28a17 17 0 105-5l-28-28c8-10 14-22 15-36h39a17 17 0 0033-3zM165 41a7 7 0 10-14 0 7 7 0 0014 0zm108 107a7 7 0 100 15 7 7 0 000-15zm-115-41a48 48 0 100 97 48 48 0 000-97zm-7 163a7 7 0 1014 0 7 7 0 00-14 0z"></path>
    </g>
    <g className={`${styles.donutText}`}>
      <text x="51%" y="51%" className={`${styles.donutNumber}`}>80<tspan className={`${styles.donutPercent}`}>%</tspan></text>
      <text x="50%" y="50%" className={`${styles.donutNote}`}>YOU</text>
      <text x="83%" y="20%" className={`${styles.donutLabel} filmhub`}>Filmhub</text>
      <text x="50%" y="76%" className={`${styles.donutLabel} you`}>Filmmaker</text>
    </g>
  </svg>
}

export default Donut;