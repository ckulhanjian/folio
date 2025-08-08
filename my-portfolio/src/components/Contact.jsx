import '../styles.css'

function Footer(props) {
    return (
        <div className="footer">
            <h1>About The <span className='artist'>Creator</span></h1>

            <div className='footer-text'>
                <div>
                    <h2>Cara <br/>Kulhanjian</h2>
                    <p className='footer-bio'>Some more info blah blah statement of purpose.
                        Click the links below to learn more.
                        Notion is cool. github has projects.
                        email me! lets chat bud (give me a job).
                    </p>
                </div>

                <img height='300' src='/me.png' className='footer-pic'/>
            </div>
            
            <div>
                {/* links */}
                <ul className='links'>
                    <li><a href="mailto:carak143@gmail.com">Email</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Notion</a></li>
                </ul>
            </div>


        </div>
    )
}

export default Footer;