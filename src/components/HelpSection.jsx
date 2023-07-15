import './HelpSection.css'

const HelpSection = () => {
  return (
    <section className="helpSection_container" id='helpSection_container'>
        <div className="helpSection__left">
            <img src="helpSection.png" alt="help section" />
        </div>
        <div className="helpSection__right">
            <h2 className="helpSection__title">Follow 3 simple steps to generate ideas:</h2>
            <ol className="helpSection__list">
                <li className="helpSection__listItem">Enter your company or describe your project.</li>
                <li className="helpSection__listItem">Choose a topic you want to generate ideas on.</li>
                <li className="helpSection__listItem">Click on the generate button to generate ideas.</li>
            </ol>
            <p className="helpSection__description">Only three easy steps. Once the ideas are generated you can save them by signing up.</p>
        </div>
    </section>
  )
}

export default HelpSection