import { Template } from 'meteor/templating';
 
import './topics.html';

Template.body.helpers({
    topics: [
        {name: 'topic1'},
        {name: 'topic2'}
    ]
})