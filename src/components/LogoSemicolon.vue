<template>

  <div id="logo-semicolon">
    <svg width="100%" height="100%" viewBox="0 0 4267 4267">

      <rect
        x="1115" y="170"
        width="1625" height="1625"
        style="fill: url(#raspberry);"
      />

      <path
        d="M1526.24,2981.3l-0,-1620.12l1619.56,-0l0,1487.91c0,839.151 -986.656,1211.95 -986.656,1211.95l-270.99,-311.808c-33.405,-38.565 -26.368,-97.117 14.544,-127.613c358.818,-268.269 358.724,-507.638 358.724,-507.638l0.188,-132.68l-735.371,0Z"
        style="fill: url(#lemon);"
      />

      <path
        d="M1354.64,1966.69l-409.299,-0.001l0,-1966.69l1966.69,-0l-0,1188.16l409.298,-0l0,1661.48c0,386.876 -178.843,689.114 -397.186,910.888c-311.732,316.632 -701.688,463.424 -701.688,463.424l-113.065,42.721l-350.371,-403.145l-0.094,-0.109c-99.538,-114.916 -79.834,-289.45 41.807,-380.259c172.746,-128.959 245.031,-259.919 273.125,-327.744l-719.219,0l-0,-1188.72Zm1383.83,-778.536l-0,-1014.59l-1619.56,-0l0,1619.56l235.734,-0l-0,-604.971l1383.83,-0Zm-1210.26,173.565l-0,1620.12l735.371,0l-0.188,132.68c0,0 0.286,239.626 -358.724,507.638c-40.89,30.525 -47.949,89.048 -14.544,127.613l270.99,311.808c-0,0 986.656,-372.799 986.656,-1211.95l0,-1487.91l-1619.56,-0Z"
        style="fill: var(--blackberry);"
      />

      <defs>
        <linearGradient
          id="raspberry"
          x1="0" y1="0" x2="1" y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(2.8686e-13,4684.77,-4684.77,2.8686e-13,2007.19,107.263)"
        >
          <stop
            offset="0"
            style="
              stop-color: var(--raspberry-tint);
              stop-opacity: 1;
          "/>
          <stop
            offset="1"
            style="
              stop-color: var(--raspberry-shade);
              stop-opacity: 1;
          "/>
        </linearGradient>

        <linearGradient
          id="lemon"
          x1="0" y1="0" x2="1" y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(2.8686e-13,4684.77,-4684.77,2.8686e-13,2416.49,-696.483)"
        >
          <stop
            offset="0"
            style="
              stop-color: var(--lemon-tint);
              stop-opacity: 1;
          "/>
          <stop
            offset="1"
            style="
              stop-color: var(--lemon-shade);
              stop-opacity: 1;
          "/>
        </linearGradient>
      </defs>

    </svg>
  </div>

</template>





<style scoped lang="scss">

  #logo-semicolon {

    padding: 0;


    @media (min-width: 500px) { padding: calc(var(--spacing-md) * .8); }
    @media (min-width: 800px) { padding: calc(var(--spacing-sm) * .75); }

  }

</style>