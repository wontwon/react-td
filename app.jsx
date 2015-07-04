var App = React.createClass({
	mixins: [ReactMeteorData],
	render() {
		return <div>Hello world!</div>;
	}
});

if (Meteor.isClient) {
	Meteor.startup(function () {
		React.render(<App />, document.getElementById('app'));
	});
}