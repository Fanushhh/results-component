import './result.scss';

export default function Result(){
    return(
        <section className="result-container">
            <h3 className="result-title">Your Result</h3> 
            <div className="result-circle">
                <p>76</p> 
                <p>of 100</p>
            </div> 
            <div className="result-description">
                <p className="result-desc">Great</p>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </section>
    )
}