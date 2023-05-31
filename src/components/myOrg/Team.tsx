import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import { Contributor } from './Contributor'
import { type Data } from '../../App'

interface Props {
	team: {
		teamName: string
		bgColor: string
		primaryColor: string
		id: string
	}
	contributors: Array<Data['contributor']>
	deleteContributor: (id: string) => void
	changeColor: (color: string, team: string) => void
	changeLike: (id: string) => void
}

export const Team = ({
	team,
	contributors,
	deleteContributor,
	changeColor,
	changeLike
}: Props): JSX.Element => {
	const { primaryColor, teamName } = team
	return (
		<>
			{contributors.length > 0 && (
				<Section bgColor={hexToRgba(primaryColor, 0.5)}>
					<h3 style={{ borderBottom: `4px solid ${primaryColor}` }}>
						{teamName}
					</h3>
					<input
						type="color"
						value={primaryColor}
						className="input-color"
						onChange={(e) => {
							changeColor(e.target.value, team.id)
						}}
					/>
					<div className="contributors">
						{contributors.map((contributor, index) => (
							<Contributor
								key={index}
								contributor={contributor}
								headerColor={primaryColor}
								deleteContributor={deleteContributor}
								changeLike={changeLike}
							></Contributor>
						))}
					</div>
				</Section>
			)}
		</>
	)
}

interface StylesProps {
	bgColor: string
}

const Section = styled.section<StylesProps>`
	width: 100%;
	background-color: ${({ bgColor }) => bgColor};
	padding: 32px;
	box-sizing: border-box;
	text-align: center;
	font-size: 32px;
	position: relative;
	.input-color {
		position: absolute;
		right: 30px;
	}
	h3 {
		font-weight: 400;
		color: #212121;
		display: inline-block;
		padding-bottom: 8px;
	}
	.contributors {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
`
