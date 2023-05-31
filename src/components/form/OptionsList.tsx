import styled from 'styled-components'

interface Props {
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	value: string
	teams: Array<{
		teamName: string
		id: string
	}>
}

export const OptionsList = ({
	handleChange,
	value,
	teams
}: Props): JSX.Element => {
	return (
		<Container>
			<label htmlFor="teamSelect">Equipos</label>
			<select name="team" onChange={handleChange} required value={value}>
				<option value="" disabled defaultValue="" hidden>
					Seleccionar equipo
				</option>
				{teams.map((team) => {
					return (
						<option key={team.id} value={team.teamName}>
							{team.teamName}
						</option>
					)
				})}
			</select>
		</Container>
	)
}

const Container = styled.div`
	label {
		display: block;
		font-size: 18px;
		font-weight: 600;
		font-family: 'Montserrat', sans-serif;
		margin-bottom: 8px;
	}
	select {
		width: 100%;
		background-color: #fff;
		box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
		padding: 24px;
		border-style: none;
		outline-color: #6278f7;
	}
`
