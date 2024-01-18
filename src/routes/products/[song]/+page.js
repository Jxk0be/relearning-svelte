export function load({ params }) {
	return {
		title: `Title for ${params.song} goes here`,
		content: `Content for ${params.song} goes here`
	};
}