import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { OptionsList } from './OptionsList'
import { Button } from './Button'
import { useState } from 'react'
import { type Data } from '../../App'
import { InputField } from './InputField'

interface Props {
	teamsInfo: Array<{
		teamName: string
		id: string
	}>
	setNewContributor: (data: Data['contributor']) => void
	createTeam: (newTeam: Data['team']) => void
}

const INITIAL_STATE1 = {
	name: '',
	booth: '',
	photo: '',
	team: '',
	id: uuid()
}

const INITIAL_STATE2 = {
	teamName: '',
	primaryColor: ''
}

export const Form = ({
	teamsInfo,
	setNewContributor,
	createTeam
}: Props): JSX.Element => {
	const [form, setForm] = useState<Data['contributor']>(INITIAL_STATE1)
	const [teamForm, setTeamForm] = useState(INITIAL_STATE2)

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
	): void => {
		const { name, value } = e.target

		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		setNewContributor(form)
		setForm(INITIAL_STATE1)
	}

	const handleTeamFormChange = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		const { name, value } = e.target
		setTeamForm({ ...teamForm, [name]: value })
	}

	const handleTeamFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		createTeam({ ...teamForm, bgColor: '#fff', id: uuid() })
		setTeamForm(INITIAL_STATE2)
	}

	return (
		<Section>
			<form onSubmit={handleSubmit}>
				<h2>Rellena el formulario para crear el colaborador.</h2>
				<InputField
					labelName="Nombre"
					name="name"
					placeholder="Ingresar nombre"
					required
					value={form.name}
					handleChange={handleChange}
				/>
				<InputField
					labelName="Puesto"
					name="booth"
					placeholder="Ingresar puesto"
					required
					value={form.booth}
					handleChange={handleChange}
				/>
				<InputField
					labelName="Foto"
					name="photo"
					placeholder="Ingresar enlace de foto"
					required
					value={form.photo}
					handleChange={handleChange}
				/>
				<OptionsList
					handleChange={handleChange}
					value={form.team}
					teams={teamsInfo}
				/>
				<Button>Crear</Button>
			</form>
			<form onSubmit={handleTeamFormSubmit}>
				<h2>Rellena el formulario para crear el Equipo.</h2>
				<InputField
					labelName="Titulo"
					name="teamName"
					placeholder="Ingresar titulo"
					required
					value={teamForm.teamName}
					handleChange={handleTeamFormChange}
				/>
				<InputField
					labelName="Color"
					name="primaryColor"
					placeholder="Ingresar el color en HEX"
					required
					value={teamForm.primaryColor}
					handleChange={handleTeamFormChange}
					type="color"
				/>
				<Button>Registrar equipo</Button>
			</form>
		</Section>
	)
}

const Section = styled.section`
	display: flex;
	justify-content: center;
	margin: 80px 50px;
	flex-wrap: wrap;
	gap: 20px;
	form {
		background: #f7f7f7;
		box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
		border-radius: 20px;
		padding: 8px 100px;
		flex: 1;
		h2 {
			font-size: 32px;
			font-weight: 400;
			color: #212121;
		}
	}
`
