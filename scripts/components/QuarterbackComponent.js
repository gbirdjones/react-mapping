var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.quarterbacks.get('name')}</td>
				<td>{this.props.quarterbacks.get('team')}</td>
				<td>{this.props.quarterbacks.get('completions')}</td>
				<td>{this.props.quarterbacks.get('attempts')}</td>
				<td>{this.props.quarterbacks.get('yards')}</td>
				<td>{this.props.quarterbacks.get('touchdowns')}</td>
				<td>{this.props.quarterbacks.get('interceptions')}</td>
				<td>{this.props.quarterbacks.get('sacks')}</td>
			</tr>
		);
	}
})
