import headerImg from '../../assets/Header@2x.png'
import styled from 'styled-components'

export const Header = (): JSX.Element => {
	return (
		<HeaderStyled>
			<img src={headerImg} alt="Header illustration" />
		</HeaderStyled>
	)
}

const HeaderStyled = styled.header`
	display: flex;
	justify-content: center;
	background-color: #6278f7;
	img {
		max-width: 100%;
		max-height: 500px;
	}
`
