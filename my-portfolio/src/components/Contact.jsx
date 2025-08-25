import '../styles.css'
import me from '../assets/me.png'

function Footer(props) {
    return (
        <div className="footer">
            <h1>About The <span className='artist'>Creator</span></h1>

            <div className='footer-text'>
                <div>
                    <h2>Cara <br/>Kulhanjian</h2>
                    <p className='footer-bio'>Hi! I'm Cara Kulhanjian. I am interested in using
                        technology to improve the lives of others! Both data-driven and creative, I want to change
                        how we interact with technology for both users and workers alike.
                        Click the links below to learn more and connect with me! Feel free to reach through
                        email or linkedin, I'd love to chat!
                    </p>
                </div>

                <img height='300' src={me} className='footer-pic'/>
            </div>
            
            <div>
                {/* links */}
                <ul className='links'>
                    <li><a href="mailto:carak143@gmail.com" target="_blank">Email</a></li>
                    <li><a href="https://www.linkedin.com/in/cara-kulhanjian/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/ckulhanjian" target="_blank">GitHub</a></li>
                    <li><a href="#" target="_blank">Portfolio</a></li>
                    <li><a href="https://www.notion.so/templates/essential-school-dashboard-simple" target="_blank">Notion</a></li>
                </ul>
            </div>


        </div>
    )
}

export default Footer;