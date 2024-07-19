import React from 'react';

export default function Header() {
	return (
		<div className="flex items-center w-1512px h-[80px] left-0 top-[-2px] absolute bg-[#00000033] blur-[25px} ">
			<div className="w-[87px] h-[54px] top-[11px] left-[243px] rounded-[30px] flex items-center justify-center absolute ">
				<img
					src="https://s3-alpha-sig.figma.com/img/64fd/2ad3/fe72bd43def70cb321dc93b14a3b55fe?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjAazcXUgIjozcC0IbjfEuF9Ug4TOSYxpeHM8pcaylZIN9p2sPgtUYjZJ9g38m6Ko5gd-GwK1B0knkh-vB6pa2K~cxP4lFTqJyQjS5DJ1TBn2XLGRHXY4gJtxpXVurrQU6zm~f2StLEN0ir~Cp2lgwn5-zXUBzQfKq6R1h-ysKplZAs1HkwN4e~4FS~2xHbUactwt6XYfoxMcqktRLaKfF9dKjjuwkfc4Pb~TtbvzoH-g1V7LjvqTGf0Fv5Kklc6IsWS6COdFMzO2p9YEg8Q8KMm36~7vY32RJtp9fRmqvfWM2fBpv20EH0Mt2ZpjWC41ZfrELQMjli9~PD7l~5K6Q__"
					alt=""
				/>
			</div>

			<div className="flex justify-between w-[456px] h-[30px] absolute left-[521px] top-[23px] text-[18px] text-[#E4E6F2] font-outfit leading-[30px] font-normal">
				<div>About</div>
				<div>Services</div>
				<div>Process</div>
				<div>Work</div>
				<div>Pricing</div>
				<div>FAQs</div>
			</div>

			<div className="flex items-center justify-center absolute w-[134px] h-[53px] top-[12px] left-[1092px] border border-[#6881FF] rounded-[12px] font-outfit font-[600] text-[16px] leading-[30px] bg-opacity-0 text-[#FFFFFF]">
				Book a call
			</div>
		</div>
	);
}
