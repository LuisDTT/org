import styled from 'styled-components'

interface Props {
	labelName: string
	name: string
	placeholder: string
	required: boolean
	value: string
	type?: string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField = ({
	labelName,
	name,
	placeholder,
	required,
	value,
	handleChange,
	type = 'text'
}: Props): JSX.Element => {
	return (
		<Container>
			<label htmlFor={name}>{labelName}</label>
			<input
				type={type}
				placeholder={placeholder}
				required={required}
				value={value}
				name={name}
				id={name}
				onChange={handleChange}
				className={`input-${type}`}
			/>
		</Container>
	)
}

const Container = styled.div`
	font-family: 'Montserrat', sans-serif;
	margin: 24px 0;
	label {
		font-size: 18px;
		font-weight: 600;
		display: block;
		margin-bottom: 8px;
	}
	input {
		width: 100%;
		background-color: #fff;
		box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
		border-style: none;
		padding: 30px 20px;
		outline-color: #6278f7;
		font-size: 16px;
		box-sizing: border-box;
	}

	.input-color {
		height: 40px;
		padding: 5px 20px;
	}
`
