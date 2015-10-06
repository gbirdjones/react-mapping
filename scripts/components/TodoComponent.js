var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.todos.get('description')}</td>
				<td>{this.props.todos.get('completed')}</td>
			</tr>
		);
	}
})
