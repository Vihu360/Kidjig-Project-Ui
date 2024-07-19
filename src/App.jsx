import Bodybox from "./components/Bodybox"
import Eclipse from "./components/Eclipse"
import FooterText from "./components/FooterText"
import Header from "./components/Header"

function App() {
	return (
		<>
			<div className="w-full h-982px bg-bgcustom">
				<div className='w-full h-full border-radius-custom bg-bgimg '>
					<Eclipse/>
					<Header/>
					<Bodybox />
					<FooterText/>
				</div>
			</div>
		</>
	)
}

export default App
