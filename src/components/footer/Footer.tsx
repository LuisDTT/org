import styled from 'styled-components'
import iconGithub from '../../assets/github.png'
import iconLinkedin from '../../assets/linkedin.png'
import iconInstagram from '../../assets/instagram.png'
import logo from '../../assets/Logo.png'

export const Footer = (): JSX.Element => {
	return (
		<FooterStyled>
			<div className="social">
				<a href="https://github.com/LuisDTT" target="__blank">
					<img src={iconGithub} alt="Github" />
				</a>
				<a
					href="https://www.linkedin.com/in/luis-daniel-torres-tomala-0aa5a7203/"
					target="__blank"
				>
					<img src={iconLinkedin} alt="Linkedin" />
				</a>
				<a href="https://www.instagram.com/luis_torresdev/" target="__blank">
					<img src={iconInstagram} alt="Instagram" />
				</a>
			</div>
			<img src={logo} alt="Org" />
			<strong>Desarrollado por Luis Torres</strong>
		</FooterStyled>
	)
}

const FooterStyled = styled.footer`
	background-image: url('./img/footer.png');
	width: 100%;
	display: flex;
	padding: 5%;
	align-items: center;
	box-sizing: border-box;
	background-size: cover;
	background-position: center;
	justify-content: space-between;
	color: #fff;
	font-family: 'Montserrat', sans-serif;
	font-size: 20px;
	.social {
		a {
			img {
				padding: 0 15px;
			}
		}
	}
`
