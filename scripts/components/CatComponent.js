var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.cats.get('name')}</td>
				<td>{this.props.cats.get('type')}</td>
				<td><a href="{this.props.cats.get('picture')}">Picture Link</a></td>
			</tr>
		);
	}
})
