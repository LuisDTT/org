import styled from 'styled-components'
import { type Data } from '../../App'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface Props {
	contributor: Data['contributor']
	headerColor: string
	deleteContributor: (id: string) => void
	changeLike: (id: string) => void
}

export const Contributor = ({
	contributor,
	headerColor,
	deleteContributor,
	changeLike
}: Props): JSX.Element => {
	const { booth, name, photo, id, like } = contributor
	return (
		<Container>
			<Header className="header" style={{ background: headerColor }}>
				<img src={photo} alt="Contributor Avatar" />
				<button
					className="delete-icon"
					onClick={() => {
						deleteContributor(id)
					}}
				>
					X
				</button>
			</Header>
			<div className="info">
				<h4>{name}</h4>
				<h5>{booth}</h5>
				{like ? (
					<AiFillHeart
						onClick={() => {
							changeLike(id)
						}}
						color="#f00"
						style={{ cursor: 'pointer' }}
					/>
				) : (
					<AiOutlineHeart
						onClick={() => {
							changeLike(id)
						}}
						style={{ cursor: 'pointer' }}
					/>
				)}
			</div>
		</Container>
	)
}

const Header = styled.div`
	border-radius: 10px 10px 0 0;
	position: relative;
	img {
		width: 100px;
		border-radius: 50%;
		position: relative;
		bottom: -50px;
	}
	.delete-icon {
		position: absolute;
		height: 25px;
		width: 25px;
		top: -30px;
		right: -30px;
		margin: 15px;
		font-size: 20px;
		font-family: 'Montserrat', sans-serif;
		color: #fff;
		cursor: pointer;
		font-weight: 800;
		background-color: transparent;
		background-color: #3636365d;
		border-radius: 50%;
		border-style: none;
	}
`

const Container = styled.div`
	width: 280px;
	margin-bottom: 24px;
	.header {
	}

	.info {
		background: #fff;
		box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
		border-radius: 0 0 10px 10px;
		padding-top: 90px;
		padding-bottom: 40px;
		min-height: 100px;
		font-family: 'Montserrat', sans-serif;
		h4 {
			color: #6278f7;
			font-size: 18px;
			line-height: 22pz;
			font-weight: bold;
			margin-bottom: 8px;
		}
		h5 {
			font-size: 18px;
			line-height: 22px;
			color: #212121;
			padding: 0 24px;
			font-weight: 400;
			margin: 0;
		}
	}
`
