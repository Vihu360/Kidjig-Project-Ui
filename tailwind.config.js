// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1512px': '1512px',
      },
      height: {
				'982px': '982px',
				'80px': '80px'
      },
      borderRadius: {
        custom: '0 0 120px 120px',
			},
			colors: {
				bgcustom: '#151515',
				bgheader: 'rgba(0, 0, 0, 0.2)',
			  customgradient: 'linear-gradient(90deg, #1C1C1C 0%, #E3E3E3 50.1%, #1C1C1C 100%)',


			},
			backgroundImage: {
				bgimg: "url('https://s3-alpha-sig.figma.com/img/734f/2851/757355040aa84c8180bf8a118508ec5d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npYRNpCM8oDFwPRiO6l~FbN1zG1lEJbkoYyqEMMF-YQhLEPWCeA~ccnpkAhhEHsY~x8I6q1AGF8OC-G8d53tmvcNv-l20MlCF8xh8~t7WPoissIzuWVn-KSxkF~nkA0XsvQ3lm1UFBDROoSc~zTPqgaDxWakVc27toYzWDgypXn0XvnnWO4t8pb1QfONvpg9Ec0-mSkeTKaYvRdzFfpi10X-datkpYE5pFNeIz6sy-XMSQ19krLJIX-ACuU~lUhi1KwKXGIioxv40pMTTOvI8Oxkrh0vhlQVKv7hyRyJU43AUDYs1q--ySdsumolIBFpX8bxDdUBsoWjK4WBFeb9wQ__')",
				logo: "https://s3-alpha-sig.figma.com/img/64fd/2ad3/fe72bd43def70cb321dc93b14a3b55fe?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjAazcXUgIjozcC0IbjfEuF9Ug4TOSYxpeHM8pcaylZIN9p2sPgtUYjZJ9g38m6Ko5gd-GwK1B0knkh-vB6pa2K~cxP4lFTqJyQjS5DJ1TBn2XLGRHXY4gJtxpXVurrQU6zm~f2StLEN0ir~Cp2lgwn5-zXUBzQfKq6R1h-ysKplZAs1HkwN4e~4FS~2xHbUactwt6XYfoxMcqktRLaKfF9dKjjuwkfc4Pb~TtbvzoH-g1V7LjvqTGf0Fv5Kklc6IsWS6COdFMzO2p9YEg8Q8KMm36~7vY32RJtp9fRmqvfWM2fBpv20EH0Mt2ZpjWC41ZfrELQMjli9~PD7l~5K6Q__",

				customgradient: 'linear-gradient(90deg, #1C1C1C 0%, #E3E3E3 50.1%, #1C1C1C 100%)'

			},

			fontFamily: {
        outfit: ['Outfit'],
      },

    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.border-radius-custom': {
          borderRadius: '0 0 120px 120px',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
