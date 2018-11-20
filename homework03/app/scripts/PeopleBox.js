import React from 'react';
import $ from 'jquery';
import PersonList from './PersonList';
import PersonForm from './PersonForm';
import '../css/base.css';

//Contains information for the list of peopel, similar to a comment box
module.exports = React.createClass({
  loadPeopleFromServer: function() {
    //GET each person from the server
    $.ajax({
      type: 'GET',
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handlePersonSubmit: function(person) {
    //Use react event handling to update with each new person
    var people = this.state.data;
    person.id = Date.now();
    var newPeople = people.concat([person]);
    this.setState({data: newPeople});

    //POST each new person
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: person,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: people});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  //Getter function for data
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadPeopleFromServer();
    setInterval(this.loadPeopleFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="personBox">
        <h1>People</h1>
        <PersonList data={this.state.data} />
        <PersonForm onPersonSubmit={this.handlePersonSubmit} />
      </div>
    );
  }
});