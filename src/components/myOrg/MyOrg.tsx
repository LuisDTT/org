import styled from 'styled-components'
import addIcon from '../../assets/addIcon.png'

interface Props {
	handleClick: () => void
}

export const MyOrg = ({ handleClick }: Props): JSX.Element => {
	return (
		<Section>
			<h3>Mi organizacion</h3>
			<Button onClick={handleClick}>
				<img src={addIcon} alt="Add" />
			</Button>
		</Section>
	)
}

const Section = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	h3 {
		color: #6278f7;
		font-size: 40px;
		font-weight: 400;
		padding-bottom: 24px;
		border-bottom: 4px solid #6278f7;
	}
`

const Button = styled.button`
	cursor: pointer;
	border-radius: 50%;
	border-style: none;
	height: 108px;
	width: 108px;
	background-color: transparent;

	@media (min-width: 1000px) {
		position: absolute;
		right: 25%;
	}
`
