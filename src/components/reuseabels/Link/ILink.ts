export default interface ILink {
	type: 'link' | 'btn' | 'navLink'
	children: any
	to: string
	className?: string
}
