import React from 'react'

export default function About({ mode }) {
    let myStyle = {
        color: mode === "dark" ? "white" : "#042743",
        backgroundColor: mode === "dark" ? "rgb(36 74 104)" : "white",
    }

    // Code for Enable Dark Mode Button 
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    // })

    // const [btnText, setbtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === "black") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white",
    //         })
    //         setbtnText("Enable Light Mode");
    //     }
    //     else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white",
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    // }



    return (
        <div className='container' style={{ color: mode === "dark" ? "white" : "#042743" }}>
            <h2 className='my-3'>About us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button my-0.75" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils gives  you a way to analyze your text quickly and efficiently. Be it word count, character count
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed my-0.75" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong> Free To Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Textutils is a free character counter tool that provides instant character count and word count  statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed my-0.75" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong> Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle} >
                                This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc...
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                    <button onClick={toggleStyle} type="button" className="btn btn-secondary">{btnText}</button>
                </div> */}
            </div>
        </div>
    )
}