import React from 'react'
import { ChangeTheme } from './ChangeTheme'

export const TopMenu = () => {

  return (
    <div className='topmenu' > 
        <div className='topmenu-logo'> 
          <svg width="159" height="53" viewBox="0 0 159 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_3)">
            <path className='logo-color' d="M12.8063 45H12.1977C11.1429 45 10.1286 44.8986 9.15486 44.6957C8.18114 44.4929 7.30886 44.1277 6.538 43.6003C5.80771 43.0729 5.19914 42.3426 4.71229 41.4094C4.266 40.4763 4.04286 39.2591 4.04286 37.758V8.12057C4.04286 6.66 4.266 5.46314 4.71229 4.53C5.15857 3.59686 5.74686 2.86657 6.47714 2.33914C7.20743 1.77114 8.03914 1.38571 8.97229 1.18286C9.90543 0.93943 10.8589 0.817716 11.8326 0.817716H12.8063V45ZM26.134 39.1577C26.134 39.8474 26.0123 40.5371 25.7689 41.2269C25.5254 41.9166 25.14 42.5454 24.6126 43.1134C24.0851 43.6409 23.436 44.0871 22.6651 44.4523C21.8943 44.8174 20.9814 45 19.9266 45C18.2226 45 16.7823 44.5334 15.6057 43.6003C14.4697 42.6266 13.9017 41.2877 13.9017 39.5837C13.9017 39.2591 13.9017 38.9751 13.9017 38.7317C13.9423 38.4477 14.0234 38.1434 14.1451 37.8189C14.6726 38.3057 15.3217 38.5491 16.0926 38.5491C16.7011 38.5491 17.2083 38.3666 17.614 38.0014C18.0197 37.5957 18.2226 37.0074 18.2226 36.2366V33.2546C18.5471 33.1734 18.9529 33.1329 19.4397 33.1329C20.0077 33.1329 20.6771 33.214 21.448 33.3763C22.2189 33.498 22.9491 33.782 23.6389 34.2283C24.3286 34.6746 24.9169 35.3034 25.4037 36.1149C25.8906 36.8857 26.134 37.9 26.134 39.1577ZM26.134 6.59914C26.134 7.89743 25.8906 8.932 25.4037 9.70286C24.9169 10.4737 24.3286 11.0823 23.6389 11.5286C22.9491 11.9749 22.2189 12.2791 21.448 12.4414C20.6771 12.5631 20.0077 12.624 19.4397 12.624C18.9529 12.624 18.5471 12.5834 18.2226 12.5023V9.70286C18.2226 8.97257 18.04 8.38429 17.6749 7.938C17.3097 7.45114 16.7823 7.20771 16.0926 7.20771C15.3217 7.20771 14.6726 7.45114 14.1451 7.938C14.0234 7.61343 13.9423 7.32943 13.9017 7.086C13.9017 6.802 13.9017 6.49771 13.9017 6.17314C13.9017 5.68629 13.9829 5.13857 14.1451 4.53C14.348 3.88086 14.6726 3.29257 15.1189 2.76514C15.5651 2.19714 16.1534 1.73057 16.8837 1.36543C17.6546 0.959714 18.6283 0.756856 19.8049 0.756856C20.6569 0.756856 21.4683 0.898857 22.2391 1.18286C23.01 1.46686 23.6794 1.87257 24.2474 2.4C24.8154 2.92743 25.2617 3.55629 25.5863 4.28657C25.9514 4.97629 26.134 5.74714 26.134 6.59914ZM38.8821 45C37.8273 45 36.813 44.8986 35.8393 44.6957C34.8656 44.4929 33.9933 44.1277 33.2224 43.6003C32.4921 43.0729 31.8836 42.3426 31.3967 41.4094C30.9504 40.4763 30.7273 39.2591 30.7273 37.758V8.12057C30.7273 6.74114 31.0113 5.58486 31.5793 4.65171C32.1473 3.678 32.8573 2.92743 33.7093 2.4C34.5613 1.832 35.4944 1.42629 36.5087 1.18286C37.5636 0.93943 38.5576 0.817716 39.4907 0.817716V45H38.8821ZM40.0993 19.6834H45.0287C45.0287 21.3469 44.7244 22.7466 44.1159 23.8826C43.5073 24.978 42.2699 25.5257 40.4036 25.5257H40.0993V19.6834ZM45.4547 10.9809C45.4547 10.5346 45.4141 10.0883 45.333 9.642C45.2924 9.15514 45.1707 8.72914 44.9679 8.364C44.8056 7.95828 44.5419 7.63371 44.1767 7.39029C43.8521 7.14686 43.3856 7.02514 42.777 7.02514C42.0061 7.02514 41.357 7.26857 40.8296 7.75543C40.5861 7.10629 40.4644 6.518 40.4644 5.99057C40.4644 5.34143 40.5659 4.71257 40.7687 4.104C41.0121 3.45486 41.3773 2.88686 41.8641 2.4C42.351 1.91314 42.9596 1.52772 43.6899 1.24371C44.4607 0.919142 45.3939 0.756856 46.4893 0.756856C47.7064 0.756856 48.7816 0.98 49.7147 1.42629C50.6884 1.832 51.4999 2.42029 52.149 3.19114C52.7981 3.92143 53.285 4.79371 53.6096 5.808C53.9747 6.78172 54.1573 7.83657 54.1573 8.97257V45C53.0619 45 51.9867 44.9189 50.9319 44.7566C49.9176 44.5943 48.9844 44.2697 48.1324 43.7829C47.321 43.2554 46.6719 42.4846 46.185 41.4703C45.6981 40.456 45.4547 39.0969 45.4547 37.3929V10.9809ZM68.967 34.7151C68.967 35.1614 68.9872 35.628 69.0278 36.1149C69.109 36.5611 69.2307 36.9871 69.393 37.3929C69.5958 37.758 69.8595 38.0623 70.1841 38.3057C70.5492 38.5491 71.0361 38.6709 71.6447 38.6709C72.375 38.6709 73.0241 38.4274 73.5921 37.9406C73.7138 38.2651 73.795 38.5694 73.8355 38.8534C73.9167 39.0969 73.9572 39.3809 73.9572 39.7054C73.9572 40.3546 73.8355 41.0037 73.5921 41.6529C73.3892 42.2614 73.0444 42.8091 72.5575 43.296C72.0707 43.7829 71.4418 44.1886 70.671 44.5131C69.9407 44.7971 69.0278 44.9391 67.9324 44.9391C65.4981 44.9391 63.6115 44.2089 62.2727 42.7483C60.9338 41.2877 60.2644 39.2794 60.2644 36.7234V0.696C61.3598 0.696 62.4147 0.777143 63.429 0.939429C64.4838 1.10171 65.417 1.44657 66.2284 1.974C67.0804 2.46086 67.7498 3.21143 68.2367 4.22572C68.7235 5.24 68.967 6.59914 68.967 8.30314V34.7151ZM83.6944 45H83.0858C82.031 45 81.0167 44.8986 80.043 44.6957C79.0692 44.4929 78.197 44.1277 77.4261 43.6003C76.6958 43.0729 76.0872 42.3426 75.6004 41.4094C75.1541 40.4763 74.931 39.2591 74.931 37.758V0.817716H75.9047C76.8784 0.817716 77.8318 0.93943 78.765 1.18286C79.6981 1.38571 80.5298 1.77114 81.2601 2.33914C81.9904 2.86657 82.5787 3.59686 83.025 4.53C83.4712 5.46314 83.6944 6.66 83.6944 8.12057V45ZM98.5649 45H97.9564C96.9015 45 95.8872 44.8986 94.9135 44.6957C93.9398 44.4929 93.0675 44.1277 92.2966 43.6003C91.5664 43.0729 90.9578 42.3426 90.4709 41.4094C90.0246 40.4763 89.8015 39.2591 89.8015 37.758V8.12057C89.8015 6.66 90.0246 5.46314 90.4709 4.53C90.9172 3.59686 91.5055 2.86657 92.2358 2.33914C92.9661 1.77114 93.7978 1.38571 94.7309 1.18286C95.6641 0.93943 96.6175 0.817716 97.5912 0.817716H98.5649V45ZM111.649 37.5146C111.649 39.0563 111.386 40.314 110.858 41.2877C110.371 42.2614 109.742 43.0323 108.972 43.6003C108.241 44.1277 107.43 44.4929 106.537 44.6957C105.685 44.8986 104.894 45 104.164 45H102.825V32.5851C102.825 31.7331 102.764 30.942 102.642 30.2117C102.521 29.4409 102.115 29.0554 101.425 29.0554C101.06 29.0554 100.776 29.096 100.573 29.1771C100.37 29.2583 100.168 29.4003 99.9646 29.6031L99.7821 28.9337C99.6604 28.528 99.5995 27.9194 99.5995 27.108C99.5995 25.9314 100.066 24.8563 100.999 23.8826C101.932 22.9089 103.312 22.422 105.138 22.422C107.166 22.422 108.769 23.0711 109.945 24.3694C111.122 25.6271 111.69 27.534 111.649 30.09V37.5146ZM111.832 6.59914C111.832 7.89743 111.588 8.932 111.102 9.70286C110.615 10.4737 110.026 11.0823 109.337 11.5286C108.647 11.9749 107.917 12.2791 107.146 12.4414C106.375 12.5631 105.706 12.624 105.138 12.624C104.651 12.624 104.245 12.5834 103.92 12.5023V9.70286C103.92 8.85086 103.718 8.222 103.312 7.81629C102.906 7.41057 102.399 7.20771 101.79 7.20771C101.02 7.20771 100.37 7.45114 99.8429 7.938C99.7212 7.61343 99.6401 7.32943 99.5995 7.086C99.5995 6.802 99.5995 6.49771 99.5995 6.17314C99.5995 5.68629 99.7009 5.13857 99.9038 4.53C100.147 3.88086 100.492 3.29257 100.938 2.76514C101.425 2.19714 102.034 1.73057 102.764 1.36543C103.535 0.959714 104.448 0.756856 105.503 0.756856C106.598 0.756856 107.531 0.939427 108.302 1.30457C109.114 1.66971 109.763 2.13628 110.25 2.70428C110.777 3.23171 111.162 3.86057 111.406 4.59086C111.69 5.28057 111.832 5.95 111.832 6.59914ZM126.022 45H125.413C124.359 45 123.344 44.8986 122.371 44.6957C121.397 44.4929 120.525 44.1277 119.754 43.6003C119.023 43.0729 118.415 42.3426 117.928 41.4094C117.482 40.4763 117.259 39.2591 117.259 37.758V0.817716H118.232C119.206 0.817716 120.159 0.93943 121.093 1.18286C122.026 1.38571 122.857 1.77114 123.588 2.33914C124.318 2.86657 124.906 3.59686 125.353 4.53C125.799 5.46314 126.022 6.66 126.022 8.12057V45ZM140.88 45H140.271C139.216 45 138.202 44.8986 137.228 44.6957C136.255 44.4929 135.382 44.1277 134.611 43.6003C133.881 43.0729 133.273 42.3426 132.786 41.4094C132.339 40.4763 132.116 39.2591 132.116 37.758V8.12057C132.116 6.66 132.339 5.46314 132.786 4.53C133.232 3.59686 133.82 2.86657 134.551 2.33914C135.281 1.77114 136.113 1.38571 137.046 1.18286C137.979 0.93943 138.932 0.817716 139.906 0.817716H140.88V45ZM142.158 19.6834H147.574C147.574 20.6166 147.493 21.4686 147.331 22.2394C147.209 23.0103 146.945 23.7 146.539 24.3086C146.174 24.8766 145.667 25.3229 145.018 25.6474C144.369 25.972 143.537 26.1343 142.523 26.1343H142.158V19.6834ZM154.207 6.59914C154.207 7.89743 153.964 8.932 153.477 9.70286C152.99 10.4737 152.402 11.0823 151.712 11.5286C151.023 11.9749 150.292 12.2791 149.521 12.4414C148.751 12.5631 148.081 12.624 147.513 12.624C147.026 12.624 146.621 12.5834 146.296 12.5023V9.70286C146.296 8.97257 146.113 8.38429 145.748 7.938C145.383 7.45114 144.856 7.20771 144.166 7.20771C143.395 7.20771 142.746 7.45114 142.219 7.938C142.097 7.61343 142.016 7.32943 141.975 7.086C141.975 6.802 141.975 6.49771 141.975 6.17314C141.975 5.60514 142.077 4.99657 142.279 4.34743C142.523 3.69829 142.868 3.11 143.314 2.58257C143.801 2.05514 144.409 1.62914 145.14 1.30457C145.911 0.939427 146.823 0.756856 147.878 0.756856C148.73 0.756856 149.542 0.898857 150.313 1.18286C151.083 1.46686 151.753 1.87257 152.321 2.4C152.889 2.92743 153.335 3.55629 153.66 4.28657C154.025 4.97629 154.207 5.74714 154.207 6.59914Z"/>
            </g>
            <defs>
            <filter id="filter0_d_1_3" x="0.0428467" y="0.695999" width="158.165" height="52.304" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3" result="shape"/>
            </filter>
            </defs>
          </svg>
        </div>
        <div className='menu-icons' > 
            
          <ChangeTheme />
        </div>
    </div>
  )
}