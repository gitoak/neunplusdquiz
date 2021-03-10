import React from 'react'
import IList from './IList'
import './List.scss'

const List = (props: IList): JSX.Element => {
	return (
		<ul className={'list '.concat('list-', props.type)}>
			{React.Children.map(props.children, (child) => {
				return <li>{child}</li>
			})}
		</ul>
	)
}

export default List
