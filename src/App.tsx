import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Form } from './components/form/Form'
import { Header } from './components/header/Header'
import { MyOrg } from './components/myOrg/MyOrg'
import { Team } from './components/myOrg/Team'
import { Footer } from './components/footer/Footer'

export const INITIAL_TEAMS = [
	{
		id: 't1',
		teamName: 'Programacion',
		bgColor: '#d9f7e9',
		primaryColor: '#57C278'
	},
	{
		id: 't2',
		teamName: 'Front end',
		bgColor: '#E8F8FF',
		primaryColor: '#82CFFA'
	},
	{
		id: 't3',
		teamName: 'Data science',
		bgColor: '#F0F8E2',
		primaryColor: '#A6D157'
	},
	{
		id: 't4',
		teamName: 'Devops',
		bgColor: '#FDE7E8',
		primaryColor: '#E06B69'
	},
	{
		id: 't5',
		teamName: 'UX y diseño',
		bgColor: '#FAE9F5',
		primaryColor: '#DB6EBF'
	},
	{
		id: 't6',
		teamName: 'Movil',
		bgColor: '#FFF5D9',
		primaryColor: '#FFBA05'
	},
	{
		id: 't7',
		teamName: 'Innovacion y gestion',
		bgColor: '#FFEEDF',
		primaryColor: '#FF8A29'
	}
]

export interface Data {
	contributor: {
		name: string
		booth: string
		photo: string
		team: string
		id: string
		like: boolean
	}
	team: {
		teamName: string
		id: string
		bgColor: string
		primaryColor: string
	}
}

export interface States {
	contributors: Array<Data['contributor']>
	teams: Array<Data['team']>
}

function App(): JSX.Element {
	const [toggleForm, setToggleForm] = useState(true)
	const [infoContributors, setInfoContributors] = useState<
		States['contributors']
	>([
		{
			name: 'Christian Velasco',
			booth: 'Head de Alura e instructor',
			photo: 'https://github.com/christianpva.png ',
			team: 'Programacion',
			id: uuid(),
			like: true
		},
		{
			name: 'Jeanmarie Quijada',
			booth: 'Instructora en Alura Latam',
			photo: 'https://github.com/JeanmarieAluraLatam.png ',
			team: 'Programacion',
			id: uuid(),
			like: false
		},
		{
			name: 'Genesys Rondón',
			booth: 'Desarrolladora de software e instructora',
			photo: 'https://github.com/genesysaluralatam.png',
			team: 'Programacion',
			id: uuid(),
			like: true
		},
		{
			name: 'Jose Gonzalez',
			booth: 'Dev. FullStack',
			photo: 'https://github.com/JoseDarioGonzalezCha.png',
			team: 'Programacion',
			id: uuid(),
			like: true
		},
		{
			name: 'Christian Velasco',
			booth: 'Head de Alura e instructor',
			photo: 'https://github.com/christianpva.png ',
			team: 'Front end',
			id: uuid(),
			like: true
		},
		{
			name: 'Jeanmarie Quijada',
			booth: 'Instructora en Alura Latam',
			photo: 'https://github.com/JeanmarieAluraLatam.png ',
			team: 'Front end',
			id: uuid(),
			like: true
		},
		{
			name: 'Genesys Rondón',
			booth: 'Desarrolladora de software e instructora',
			photo: 'https://github.com/genesysaluralatam.png',
			team: 'Front end',
			id: uuid(),
			like: true
		},
		{
			name: 'Jose Gonzalez',
			booth: 'Dev. FullStack',
			photo: 'https://github.com/JoseDarioGonzalezCha.png',
			team: 'Front end',
			id: uuid(),
			like: true
		},
		{
			name: 'Christian Velasco',
			booth: 'Head de Alura e instructor',
			photo: 'https://github.com/christianpva.png ',
			team: 'Data science',
			id: uuid(),
			like: true
		},
		{
			name: 'Jeanmarie Quijada',
			booth: 'Instructora en Alura Latam',
			photo: 'https://github.com/JeanmarieAluraLatam.png ',
			team: 'Data science',
			id: uuid(),
			like: true
		},
		{
			name: 'Genesys Rondón',
			booth: 'Desarrolladora de software e instructora',
			photo: 'https://github.com/genesysaluralatam.png',
			team: 'Data science',
			id: uuid(),
			like: true
		},
		{
			name: 'Jose Gonzalez',
			booth: 'Dev. FullStack',
			photo: 'https://github.com/JoseDarioGonzalezCha.png',
			team: 'Data science',
			id: uuid(),
			like: true
		},
		{
			name: 'Christian Velasco',
			booth: 'Head de Alura e instructor',
			photo: 'https://github.com/christianpva.png ',
			team: 'Devops',
			id: uuid(),
			like: true
		},
		{
			name: 'Jeanmarie Quijada',
			booth: 'Instructora en Alura Latam',
			photo: 'https://github.com/JeanmarieAluraLatam.png ',
			team: 'Devops',
			id: uuid(),
			like: true
		},
		{
			name: 'Genesys Rondón',
			booth: 'Desarrolladora de software e instructora',
			photo: 'https://github.com/genesysaluralatam.png',
			team: 'Devops',
			id: uuid(),
			like: true
		},
		{
			name: 'Jose Gonzalez',
			booth: 'Dev. FullStack',
			photo: 'https://github.com/JoseDarioGonzalezCha.png',
			team: 'Devops',
			id: uuid(),
			like: true
		},
		{
			name: 'Christian Velasco',
			booth: 'Head de Alura e instructor',
			photo: 'https://github.com/christianpva.png ',
			team: 'UX y diseño',
			id: uuid(),
			like: true
		},
		{
			name: 'Jeanmarie Quijada',
			booth: 'Instructora en Alura Latam',
			photo: 'https://github.com/JeanmarieAluraLatam.png ',
			team: 'UX y diseño',
			id: uuid(),
			like: true
		},
		{
			name: 'Genesys Rondón',
			booth: 'Desarrolladora de software e instructora',
			photo: 'https://github.com/genesysaluralatam.png',
			team: 'UX y diseño',
			id: uuid(),
			like: true
		},
		{
			name: 'Jose Gonzalez',
			booth: 'Dev. FullStack',
			photo: 'https://github.com/JoseDarioGonzalezCha.png',
			team: 'UX y diseño',
			id: uuid(),
			like: true
		},

		{
			name: 'Christian Velasco',
			booth: 'Head de Alura e instructor',
			photo: 'https://github.com/christianpva.png ',
			team: 'Movil',
			id: uuid(),
			like: true
		},
		{
			name: 'Jeanmarie Quijada',
			booth: 'Instructora en Alura Latam',
			photo: 'https://github.com/JeanmarieAluraLatam.png ',
			team: 'Movil',
			id: uuid(),
			like: true
		},
		{
			name: 'Genesys Rondón',
			booth: 'Desarrolladora de software e instructora',
			photo: 'https://github.com/genesysaluralatam.png',
			team: 'Movil',
			id: uuid(),
			like: true
		},
		{
			name: 'Jose Gonzalez',
			booth: 'Dev. FullStack',
			photo: 'https://github.com/JoseDarioGonzalezCha.png',
			team: 'Movil',
			id: uuid(),
			like: true
		},
		{
			name: 'Christian Velasco',
			booth: 'Head de Alura e instructor',
			photo: 'https://github.com/christianpva.png ',
			team: 'Innovacion y gestion',
			id: uuid(),
			like: true
		},
		{
			name: 'Jeanmarie Quijada',
			booth: 'Instructora en Alura Latam',
			photo: 'https://github.com/JeanmarieAluraLatam.png ',
			team: 'Innovacion y gestion',
			id: uuid(),
			like: true
		},
		{
			name: 'Genesys Rondón',
			booth: 'Desarrolladora de software e instructora',
			photo: 'https://github.com/genesysaluralatam.png',
			team: 'Innovacion y gestion',
			id: uuid(),
			like: true
		},
		{
			name: 'Jose Gonzalez',
			booth: 'Dev. FullStack',
			photo: 'https://github.com/JoseDarioGonzalezCha.png',
			team: 'Innovacion y gestion',
			id: uuid(),
			like: true
		}
	])
	const [teams, setTeams] = useState<States['teams']>(INITIAL_TEAMS)

	const setNewContributor = (data: Data['contributor']): void => {
		setInfoContributors([...infoContributors, data])
	}

	const deleteContributor = (id: string): void => {
		const newContributors = infoContributors.filter(
			(contributor) => contributor.id !== id
		)
		setInfoContributors(newContributors)
	}

	const changeColor = (color: string, id: string): void => {
		const changedColorTeams = teams.map((team) => {
			if (team.id === id) {
				team.primaryColor = color
			}
			return team
		})
		setTeams(changedColorTeams)
	}

	const handleClick = (): void => {
		setToggleForm(!toggleForm)
	}

	const createTeam = (newTeam: Data['team']): void => {
		setTeams([...teams, newTeam])
	}

	const changeLike = (id: string): void => {
		const changedContributors = infoContributors.map((contributor) => {
			if (contributor.id === id) {
				contributor.like = !contributor.like
			}
			return contributor
		})
		setInfoContributors(changedContributors)
	}

	return (
		<>
			<Header />
			{toggleForm && (
				<Form
					teamsInfo={teams.map((team) => {
						return { teamName: team.teamName, id: team.id }
					})}
					setNewContributor={setNewContributor}
					createTeam={createTeam}
				/>
			)}
			<MyOrg handleClick={handleClick} />
			{teams.map((team) => (
				<Team
					key={team.id}
					team={team}
					contributors={infoContributors.filter(
						(contributor) => contributor.team === team.teamName
					)}
					deleteContributor={deleteContributor}
					changeColor={changeColor}
					changeLike={changeLike}
				/>
			))}
			<Footer />
		</>
	)
}

export default App
