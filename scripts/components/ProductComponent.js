var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.products.get('name')}</td>
				<td>{this.props.products.get('description')}</td>
				<td>{this.props.products.get('quantity')}</td>
				<td>${this.props.products.get('price')}</td>
			</tr>
		);
	}
})
