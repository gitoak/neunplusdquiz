export default interface IContainer {
	type: 'styled' | 'no-style'
	spacing?: boolean
	centered?: boolean
	children: any
	className?: string 
}
