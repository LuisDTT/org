import styled from 'styled-components'

interface Props {
	children: JSX.Element | JSX.Element[] | string
}

export const Button = ({ children }: Props): JSX.Element => {
	return <ButtonStyled>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
	background-color: #6278f7;
	border-radius: 10px;
	font-weight: 700;
	font-family: 'Montserrat', sans-serif;
	padding: 24px 32px;
	border: none;
	color: #fff;
	margin: 32px 0;
	cursor: pointer;
	:hover {
		color: #95ffd4;
	}
`
