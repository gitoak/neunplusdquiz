import { Link as RRDLink } from 'react-router-dom'
import ILink from './ILink'
import './Link.scss'

function Link(props: ILink): JSX.Element {
	if (props.type === 'btn') {
		return (
			<RRDLink to={props.to} className={`link-btn ${props.className}`}>
				{props.children}
			</RRDLink>
		)
	}
	if (props.type === 'navLink') {
		return (
			<RRDLink to={props.to} className={`link-navlink ${props.className}`}>
				{props.children}
			</RRDLink>
		)
	}
	if (props.type === 'link') {
		return (
			<RRDLink to={props.to} className={`link ${props.className}`}>
				{props.children}
			</RRDLink>
		)
	} else {
		return (
			<RRDLink to={props.to} className={`link ${props.className}`}>
				{props.children}
			</RRDLink>
		)
	}
}

export default Link
